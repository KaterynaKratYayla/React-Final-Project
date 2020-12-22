
import axios from '../helpers/public.axios';

import { GET_POSTS_REQ, GET_POSTS_RES, GET_POSTS_ERR,GET_DESC_REQ, GET_DESC_RES , GET_DESC_ERR } from '../constants';
import { GET_EN_DESC_REQ, GET_EN_DESC_RES , GET_EN_DESC_ERR } from '../constants';
import { GET_IMAGES_REQ, GET_IMAGES_RES , GET_IMAGES_ERR } from '../constants';
// import { GET_TOUR_REQ, GET_TOUR_RES , GET_TOUR_ERR } from '../constants';

export const postsRepsonse = ( res ) => ({
    type: GET_POSTS_RES,
    payload: res
});


export const getPosts = ( id ) => ( dispatch, getState ) => {

    dispatch({ type: GET_POSTS_REQ });

    axios.get('https://next.json-generator.com/api/json/get/V1TbDaNiK',  {
            // params: {
            //     ID: 12345
            // }
        })
        // axios.get('https://next.json-generator.com/api/json/get/V1TbDaNiK')  
        .then( res => {
            // console.log( res );
            dispatch( postsRepsonse(res.data) );
        
        })
        .catch( err => {
            dispatch({ type: GET_POSTS_ERR, error: err });
        });

}

export const descResponse = ( res ) => ({
    type: GET_DESC_RES,
    payload: res
});

export const getDescription = () => ( dispatch, getState ) => {

    dispatch({ type: GET_DESC_REQ });

    axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription',  {
        }) 
        .then( res => {
            // console.log( JSON.parse(res.data.substring(30, res.data.length-1)) );
            dispatch( descResponse(JSON.parse(res.data.substring(30, res.data.length-1))) );
        
        })
        .catch( err => {
            dispatch({ type: GET_DESC_ERR, error: err });
        });

}

export const en_descResponse = ( res ) => ({
    type: GET_EN_DESC_RES,
    payload: res
});

export const getENdescription = () => ( dispatch, getState ) => {

    dispatch({ type: GET_EN_DESC_REQ });

    axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription',  {
        }) 
        .then( res => {
          
            const obj = JSON.parse(res.data.substring(30, res.data.length-1));
            for(let key in obj){
               if(key === 'en'){
                console.log(obj[key])
                dispatch(en_descResponse(obj[key]))
               }
            }
         
        })
        .catch( err => {
            dispatch({ type: GET_EN_DESC_ERR, error: err });
        });

}

export const imagesResponse = ( res ) => ({
    type: GET_IMAGES_RES,
    payload: res
});

export const getImages = () => ( dispatch, getState ) => {

    dispatch({ type: GET_IMAGES_REQ });

    axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription',  {
        }) 
        .then( res => {
          
            const obj = JSON.parse(res.data.substring(30, res.data.length-1));
            for(let key in obj){
               if(key === 'photo_gallery'){
                // console.log(obj[key])
                const newArr = [];
                   for(let item in obj[key]){
                       newArr.push(obj[key][item])
                    }  
                    
                dispatch(imagesResponse(newArr))
               }
            }
         
        })
        .catch( err => {
            dispatch({ type: GET_IMAGES_ERR, error: err });
        });

}


// export const tourResponse = ( res ) => ({
//     type: GET_TOUR_RES,
//     payload: res
// });

// export const getTour = () => ( dispatch, getState ) => {

//     dispatch({ type: GET_TOUR_REQ });

//     axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=16752&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription',  {
//         }) 
//         .then( res => {
//             // console.log( JSON.parse(res.data.substring(30, res.data.length-1)) );
//             dispatch( tourResponse(JSON.parse(res.data.substring(30, res.data.length-1))) );
        
//         })
//         .catch( err => {
//             dispatch({ type: GET_TOUR_ERR, error: err });
//         });

// }
