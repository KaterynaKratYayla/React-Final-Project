
import axios from '../helpers/public.axios';

import { GET_POSTS_REQ, GET_POSTS_RES, GET_POSTS_ERR } from '../constants';

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
            console.log( res );
            dispatch( postsRepsonse(res.data) );
        
        })
        .catch( err => {
            dispatch({ type: GET_POSTS_ERR, error: err });
        });

}
