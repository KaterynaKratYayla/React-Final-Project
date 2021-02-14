import React, {useState, useEffect} from 'react'
// import {history} from '../../Front Page/History'
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter, useHistory } from "react-router-dom";
// import {TourDetails} from './tourDetails';
import '../tour.css'
import {SearchInner} from '../../Library/search_block/search'
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser'
// import 'moment/locale/uk'

moment.locale('uk')
  
  export const MinRate = ({selection, datesArray}) =>{

    console.log('[SELECTION]' , selection, datesArray)
   
                    const minRateValue = datesArray.filter(function(item){
                        if(selection === item.date){
                          return true;
                         }
                          else return false;
                        }).sort(function(a,b){
                          // if(a.n_available > 0 || b.n_available > 0){
                            return (a.n_value - b.n_value)
                          // }                          
                        })
                      
                      console.log('[SORTED ARRAY] : ' , minRateValue[0])

    return(
      <div className='minimumRate_details'>Rates from {minRateValue[0].price} UAH</div>
    )
  }
  