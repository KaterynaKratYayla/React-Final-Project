import React, {useState, useEffect} from 'react'
import {history} from '../Front Page/History'
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import {getPosts} from "../Redux/actions"
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter, useHistory } from "react-router-dom";
import {TourDetails} from './tourDetails';

export const GuestItem = ({option, selector, location, history, list}) =>{

const searchResults = history.location.state;

const dispatch = useDispatch();
const data = useSelector(state => state.posts.items)

const [result, setResult] = useState('')
const [rate, setRate] = useState([])

// console.log('[GuestItem option] : ', option)
// console.log('[GuestItem selector] : ', selector)
// console.log('[GuestItem location] : ', location)
// console.log('[GuestItem list] : ', list)
 
       useEffect ( () => {
        // fetch('https://next.json-generator.com/api/json/get/V1TbDaNiK')
          dispatch (getPosts ());
        //   .then(res => {
        //     if (res.status === 404) {
        //         throw 'Page error'
        //     }
        //     return res.json()
        //     })
        //    .then(user => {
        //             console.log(user)
        //             setResult(user)												
        //         })
        //     .catch(error => {
        //     console.log('error',error);
        //     setResult(undefined)
        //    })
    }, []);

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

    console.log(data)

    useEffect ( () => {
       axios.get('http://smartbooker.biz/interface/services',  {

        params: {
          action: "SiteArktur_SearchAPI_RQ",
          c_language: "RU",
          login: "hotelsukraine",
          password: "5006601",
          i_currency: "2001",
          adults_count: searchResults[0].adults,   /// must be 0
          children_count: searchResults[0].children,  ///must be 0
          n_quantity: "1",   ////must be 1
          d_start: searchResults[0].date,  ////must be 2020-12-12
          n_nights: "5",    ///must be 5 nights
          i_city: "",  //// must be ""
          i_hotel:"6420",    //// must be "6420"
          tour_name: ""  //// must be ""
         },
        })
    .then( res => {
          setRate(res.data.hotels.hotel.dates.date[0].price)
      })
    .catch( error => {
       console.log( '[axios error] : ' , error)
       setRate(undefined)
        });
    }, []);

    // console.log('[AXIOS RATE]' , rate[0])
    // console.log(rate[0] instanceof Object)

    // rate.forEach(function(item){
    //     Object.keys(item.price).map(key => 
    //        Object.keys(item.price[key]).map(key =>
    //         console.log(key.key)))
    // })
   
 

    // console.log("[AXIOS TEST] : ", Kate)

    console.log("[SET RATE] : " , rate)

    return(
        <div>
         
          <h3>Search Results</h3>
          <ul className='descriptionUl'>
          
              <>
                {
                  data.length > 0 ? (data.map((tour) => {
                        return (
                            <li key={tour.id} className='descriptionLi'>
                                <h3>{tour.company} </h3>
                                <p>{tour.about} </p>
                                 
                                      {
                                        rate && (rate.map(obj => {
                                          return (
                                              <ItemObj
                                                  object = {obj}
                                                  tour = {tour}
                                                  searchResults = {searchResults}
                                                  history={history}
                                                   />
                                                  )
                                                 }
                                              )
                                          )
                                      } 
                            </li>
                           )
                          }
                        )
                      ) : (
                       <div>
                          No results found for {result}
                      </div> )           
                  }                    
            </>
         </ul>  
         <>
           {
             searchResults[0].click && ( 
                <TourDetails searchResultsNew={searchResults}/>
             )
           }
         </>

    </div>
  )
}
  
  const ItemObj = ({object, tour, searchResults, history,location}) => {
  
    // const history = useHistory();
  // console.log('[OBJECT] : ', object , '[TOUR] : ' , tour )
  console.log(searchResults)

  const getDetails = (e) => {
    console.log('[EVENT] : ' , e , '[EVENT TARGET] : ' , e.target)
    searchResults[0].click = e.target.id;
    history.push('/search_results_/tour_details' , [searchResults[0]] )
    // console.log(history)
  }

  for(let key in object){
   if(object[key].tour_id === tour.tour_id) {
    return(
           <>
          
              {
                <li key={object[key].tour_id} className='descriptionLi'>
                    <h3>{object[key].tour_name}</h3>
                    
                    <div>
                        <h4>{object[key].category}</h4>
                        <button onClick={getDetails} id={object[key].tour_id}>From {object[key].n_value }{ object[key].currency_name}</button>
                    </div>
                </li>
              }
             
       </>
      )
    }
    else return null;
   }
  }