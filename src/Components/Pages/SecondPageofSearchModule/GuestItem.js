import React, {useState, useEffect} from 'react'
// import {history} from '../../Front Page/History'
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import {getPosts} from "../../../Redux/actions/list"
import { connect } from 'react-redux';
import { useLocation, Route, Switch, BrowserRouter, useHistory } from "react-router-dom";
// import {TourDetails} from './tourDetails';
import './SearchItems.css'
import {SearchInner} from '../../Library/SearchPannel/SearchPannel'
import {getGeo, getGeneralGeo} from "../../../Redux/actions/cities"
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser'
import {ItemContent} from './ItemContent'
import {ItemObj} from './ItemObj'
import {ValidateQuery} from '../Helpers/helper'
// import 'moment/locale/uk'

moment.locale('uk')

// import 'moment-timezone';

export const GuestItem = ({tour, selector, list}) =>{

///получаю с помощью своиства истории (history) из компонента search результаты поиска - массив с одним объектом. 
let location = useLocation();
let history = useHistory();

let search_data = ValidateQuery(location)
console.log('GUEST ITEM LOCATION', location)

// // const searchResults = search_data.query.replace(/_/g, " ")
// console.log('[SEARCHRESULTS] : ' , searchResults , 'DATSENKO',search_data, search_data.title.replace(/_/g, " "))
console.log('DATSENKO',search_data)

const dispatch = useDispatch();
const test = useSelector(state => state)
const data = useSelector(state => state.posts.items)
const generalGeo = useSelector(state => state.cities.gen_locs)

const [rate, setRate] = useState([])
const [filtered1, setFiltered1] = useState([]);
const [geoindex, setGeoindex] = useState([]);

console.log('[TEST]', test)
 
  ///получаю из смарта тур имя, тур айди, сити имя, сити айди
  useEffect ( () => {
    dispatch (getGeneralGeo ());
  }, [])

  console.log('[GENERAL_GEO] , ' , generalGeo)///получаю из смарта тур имя, тур айди, сити имя, сити айди 

  ///используется непосредственно для вывода названий туров на странице.
  ///если айди города, который мне приходит первоначально от Саши Ефица (классификатор contracts) не находится в данных, пришедших в результате поиска клиентом, 
  ///то в переменную filtered возвращается тур айди из классификатора contracts, равное айди, пришедшему от клиентского поиска
  ///иначе возвращается сити айди из классификатора contracts, равное айди из поиска
 
  const filtered = generalGeo.filter(function(item){
      if(item.city_id.indexOf(search_data.id) === -1){
        return item.tour_id === search_data.id
      }
      return item.city_id === search_data.id
    })

    console.log('[FILTERED]', filtered)
  
  ///отфильтровала данные поиска, чтобы получить только тур айди поиска
  const filtered_tour_id = filtered.map(function(item1){
    return item1.tour_id
  })

  // console.log('[FILTERED GEO] : ', filtered)
  console.log('[FILTERED TOUR_ID] : ', filtered_tour_id)

  const currentMonth = moment().format('YYYY-MM');
  const today = moment().format('YYYY-MM-DD');

  console.log('[TODAY MONTH]' , currentMonth, '[TODAY DATE]', today, '[TEST_DATE] : ' , search_data.date + '-01')

useEffect ( () => {
  axios.get('http://smartbooker.biz/interface/price'
  , {

  params:{ 
    city_id: search_data.city_id,
    date: currentMonth === search_data.date ? today : (search_data.date + '-01'),
    window: 30,
    tour_id: filtered_tour_id.length === 1? filtered_tour_id[0] : null ///если в ответ при поиске пришёл массив из более 1 айди тура (что может быть при поиске клиентом по городу, а не по туру), то, так как Смарт не принимает массив, данный параметр при передаче данных игнорируется (равен null). Иначе этот параметр в одном экземпляре и он тогда передаётся в Смарт и участвует в фильтрации
      } 
    }
  )
    .then( res => {
      setRate(res.data)
      console.log('[SET_RATE]' , res.data)
  })
  .catch( error => {
    setRate(undefined)
    console.log( '[axios error] : ' , error)
     });
 }, []);

 console.log('[SET_RATE] : ' , rate)

    return(
        <div class='searchrender_Wrapper'>
      
          <div>
          <h3>Search Results</h3>
              <SearchInner />
               </div>
                {/* <div>{history.location.pathname}</div> */}
                 <div>
                  <ul className='descriptionUl'>
                    <>
                      {
                        filtered.length > 0  && filtered ? (filtered.map((tour) => {
                          return (
                            <li key={tour.tour_id} className='descriptionLi'>
                                <h3 style={{fontSize:'27px',
                                             color: '#001959'}}>
                                                    {tour.tour_name} 
                                </h3>

                                 <div class='descriptionContent'>                        
                                 {
                                   <ItemContent
                                      tour = {tour}
                                   />
                                 }
                                
                                 {
                                  rate && (rate.map((tariff) => {
                                   if(tour.tour_id === tariff.tour_id){
                                    return (
                                    <ItemObj
                                       key={tariff.tour_id}
                                       tariff = {tariff}
                                       searchResults = {search_data}
                                       history={history}
                                       tour_name={tour.tour_name}
                                     />
                                    )
                                  }
                                 }
                                ))
                              }
                              </div>
                              </li>
                           )
                          })) : (
                       <div className='noResultSearch'>
                          Your
                           Search returned no results. Please change your parameters and try once again.
                      </div> )           
                  }                    
              </>
              {/* <hr /> */}
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

