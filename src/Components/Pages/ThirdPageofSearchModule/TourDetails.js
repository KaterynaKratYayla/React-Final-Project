import React, {useState, useEffect} from 'react'
import axios from "axios"
import ReactHtmlParser from 'react-html-parser'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory , useLocation} from "react-router-dom";
import {getContent} from '../../../Redux/actions/content'
import {ValidateQuery} from '../Helpers/helper'

import {Gallery} from '../../Library/PhotoGallery/PhotoGallery'
import {Moon} from '../../Library/Icons/moon.js'
import {Sun} from '../../Library/Icons/sun.js'

import './TourDetailsCSS.css'

  export const TourDetails = (props) =>{
    let location = useLocation();
    let history = useHistory();
    
    let search_data = ValidateQuery(location)
    console.log('Tour Details Location', search_data)
  
    const [details, setDetails] = useState([{}]);
    const [rateDetails, setrateDetails] = useState([{}]);

    // const dispatch = useDispatch();
    // const data = useSelector(state => state.content.content)
    
    // useEffect ( () => {
    //       dispatch (getContent (search_data.id));
    // }, []);

    useEffect ( () => {
      axios.get(`http://smartbooker.biz/interface/content?id=${search_data.tour_id}&language=en`)
        .then( res => {
          setDetails(res.data)
          })
        
      .catch( error => {
        setDetails(undefined)
        console.log( '[axios error] : ' , error)
         });
     }, []);

    console.log('[DETAILED CONTENT]', details)

    useEffect ( () => {
      axios.get('http://smartbooker.biz/interface/price'
      , {
    
      params:{ 
        city_id: search_data.city_id,
        // date: currentMonth === search_data.date ? today : (search_data.date + '-01'),
        date : search_data.selection,
        window: 30,
        tour_id: search_data.tour_id
          } 
        }
      )
        .then( res => {
          setrateDetails(res.data)
          console.log('setrateDetails]' , res.data)
      })
      .catch( error => {
        setrateDetails(undefined)
        console.log( '[axios error] : ' , error)
         });
     }, []);
    
     console.log('[setrateDetails] : ' , rateDetails[0].duration)

      return (
          <div class='TourDetailsWrapper'>
            <h2>{search_data.tour_name.replace(/%20/g , ' ')}</h2> 
            <div class='Icons'>           
              
                <Sun />
              
                <div style={{marginLeft: '0.4vw'}}>{rateDetails[0].duration} days</div>
              
                <div style={{marginLeft: '0.4vw', marginRight: '0.4vw'}}> - </div>
              
                <Moon />

                <div style={{marginLeft: '0.4vw'}}> {rateDetails[0].duration - 1} nights </div>

            </div>
            
            <div class='TourDetailsInner'>
              <div>
                {
                   details && details.map((item) =>{
                    if(item.content_name === "Image"){
                      return (
                          <div class='GalleryTourDetails'>
                             <Gallery galleryImages={item.text}/>
                          </div>
                        )
                      }  
                    }
                  )
                }
              </div>
              <div class='BookingDetails'>
                <h3>Tour Booking Details {rateDetails[0].duration}</h3>
                 <div class='BookingChoice'>
                   
                   <div style={{display: 'flex', flexDirection: 'column'}}>
                       <h4>Chosen date of travel : </h4> 
                       <div>{search_data.selection}</div>
                    </div>

                    <h4>Available dates</h4>
                 </div>
              </div>

            </div>
            <div>
              {
                details && details.map((item) =>{
                  if(item.content_name === 'Body'){
                    return (
                        <div class='DescriptionTourDetails'>
                            {ReactHtmlParser(item.text)}
                        </div>
                      )
                    }
                })
              }
            </div>
        </div>
      )
    } 