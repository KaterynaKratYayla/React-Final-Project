import React, {useState, useEffect} from 'react'
// import {history} from '../Front Page/History'
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import {getPosts} from "../../../Redux/actions/list"
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

export const TourDetails = ({history}) =>{

    history = useHistory();
  
    const re_searchResults = history.location.state;

    // console.log('[RE_SEARCHRESULTS] : ' , re_searchResults[0].click)
    const [re_rate, setRateAgain] = useState([])

    const dispatch = useDispatch();
    const data = useSelector(state => state.posts.items)
    useEffect ( () => {
          dispatch (getPosts ());
    }, []);

  console.log(data)

    /////!!!!!!!!!!!!!!!!Wне будет в живой системе. JSON по инфо о турах фейковый, а ценовой запрос - реальный////
    ////Для правильного вывода мне нужно , чтобы в инфо о турах приходит соответствующий id!!!!!!!/////////
      // data[0].tour_id = '16614';
      // data[1].tour_id = '16465';

      data.forEach(function(item, index){
        item.tour_id='';
         if(index === 0){
           item.tour_id='16614'
          }
         else if(index === 1){
           item.tour_id='16465'
          }
         else {item.tour_id='17777'}
      })
    /////////////!!!!!!!!!!!!!!!!!!!!!???????????????????????????//////////////////


    useEffect ( () => {
        axios.get('http://smartbooker.biz/interface/services',  {

         params: {
           action: "SiteArktur_SearchAPI_RQ",
           c_language: "RU",
           login: "hotelsukraine",
           password: "5006601",
           i_currency: "2001",
           adults_count: re_searchResults[0].adults,   /// must be 0
           children_count: re_searchResults[0].children,  ///must be 0
           n_quantity: "1",   ////must be 1
           n_available: "",
           d_start: re_searchResults[0].date,  ////must be 2020-12-12
           n_nights: "5",    ///must be 5 nights
           i_city: "",  //// must be ""
           i_hotel:"6420",    //// must be "6420"
           tour_name: ""  //// must be ""
          },
         })
     .then( res => {
           setRateAgain(res.data.hotels.hotel.dates.date[0].price)
       })
     .catch( error => {
        console.log( '[axios error] : ' , error)
        setRateAgain(undefined)
         });
     }, []);

     console.log('[RE_RATE TOUR]' , re_rate)

    //  console.log('[DATA] : ' , data)
     
     
        return (
          <div>
            {
               re_searchResults && (re_searchResults.map(item => {

                for (let key in re_rate[0]){
                 if(re_rate[0][key].n_available !== "0" ){
                  return (
                         <>
                                <h2>{item.title}</h2>
                                  <div className = 'rateDetailsGrid'>
                                      <div>Package Inclusions : </div>
                                        <ul>
                                            <li>Room type : {re_rate[0][key].category}</li>
                                            <li>Package capacity : {re_rate[0][key].adults} adults</li>
                                            <li>Board type : {re_rate[0][key].tariff}</li>
                                            
                                            <li style={{
                                                backgroundColor: 'lightgreen' , 
                                                display: 'block', 
                                                border: '2px solid darkgreen',
                                                width: '15vw'}}>
                                                    Availablity : {re_rate[0][key].n_available}
                                            </li>
                                            
                                            <li style={{fontWeight: 'bold', fontSize: '15px'}}>TOTAL package Rate for {re_rate[0][key].adults} adults : 
                                            <span>{re_rate[0][key].currency_name} {re_rate[0][key].n_value}</span>
                                            </li>

                                        </ul>
                                  </div>
                          </>
                      )
                     }
                     else {
                       return (
                         <h2>Tour not found. Please repeat your search</h2>
                       )
                     }
                       
                   }
               
                     
                  }
                )
 
             )
            }
            {/* {

                <Description itemClick={re_searchResults} data={data}/>
            } */}
             
        </div>
      )
    } 



    // const Description = (itemClick, data) =>{
    //    console.log('[DESCRIPTION] : ' , itemClick, data)
    //     return(
    //         data.length > 0 && (data.map(tour => {
    //             if(tour.tour_id === itemClick[0].click) {
    //                return (<span>{tour.about} </span>)
    //                }
    //                else return <span>Please choose another tour. We are fully booked!</span>
    //              }
    //         ))
    //     )   
    // }
