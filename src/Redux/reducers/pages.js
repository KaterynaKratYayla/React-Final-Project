import { GET_PAGES_REQ, GET_PAGES_RES , GET_PAGES_ERR } from '../constants';
import { GET_PurePage_REQ, GET_PurePage_RES , GET_PurePage_ERR } from '../constants';

const initState = {
	pages: [],
	pages_loaded: false,
    errors: [],

    purepage: [],
    purepage_loaded: false,
    errors: []
}


const reducer = ( state = initState, action ) => {
	switch( action.type ){

		case GET_PAGES_REQ:
			return({
				...state,
				pages_loaded: false
			})

		case GET_PAGES_RES:
			return({
				...state,
				pages_loaded: true,
				pages: action.payload
			})

		case GET_PAGES_ERR:
			return({
				...state,
				errors: [...state.errors, action.error ]
            })

            case GET_PurePage_REQ:
                return({
                    ...state,
                    purepage_loaded: false
                })
    
            case GET_PurePage_RES:
                return({
                    ...state,
                    purepage_loaded: true,
                    purepage: action.payload
                })
    
            case GET_PurePage_ERR:
                return({
                    ...state,
                    errors: [...state.errors, action.error ]
                })
            
        default:
			return state;
    }

}

export default reducer;