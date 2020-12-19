import React, {useState, useEffect} from 'react'
// import {history} from '../../Front Page/History'
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import {getPosts} from "../../Redux/actions/list"
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter, useHistory } from "react-router-dom";
import {TourDetails} from './tourDetails';
import './tour.css'
import {SearchInner} from '../Library/search_block/search'

export const GuestItem = ({option, selector, location, history, list}) =>{

const searchResults = history.location.state;

const dispatch = useDispatch();
const data = useSelector(state => state.posts.items)

const [result, setResult] = useState('')
const [rate, setRate] = useState([])
const [filteredrate, setFilteredRate] = useState([]);
 
       useEffect ( () => {
          dispatch (getPosts ());
    }, []);

    console.log('[BEFORE] : ' , data)

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

    console.log('[AFTER] : ' , data)

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
          const newArray = res.data.hotels.hotel.dates.date[0].price.map(function(item){
            for (let key in item){
              return item[key]
            }
          })

          setRate([...newArray])
          
      })
    .catch( error => {
       console.log( '[axios error] : ' , error)
       setRate(undefined)
       setFilteredRate(undefined)
        });
    }, []);

    console.log("[FILTERED RATE] : " , rate)

    return(
        <div class='searchrender_Wrapper'>
      
          <div>
          <h3>Search Results</h3>
              <SearchInner />
          </div>
          <div>
            <ul className='descriptionUl'>
              <>
                {
                  data.length > 0  && rate ? (data.map((tour) => {
                        return (
                            <li key={tour.id} className='descriptionLi'>
                                <h3>{tour.company} </h3>
                                <p>{tour.about} </p>
                                 
                                      {/* {
                                        rate && (rate.map((obj,index,array) => {                                    
                                            return ( */}
                                              <ItemObj
                                                  // object = {obj}
                                                  rateArray={rate}
                                                  tour = {tour}
                                                  searchResults = {searchResults}
                                                  history={history}
                                                   />
                                                    {/* )                                           */}
                                                  {/* } */}
                                               {/* ) */}
                                          {/* ) */}
                                      {/* }  */}
                
                            </li>
                           )
                          }
                        )
                      ) : (
                       <div className='noResultSearch'>
                          Your Search returned no results. Please change your parameters and try once again.
                      </div> )           
                  }                    
              </>
           </ul>  
         </div>
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
  
  const ItemObj = ({rateArray, tour, searchResults, history}) => {
  
  console.log('[ARRAY] : ', rateArray)
  console.log('[TOUR ID] : ' , tour.tour_id )

  const getDetails = (e) => {
    // console.log('[EVENT] : ' , e , '[EVENT TARGET] : ' , e.target)
    searchResults[0].click = e.target.id;
    history.push('/search_results_/tour_details' , [searchResults[0]] )
    console.log(history)
  }
   
  const sortedArray = rateArray.filter(function(item){
      if(item.tour_id === tour.tour_id){
        return true;
       }
        else return false;
      }).sort(function(a,b){
        if(a.n_available > 0 || b.n_available > 0){
          return (a.n_value - b.n_value)
        }
        
      })
    
    console.log('[SORTED ARRAY] : ' , sortedArray)
     
    return (
     <div>
     {
       sortedArray.length > 0 ? (
              <button 
                  className='availableButton'
                  onClick={getDetails} 
                  id={sortedArray[0].tour_id}
                >
                  From {sortedArray[0].n_value} {sortedArray[0].currency_name}</button>
           ) : (
              <button className='onrequestButton'>On request only</button>
       )
      }   
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
       
    
    /* // console.log('[SORTED_ARRAY] : ' , sortedArray) */
  
      
    /* // if(object.tour_id === tour.tour_id){ */
    /* //   return( */
    /* //         <>        */
    /* //              { */

   
    /* //                <li key={object.tour_id} className='descriptionLi'>
                       
    //                    <div>
    //                        <h4>{object.category}</h4>
    //                        <button  */
    /* //                             style={{backgroundColor: 'lightgreen',  */
    /* //                                     color: 'black' , 
    //                                     fontWeight: 'bold'}} 
    //                             onClick={getDetails} 
    //                             id={object.tour_id}>
    //                                  From {object.n_value }{ object.currency_name}
    //                        </button> */
    /* //                    </div> */
    /* //                </li>
    //              }
                  // <> 
                  //    {
                  //      searchResults[0].click && ( 
                  //        <TourDetails searchResultsNew={searchResults}/>
                  //       )
                  //    }
                  // </>
    //          </>
    //      ) */
    /* //    }
    //    else return (<div>
    //                    <h4>{object.category}</h4>
    //                   <button 
    //                     style={{background: 'red' , 
    //                             color: 'white' , 
    //                             fontWeight: 'bold'}}>
    //                       On Request Only
    //                   </button>
    //                </div>
    //    ) */