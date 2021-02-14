// import React, {useState, useEffect} from 'react'
// // import {history} from '../../Front Page/History'
// import axios from "axios"
// import {useDispatch, useSelector} from 'react-redux'
// import {getPosts} from "../Redux/actions/list"
// import { connect } from 'react-redux';
// import { Route, Switch, BrowserRouter, useHistory } from "react-router-dom";
// import {TourDetails} from '../Components/Pages/tourDetails';
// import './tour.css'
// import {SearchInner} from '../Components/Library/search_block/search'
// import {getGeo, getGeneralGeo} from "../Redux/actions/cities"
// import moment from 'moment';
// import ReactHtmlParser from 'react-html-parser'
// // import 'moment/locale/uk'

// moment.locale('uk')

// // import 'moment-timezone';

// export const GuestItem = ({tour, selector, location, history, list}) =>{

// ///получаю с помощью своиства истории (history) из компонента search результаты поиска - массив с одним объектом. 
// const searchResults = history.location.state;
// console.log('[SEARCHRESULTS] : ' , searchResults)

// const dispatch = useDispatch();
// const data = useSelector(state => state.posts.items)
// const geo = useSelector(state => state.cities.locs)
// const generalGeo = useSelector(state => state.cities.gen_locs)

// const [rate, setRate] = useState([])
// const [filteredrate, setFilteredRate] = useState([]);

// /// массив, по которому ищет клиент в автокомплите. Комбинирует города и тура вместе
//   useEffect ( () => {
//      dispatch (getGeo ());
//   }, []);
 
//   ///получаю из смарта тур имя, тур айди, сити имя, сити айди
//   useEffect ( () => {
//     dispatch (getGeneralGeo ());
//   }, [])

//   console.log('[GEO_IN_RENDER] , ' , geo)/// массив, по которому ищет клиент в автокомплите. Комбинирует города и тура вместе
//   console.log('[GENERAL_GEO] , ' , generalGeo)///получаю из смарта тур имя, тур айди, сити имя, сити айди

//   ///промежуточная переменная :
//   ///если клиент искал по городу, то я в geoINDEX увижу массив с одним объектом, где есть айди и имя города поиска
//   ///если клиент искал по туру, то я в geoINDEX увижу массив с одним объектом, где есть айди и имя тура поиска
//   const geoINDEX = geo.filter(function(item){
//     if(searchResults[0].title.toLowerCase() === item.name.toLowerCase()){
//       return item.id
//     }
//    })
//   console.log('[GEO_INDEX] : ' , geoINDEX)

//   ///используется непосредственно для вывода названий туров на странице.
//   ///если айди города, который мне приходит первоначально от Саши Ефица (классификатор contracts) не находится в данных, пришедших в результате поиска клиентом, 
//   ///то в переменную filtered возвращается тур айди из классификатора contracts, равное айди, пришедшему от клиентского поиска
//   ///иначе возвращается сити айди из классификатора contracts, равное айди из поиска
//   const filtered = generalGeo.filter(function(item){
//     if(item.city_id.indexOf(geoINDEX[0].id) === -1){
//       return item.tour_id === geoINDEX[0].id
//     }
//     return item.city_id === geoINDEX[0].id
//   })
  
//   ///отфильтровала данные поиска, чтобы получить только тур айди поиска
//   const filtered_tour_id = filtered.map(function(item1){
//     return item1.tour_id
//   })

//   console.log('[FILTERED GEO] : ', filtered)
//   console.log('[FILTERED TOUR_ID] : ', filtered_tour_id)

//   const currentMonth = moment().format('YYYY-MM');
//   const today = moment().format('YYYY-MM-DD');

//   console.log('[TODAY MONTH]' , currentMonth, '[TODAY DATE]', today, '[TEST_DATE] : ' , searchResults[0].date + '-01')

// useEffect ( () => {
//   axios.get('http://smartbooker.biz/interface/price'
//   , {

