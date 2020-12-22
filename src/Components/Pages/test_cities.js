import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import {getDescription, getENdescription , getImages} from "../../Redux/actions/list"
import './hotels.css'
import axios from "axios"
// import {HotelGallery} from '../Library/Hotel Photo Gallery/photoGallery'
import {SingleTour} from './single_tour'

export const TestCities = (props) =>{

//   const dispatch = useDispatch();
//   const descrip = useSelector(state => state.hotels.parts)
const [city, setCity] = useState([])

// useEffect ( () => {
//   dispatch (getDescription ());
// }, []);

    useEffect ( () => {
        axios.get('http://smartbooker.biz/interface/services',  {
         params: {
            action: "cities"
          }
         })
         .then( res => {
    //         // const newArray = res.data.hotels.hotel.dates.date[0].price.map(function(item){
    //         //   for (let key in item){
    //             // return item[key]
    //         //   }
            console.log('[RES] : ' , res)
    //         // })
    //         // setCity([...newArray])
        })
      .catch( error => {
         console.log( '[axios error] : ' , error)
    //     //  setCity(undefined)
          });
      }, []);

      
      useEffect ( () => {
        axios.get('http://smartbooker.biz/interface/services', {
          params: {
            action: "hotelsOfCity",
            i_city: "19"
          }
        })
        .then( data => {
         console.log('[DATA] : ' , data)
           })
        .catch( error => {
         console.log( '[axios error] : ' , error)
           });
         }, []);
    
    return(
        <div>
            <h2>HI CITIES</h2>
            <SingleTour />
        </div>
    )
  }
