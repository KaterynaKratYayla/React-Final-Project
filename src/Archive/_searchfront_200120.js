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
import {getGeo, getGeneralGeo} from "../../Redux/actions/cities"
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser'
// import 'moment/locale/uk'

moment.locale('uk')

// import 'moment-timezone';

export const GuestItem = ({tour, selector, location, history, list}) =>{

///получаю с помощью своиства истории (history) из компонента search результаты поиска - массив с одним объектом. 
const searchResults = history.location.state;
console.log('[SEARCHRESULTS] : ' , searchResults)

const dispatch = useDispatch();
const data = useSelector(state => state.posts.items)
const geo = useSelector(state => state.cities.locs)
const generalGeo = useSelector(state => state.cities.gen_locs)

const [rate, setRate] = useState([])
const [filteredrate, setFilteredRate] = useState([]);

/// массив, по которому ищет клиент в автокомплите. Комбинирует города и тура вместе
  useEffect ( () => {
     dispatch (getGeo ());
  }, []);
 
  ///получаю из смарта тур имя, тур айди, сити имя, сити айди
  useEffect ( () => {
    dispatch (getGeneralGeo ());
  }, [])

  console.log('[GEO_IN_RENDER] , ' , geo)/// массив, по которому ищет клиент в автокомплите. Комбинирует города и тура вместе
  console.log('[GENERAL_GEO] , ' , generalGeo)///получаю из смарта тур имя, тур айди, сити имя, сити айди

  ///промежуточная переменная :
  ///если клиент искал по городу, то я в geoINDEX увижу массив с одним объектом, где есть айди и имя города поиска
  ///если клиент искал по туру, то я в geoINDEX увижу массив с одним объектом, где есть айди и имя тура поиска
  const geoINDEX = geo.filter(function(item){
    if(searchResults[0].title.toLowerCase() === item.name.toLowerCase()){
      return item.id
    }
   })
  console.log('[GEO_INDEX] : ' , geoINDEX)

  ///используется непосредственно для вывода названий туров на странице.
  ///если айди города, который мне приходит первоначально от Саши Ефица (классификатор contracts) не находится в данных, пришедших в результате поиска клиентом, 
  ///то в переменную filtered возвращается тур айди из классификатора contracts, равное айди, пришедшему от клиентского поиска
  ///иначе возвращается сити айди из классификатора contracts, равное айди из поиска
  const filtered = generalGeo.filter(function(item){
    if(item.city_id.indexOf(geoINDEX[0].id) === -1){
      return item.tour_id === geoINDEX[0].id
    }
    return item.city_id === geoINDEX[0].id
  })
  
  ///отфильтровала данные поиска, чтобы получить только тур айди поиска
  const filtered_tour_id = filtered.map(function(item1){
    return item1.tour_id
  })

  console.log('[FILTERED GEO] : ', filtered)
  console.log('[FILTERED TOUR_ID] : ', filtered_tour_id)
 
//     useEffect ( () => {
//     axios.get(`https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription`,  {
//     }) 
//     .then( res => {
//       console.log('[HUKRES] : ' , res.data)
//         console.log( JSON.parse(res.data.substring(30, res.data.length-1)) );
//         // dispatch( tourResponse(JSON.parse(res.data.substring(30, res.data.length-1))) );
//     })
//     .catch( error => {
//       console.log( '[axios error] : ' , error)
//     });

// }, []);

// useEffect ( () => {
//   axios.get(`https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription`,  {
//   }) 
//   .then( res => {
//     console.log('[HUKRES] : ' , res.data)
//       console.log( JSON.parse(res.data.substring(30, res.data.length-1)) );
//       // dispatch( tourResponse(JSON.parse(res.data.substring(30, res.data.length-1))) );
//   })
//   .catch( error => {
//     console.log( '[axios error] : ' , error)
//   });

// }, []);

// const a = filtered_tour_id.length === 1? filtered_tour_id[0] : null
// console.log('[AAA] : ' , a)

// console.log('[CITY ID] : ' , filtered[0].city_id)

useEffect ( () => {
  axios.get('http://smartbooker.biz/interface/price'
  , {

  params:{
    // adult: '',    
    city_id: filtered[0].city_id,
    // currency_name:'',
    date: moment(searchResults[0].date,'DD-MM-YYYY').format('YYYY-MM-DD'), ///перевела в формат смарта дату поиска
    // provider_id:"6450"
    // duration:'',
    window: 3,
    // price:'',
    // smart_id_category:'',
    // smart_id_tariff:'',
    // smart_id_tariff_type:'',
    tour_id: filtered_tour_id.length === 1? filtered_tour_id[0] : null ///если в ответ при поиске пришёл массив из более 1 айди тура (что может быть при поиске клиентом по городу, а не по туру), то, так как Смарт не принимает массив, данный параметр при передаче данных игнорируется (равен null). Иначе этот параметр в одном экземпляре и он тогда передаётся в Смарт и участвует в фильтрации
    // tour_id: '16765'
      } 
    }
  )
    .then( res => {
      setRate(res.data)
      // console.log('[SET_RATE]' , res.data)

      // const filtered_date = res.data.map(function(item1){
        // const filtered_item = item1.rate.filter(function(item2){

        // })
      // })
      // console.log('[FILTERED_DATE]')
      // console.log('[PRICES] : ' , res.data)
  })
  .catch( error => {
    setRate(undefined)
    console.log( '[axios error] : ' , error)
     });
 }, []);

 console.log('[SET_RATE] : ' , rate)

console.log('[SEARCH DATE] : ', moment(searchResults[0].date,'DD-MM-YYYY').format('YYYY-MM-DD'))

// / сравниваю дату поиска клиентом и первую дату в массиве объектов от смарта, чтобы выделить только цены по первой дате
//  const filteredDate = rate.filter(function(tour){
        // return tour.date.includes(moment(searchResults[0].date,'DD-MM-YYYY').format('YYYY-MM-DD'))
        // return tour.rate.filter(function(item){
            //  return item.date.includes(moment(searchResults[0].date,'DD-MM-YYYY').format('YYYY-MM-DD'))
            // return item.date.includes(moment(searchResults[0].date,'DD-MM-YYYY').format('YYYY-MM-DD'))
          // })
        // })   
        // rate.forEach(function(tour){
        //    let filteredDate = tour.rate.filter(function(item){
        //      return item.date.includes(12)
        //    })
        //    console.log('[FILTERED DATE] : ' , filteredDate) 
        // })
        // const filteredDate = rate.map(function(tour){
        //   return tour.rate.filter(function(item){
        //     return item.date.includes(12)
        //   })
        // })
    // console.log('[FILTERED DATE] : ' , filteredDate) 

    // useEffect ( () => {
      //  axios.get('http://smartbooker.biz/interface/services',  {

        // params: {
          // action: "SiteArktur_SearchAPI_RQ",
          // classifier: 'contract'
          // c_language: "RU",
          // login: "hotelsukraine",
          // password: "5006601",
          // i_currency: "2001",
          // adults_count: searchResults[0].adults,   
          // children_count: searchResults[0].children,  ///must be 0
          // n_quantity: "1",   ////must be 1
          // d_start: searchResults[0].date,  ////must be 2020-12-12
          // n_nights: "5",    ///must be 5 nights
          // i_city: "41",  //// must be ""
          // i_hotel:"6420",    //// must be "6420"
          // tour_name: "" , //// must be ""
          // tour_id: searchResults[0].title
        //  },
        // })
    // .then( res => {

      // console.log('[RES] : ' , res.data)
        // const filteredTours = res.data.filter(function(tour){
        // return tour.tour_id.includes(searchResults[0].title)
        // })      
        // console.log('[FILTERED TOURS] : ' , filteredTours)
          // const newArray = res.data.hotels.hotel.dates.date[0].price.map(function(item){
          //   for (let key in item){
          //     return item[key]
          //   }
          // })

          // setRate([...newArray])
      //     const filteredDate = filteredTours.filter(function(tour){
      //       return tour.date.includes(searchResults[0].date)
      //       })   
      //       console.log('[FILTERED DATE] : ' , filteredDate)
          // console.log('[SMART DATE] : ', moment(filteredTours[0].date).format('L'))
          // console.log('[SEARCH DATE] : ', moment(searchResults[0].date).format('L'))
      // })

      // console.log(filteredTours[0].date)
    // .catch( error => {
      //  console.log( '[axios error] : ' , error)
      //  setRate(undefined)
      //  setFilteredRate(undefined)
        // });
    // }, []);

    // console.log("[RATE] : " , rate)

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
                  filtered.length > 0  && filtered ? (filtered.map((tour) => {
                        return (
                            <li key={tour.tour_id} className='descriptionLi'>
                                <h3 style={{fontSize:'27px'}}>{tour.tour_name} </h3>
                                {/* <p>{tour.about} </p> */}
                                 
                                 {
                                   <ItemContent
                                      tour = {tour}
                                   />
                                 }

                                      {/* {
                                        rate && (rate.map((obj,index,array) => {                                    
                                            return ( */}
                                              {/* <ItemObj
                                                  
                                                  rateArray={rate}
                                                  tour = {tour}
                                                  searchResults = {searchResults}
                                                  history={history}
                                                   /> */}
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
           {/* {
             searchResults[0].click && ( 
                <TourDetails searchResultsNew={searchResults}/>
             )
           } */}
         </>

    </div>
  )
}

const ItemContent = ({tour})=>{
  console.log('[TOUR]' , tour)
  const [result, setResult] = useState('')
  
  useEffect ( () => {
    axios.get(`http://smartbooker.biz/interface/content?id=${tour.tour_id}&language=en&image=en`)
      .then( res => {
        setResult(res.data)
           })
    .catch( error => {
      setResult(undefined)
      console.log( '[axios error] : ' , error)
       });
   }, []);

   console.log('[RESULT] : ' , result)

   return(
    <div>
    {/* <div>Hi Content</div> */}
     <ul>
       <>
     {
       result ? (result.map((trip) =>{
         if(trip.content_name === 'Summary'){
          return (
              <li style={{listStyleType:'none',
                          fontSize: '12px',
                          textAlign: 'left'}}>{ReactHtmlParser(trip.text)}</li>
            )
         }
        }
       )) : (
        <div>{tour.name}{tour.duration}</div> 
       )
     }
      </>
     </ul>
    </div>
   )
}
  
  // const ItemObj = ({rateArray, tour, searchResults, history}) => {
  
  // console.log('[ARRAY] : ', rateArray)
  // console.log('[TOUR ID] : ' , tour.tour_id )

  // const getDetails = (e) => {
  //   searchResults[0].click = e.target.id;
  //   history.push('/search_results_/tour_details' , [searchResults[0]] )
  //   console.log(history)
  // }
   
  // const sortedArray = rateArray.filter(function(item){
  //     if(item.tour_id === tour.tour_id){
  //       return true;
  //      }
  //       else return false;
  //     }).sort(function(a,b){
  //       if(a.n_available > 0 || b.n_available > 0){
  //         return (a.n_value - b.n_value)
  //       }
        
  //     })
    
  //   console.log('[SORTED ARRAY] : ' , sortedArray)
     
  //   return (
  //    <div>
  //    {
  //      sortedArray.length > 0 ? (
  //             <button 
  //                 className='availableButton'
  //                 onClick={getDetails} 
  //                 id={sortedArray[0].tour_id}
  //               >
  //                 From {sortedArray[0].n_value} {sortedArray[0].currency_name}</button>
  //          ) : (
  //             <button className='onrequestButton'>On request only</button>
  //      )
  //     }   
  //     <> 
  //         {
  //             searchResults[0].click && ( 
  //                <TourDetails searchResultsNew={searchResults}/>
  //                 )
  //          }
  //     </>
  //     </div>
  //   )
  // }
       
    
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