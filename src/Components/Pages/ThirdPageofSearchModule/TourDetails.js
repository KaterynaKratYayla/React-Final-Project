import React, {useState, useEffect} from 'react'
import axios from "axios"
import ReactHtmlParser from 'react-html-parser'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory , useLocation} from "react-router-dom";
import {getContent} from '../../../Redux/actions/content'
import {ValidateQuery} from '../Helpers/helper'

  export const TourDetails = (props) =>{
    let location = useLocation();
    let history = useHistory();
    
    let search_data = ValidateQuery(location)
    console.log('Tour Details Location', search_data)
  
    const [details, setDetails] = useState([])

    // const dispatch = useDispatch();
    // const data = useSelector(state => state.content.content)
    
    // useEffect ( () => {
    //       dispatch (getContent (search_data.id));
    // }, []);

    useEffect ( () => {
      axios.get(`http://smartbooker.biz/interface/content?id=${search_data.id}&language=en`)
        .then( res => {
          setDetails(res.data)
          })
        
      .catch( error => {
        setDetails(undefined)
        console.log( '[axios error] : ' , error)
         });
     }, []);

    console.log('[DETAILED CONTENT]', details)

      return (
          <div>
            <h2>{search_data.title}</h2>
            <h3>{search_data.selection}</h3>
            <>
              {
                details && details.map((item) =>{
                  if(item.content_name === 'Body'){
                    return (
                        <div>
                            {ReactHtmlParser(item.text)}
                        </div>
                      )
                    }
                })
              }
            </>

            {/* {
               details && (details.map(item => {

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
 
             ) */}
            {/* } */}
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