//   params:{ 
//     city_id: filtered[0].city_id,
//     // date: moment(searchResults[0].date,'DD-MM-YYYY').format('YYYY-MM-DD'), ///перевела в формат смарта дату поиска
//     date: currentMonth === searchResults[0].date ? today : (searchResults[0].date + '-01'),
//     window: 30,
//     tour_id: filtered_tour_id.length === 1? filtered_tour_id[0] : null ///если в ответ при поиске пришёл массив из более 1 айди тура (что может быть при поиске клиентом по городу, а не по туру), то, так как Смарт не принимает массив, данный параметр при передаче данных игнорируется (равен null). Иначе этот параметр в одном экземпляре и он тогда передаётся в Смарт и участвует в фильтрации
//       } 
//     }
//   )
//     .then( res => {
//       setRate(res.data)
//       console.log('[SET_RATE]' , res.data)
//   })
//   .catch( error => {
//     setRate(undefined)
//     console.log( '[axios error] : ' , error)
//      });
//  }, []);

//  console.log('[SET_RATE] : ' , rate)

//     return(
//         <div class='searchrender_Wrapper'>
      
//           <div>
//           <h3>Search Results</h3>
//               <SearchInner />
//                </div>
                 
//                  <div>
//                   <ul className='descriptionUl'>
//                     <>
//                       {
//                         filtered.length > 0  && filtered ? (filtered.map((tour) => {
//                           return (
//                             <li key={tour.tour_id} className='descriptionLi'>
//                                 <h3 style={{fontSize:'27px',
//                                              color: '#001959'}}>
//                                                     {tour.tour_name} 
//                                 </h3>

//                                  <div class='descriptionContent'>                        
//                                  {
//                                    <ItemContent
//                                       tour = {tour}
//                                    />
//                                  }
                                
//                                  {
//                                   rate && (rate.map((tariff) => {
//                                    if(tour.tour_id === tariff.tour_id){
//                                     return (
//                                     <ItemObj
//                                        key={tariff.tour_id}
//                                        tariff = {tariff}
//                                        searchResults = {searchResults}
//                                        history={history}
//                                      />
//                                     )
//                                   }
//                                  }
//                                 ))
//                               }
//                               </div>
                
//                             </li>
                           
//                            )
//                           }
//                         )
//                       ) : (
//                        <div className='noResultSearch'>
//                           Your Search returned no results. Please change your parameters and try once again.
//                       </div> )           
//                   }                    
//               </>
//               {/* <hr /> */}
//            </ul>  
//          </div>
//          <>
//            {/* {
//              searchResults[0].click && ( 
//                 <TourDetails searchResultsNew={searchResults}/>
//              )
//            } */}
//          </>

//     </div>
//   )
// }

// const ItemContent = ({tour})=>{
//   console.log('[TOUR]' , tour)
//   const [result, setResult] = useState('')
  
//   useEffect ( () => {
//     axios.get(`http://smartbooker.biz/interface/content?id=${tour.tour_id}&language=en`)
//       .then( res => {
//         setResult(res.data)
//         })
      
//     .catch( error => {
//       setResult(undefined)
//       console.log( '[axios error] : ' , error)
//        });
//    }, []);

//    console.log('[RESULT] : ' , result)

//    return(
//     <div style={{paddingRight: '2vw'}}>
//      <ul class='Ul_ItemContent'>
//        <>
//      {
//        result ? (result.map((trip) =>{
//         if(trip.content_name === 'Summary'){
//           return (
//               <li class='Li_ItemContent'>
//                   {ReactHtmlParser(trip.text)}
//               </li>
//             )
//           }
          
//           else if(trip.content_name === 'Image'){
//             return (
//             <li
//             style={{listStyleType:'none',
//             textAlign: 'left'}}
//             >
//                   <img 
//                       // class='imageSearchrender'
//                      style = {{
//                       width: '18vw',
//                       height: '14vw',
//                       borderRadius: '5px'  
//                       }}
//                       src={'http://' + trip.text[2]}/> 
//               </li>
//             )
//           }
          
