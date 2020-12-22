import React, {useState, useEffect} from 'react'
//import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
// import {history} from '../../Front Page/History'
// import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import {getTour, ENgetTour, IMGgetTour} from "../../Redux/actions/tour"
// import { connect } from 'react-redux';
// import { Route, Switch, BrowserRouter, useHistory } from "react-router-dom";
// import {TourDetails} from './tourDetails';
import './hotels.css'
import {HotelGallery} from '../Library/Hotel Photo Gallery/photoGallery'
// import {SearchInner} from '../Library/search_block/search'

export const SingleTour = ({option, selector, location, history, list}) =>{

  const dispatch = useDispatch();
  const tourdescription = useSelector(state => state.tours.touritems)
  const en_tourdescription = useSelector(state => state.tours.en_touritems)
  const images_tourdescription = useSelector(state => state.tours.images)

useEffect ( () => {
  dispatch (getTour ());
}, []);

useEffect ( () => {
  dispatch (ENgetTour ());
}, []);

useEffect ( () => {
  dispatch(IMGgetTour());
}, []);

console.log('[GETOUR] : ', tourdescription)
console.log('[ENgetTour] : ' , en_tourdescription)
console.log('[IMGgetTour] : ' , images_tourdescription)

// const cleanAnons = enDescrip.anons.replace(/<\/?[^>]+(>|$)/g, "");
// console.log(cleanAnons)



return(
  
  
 <div class='hotelWrapper'>
   <h2>{en_tourdescription.name} hotel in {en_tourdescription.name}</h2>

         { 
            images_tourdescription && (
                 <HotelGallery galleryImages={images_tourdescription}/>
                  )
        }

      {/* <h3>Hotel Properties</h3> */}
         {/* <div class='htlOutline' > */}
           {/* <span>Hotel star rating</span> <span>{descrip.star_rating}</span> */}
           {/* <span>Amount of rooms</span> <span>{descrip.count_rooms}</span> */}
           {/* <span>Constructed</span> <span>{descrip.date_build}</span> */}
           {/* <span>Renovated</span><span> {descrip.date_renovation}</span> */}
           {/* <span>Amount of floors</span><span>{descrip.floors}</span> */}
           {/* <span>Checkin time</span><span>{descrip.check_in_time}</span> */}
           {/* <span>Checkout time</span><span>{descrip.check_out_time}</span> */}

      {/* </div> */}

      <h3>Hotel Location</h3>
         <div class='htlAddress'>
           <span>Hotel address</span> <span>{en_tourdescription.address} </span>
           {/* <span>Distance to {enDescrip.airport}</span> <span> {descrip.to_airport} meters </span> */}
           {/* <span>Distance to {enDescrip.train_station} </span> <span> {descrip.to_train_station} meters </span> */}
           {/* <span>Distance to the city center of {enDescrip.city}</span><span> {descrip.to_city_center}</span> */}

         </div>

      <h3>Hotel Overview</h3>
         <div class='anons'>{/*ReactHtmlParser(*/en_tourdescription.anons}</div>
      <h3>Hotel Detailed Description</h3>
         <div class='description'>{/*ReactHtmlParser(*/en_tourdescription.description}</div>


 </div>
)



}








// const [rate, setRate] = useState([{}]);
// const [descEn, setDescEn] = useState([]);
// const [descRu, setDescRu] = useState([]);
// const [descUa, setDescUa] = useState([]);
// const [images, setImages] = useState3();


// useEffect (() => {
//   axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription')
//   .then( res => {

//     setRate(JSON.parse(res.data.substring(30, res.data.length-1)))

// })
// .catch( error => {
//  console.log( '[axios error] : ' , error)
//  setRate(undefined)
//   });
// }, []);

// useEffect (() => {
//   axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription')
//   .then( res => {

    // const obj = JSON.parse(res.data.substring(30, res.data.length-1));
    // for(let key in obj){
    //   if(key === 'en'){
    //     setDescEn(obj[key])
    //   }
    // }
// })
// .catch( error => {
//  console.log( '[axios error] : ' , error)
//  setDescEn(undefined)
//   });
// }, []);

// useEffect (() => {
//   axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription')
//   .then( res => {

//     const obj = JSON.parse(res.data.substring(30, res.data.length-1));
//     for(let key in obj){
//       if(key === 'ru'){
//         setDescRu(obj[key])
//       }
//     }
// })
// .catch( error => {
//  console.log( '[axios error] : ' , error)
//  setDescRu(undefined)
//   });
// }, []);

// useEffect (() => {
//   axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription')
//   .then( res => {

//     const obj = JSON.parse(res.data.substring(30, res.data.length-1));
//     for(let key in obj){
//       if(key === 'ua'){
//         setDescUa(obj[key])
//       }
//     }
// })
// .catch( error => {
//  console.log( '[axios error] : ' , error)
//  setDescUa(undefined)
//   });
// }, []);


// useEffect (() => {
//   axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription')
//   .then( res => {

//     const obj = JSON.parse(res.data.substring(30, res.data.length-1));
//     for(let key in obj){
//       if(key === 'photo_gallery'){
//         setImages(obj[key])
//       }
//     }
// })
// .catch( error => {
//  console.log( '[axios error] : ' , error)
//  setImages(undefined)
//   });
// }, []);

// console.log(rate)
// console.log(descEn)
// console.log(descRu)
// console.log(descUa)
// console.log(images)



 
    //    useEffect ( () => {
    //       dispatch (getPosts ());
    // }, []);
            
// useEffect (() => {          
//   axios.get('https://hotelsukraine.travel/ua/my_list_hotels',{

//                 params: { type: 'full', hotels: 1401858, json: 1 },
//                 headers: {
                  // accept: "*/*",
                  // referrerPolicy: "strict-origin-when-cross-origin",
                  // referrer: "http://hotelsukraine/"
                  // accept-language: "en,ru-RU;q=0.9,ru;q=0.8,uk;q=0.7,en-US;q=0.6"
                // },
                // referrer: "http://hotelsukraine/",
                // referrerPolicy: "strict-origin-when-cross-origin",
                // body: null,
                // method: "GET",
                  // mode: "no-cors",
                // callbackKey: 'getDescription',
                // callbackName: 'getDescription'
    //         })
    //     .then( res => {
    //       console.log(res)
 
    //       // setRate([...newArray])
          
    //   })
    // .catch( error => {
    //    console.log( '[axios error] : ' , error)
    //   //  setRate(undefined)
    //     });
    // }, []);

    // useEffect (() => {
    //    axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1')
    //    .then( res => {
    //       console.log(res)
    //       console.log(res.data)
    //       // setRate([...newArray])
          
    //   })
    // .catch( error => {
    //    console.log( '[axios error] : ' , error)
    //   //  setRate(undefined)
    //     });
    // }, []);
    // console.log(data);

 

    // useEffect ( () => {
    //   fetch("https://hotelsukraine/ua/my_list_hotels", {
    //     headers: {
    //     accept: "*/*",
    //     // accept-language: "en,ru-RU;q=0.9,ru;q=0.8,uk;q=0.7,en-US;q=0.6"
    //   },
    //   referrer: "http://hotelsukraine/",
    //   referrerPolicy: "strict-origin-when-cross-origin",
    //   body: null,
    //   method: "GET",
    //     mode: "no-cors"
    //   })
    // .then( res => {
    //       console.log(res)
    //       // setRate([...newArray])
          
    //   })
    // .catch( error => {
    //    console.log( '[axios error] : ' , error)
    //    setRate(undefined)
    //     });
    // }, []);


  