
import axios from '../helpers/public.axios';

import { GET_GEO_REQ, GET_GEO_RES , GET_GEO_ERR } from '../constants';
import { GET_GENERAL_GEO_REQ, GET_GENERAL_GEO_RES , GET_GENERAL_GEO_ERR } from '../constants';


export const geoResponse = ( res ) => ({
    type: GET_GEO_RES,
    payload: res
});

export const getGeo = () => ( dispatch) => {

    dispatch({ type: GET_GEO_REQ });

    axios.get('http://smartbooker.biz/interface/classifier?classifier=contract',  {
    }) 
        .then( res => {
            const newArray1 = res.data.map(function(b){
              return {
                id: b.tour_id,
                name: b.tour_name
              } 
            })
   
               const newArray2 = res.data.map(function(q){
                 return {
                   id: q.city_id,
                   name: q.city_name
                   }
               })
                  
                 const newArray3 = newArray2.filter((item,index,array) =>
                 array.findIndex(t => t.name === item.name && t.id === item.id)===index)
               
            console.log('[NEW ARRAY3] : ' , newArray3)
            dispatch(geoResponse([...newArray1, ...newArray3]))
        })
        .catch( err => {
            dispatch({ type: GET_GEO_ERR, error: err });
        })
    }


    export const generalGeoResponse = ( res ) => ({
        type: GET_GENERAL_GEO_RES,
        payload: res
    });
    
    export const getGeneralGeo = () => ( dispatch, getState ) => {
    
        dispatch({ type: GET_GENERAL_GEO_REQ });
    
        axios.get('http://smartbooker.biz/interface/classifier?classifier=contract',  {
        }) 
            .then( res => {
                      
                console.log('[GeneralGeo] : ' , res.data)
                dispatch(generalGeoResponse(res.data))
            })
            .catch( err => {
                dispatch({ type: GET_GENERAL_GEO_ERR, error: err });
            })
        }
    