//          }
//        )) : (
//         <div>{tour.name}{tour.duration}</div> 
//        )
//      }
//       </>
//      </ul>
//     </div>
//    )
// }
  
//   const ItemObj = ({tariff, searchResults, history}) => {

//     //фильтрую объект с тарифами, датами так, чтобы вывести первую встречающую дату каждого вида (к примеру, у меня пришло
//     //в массиве 10 раз дата 2021-03-03, 3 раза дата 2021-03-04, 4 раза дата 2021-03-05 - я вывожу новый массив, где будет
//     //объект в массиве, где первый раз встречается 2021-03-03, потом объект, где встречается 2021-03-04 первый раз, и т.д.)
//     //это нужно, чтобы вывести список периодов для выбора

//     const filtered_tour_dates = tariff.rate.filter((item1,index,array) =>
//     array.findIndex(t => t.date === item1.date)===index)

//        console.log('[FILTERED_TOUR_DATES] : ' , filtered_tour_dates)

//     const [selection, setSelection] = useState(filtered_tour_dates[0].date);
//     // const [detailsList, setdetailsList] = useState([{}]);

//         console.log('[ItemObj TARIFF]', tariff)
//         console.log('[ItemObj searchResults]', searchResults)
//         console.log('[ItemObj HISTORY]', history)

//     function selectedPeriod (e) {
//       console.log('SELECTED : ' , e.target.value)
//       setSelection(e.target.value)

//   // history.push('/search_results' , [...list, newList])
//   // console.log('[HISTORY : ] ', history)
// }

//     const getDetails = (e) => {
      
//       history.push('/search_results_/tour_details' , [searchResults[0]] )
//       console.log(history)
//           }

//   return (
//     <div class='div_ItemObj'>
    
//       <div className='availablePeriods'>
//        <div style={{fontSize: '12px',fontWeight: 'bold'}}>Available dates : </div>
//         <select 
//             value={selection}
//             onChange={selectedPeriod}
//             style={{fontSize: '12px',color:'#001959'}}>
//           <>
//             {
//               filtered_tour_dates && filtered_tour_dates.map((filter,index)=>{
//                 return (
//                   <option 
//                    value={filter.date}
//                     key={tariff.tour_id, '-' , index}>
//                       {filter.date} -- {moment(filter.date).add(tariff.duration, 'days').format('YYYY-MM-DD')} ({tariff.duration} days)  
//                     </option>
//                 )    
//               })
//             }
//           </>
//         </select>
//     </div>

//     <div className='minimumRate'>   
//        <div style={{fontSize: '10px', color:"grey", fontStyle:'italic'}}>{selection}</div>
//        <MinRate 
//           selection={selection}
//           datesArray={tariff.rate}
//         />
//       <button 
//           className='availableButton'
//           >VIEW DETAILS
//       </button> 
//       <div style={{fontSize: '10px', color:"grey", fontStyle:'italic'}}>{tariff.tour_id}</div> 
//     </div>

//   </div> 
//    )
//   }
  
//   const MinRate = ({selection, datesArray}) =>{

//     console.log('[SELECTION]' , selection, datesArray)
   
//                     const minRateValue = datesArray.filter(function(item){
//                         if(selection === item.date){
//                           return true;
//                          }
//                           else return false;
//                         }).sort(function(a,b){
//                           // if(a.n_available > 0 || b.n_available > 0){
//                             return (a.n_value - b.n_value)
//                           // }                          
//                         })
                      
//                       console.log('[SORTED ARRAY] : ' , minRateValue[0])

//     return(
//       <div className='minimumRate_details'>Rates from {minRateValue[0].price} UAH</div>
//     )
//   }
  