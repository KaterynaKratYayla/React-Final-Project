import { GET_CONTENT_REQ ,GET_CONTENT_RES, GET_CONTENT_ERR} from '../constants'

const initState = {
	content: [],
    content_loaded: false,
    errors: []
}


const reducer = ( state = initState, action ) => {
	switch( action.type ){

        case GET_CONTENT_REQ:
              return({
                ...state,
                content_loaded: false
                })
        
        case GET_CONTENT_RES:
              return({
                 ...state,
                 content_loaded: true,
                 content: action.payload
                })
        
        case GET_CONTENT_ERR:
              return({
                   ...state,
                   errors: [...state.errors, action.error ]
               })

        default:
			return state;
    }

}

export default reducer;