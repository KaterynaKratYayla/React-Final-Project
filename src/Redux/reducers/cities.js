import { GET_GEO_REQ, GET_GEO_RES , GET_GEO_ERR} from '../constants'
import { GET_GENERAL_GEO_REQ, GET_GENERAL_GEO_RES , GET_GENERAL_GEO_ERR } from '../constants';

const initState = {
	locs: [],
	loc_loaded: false,
    errors: [],
    
    gen_locs: [],
	gen_loc_loaded: false,
	errors: [],
}


const reducer = ( state = initState, action ) => {
	switch( action.type ){

		case GET_GEO_REQ:
			return({
				...state,
				loc_loaded: false
			})

		case GET_GEO_RES:
			return({
				...state,
				loc_loaded: true,
				locs: action.payload
			})


		// case 'REMOVE_DESC':
		// 	return({
        //         ...state,
        //         htls: state.htls.filter( htl => htl.id !== action.payload )
		// 	})


		case GET_GEO_ERR:
			return({
				...state,
				errors: [...state.errors, action.error ]
            })
            
            case GET_GENERAL_GEO_REQ:
			return({
				...state,
				gen_loc_loaded: false
			})

		case GET_GENERAL_GEO_RES:
			return({
				...state,
				gen_loc_loaded: true,
				gen_locs: action.payload
			})


		case GET_GENERAL_GEO_ERR:
			return({
				...state,
				errors: [...state.errors, action.error ]
			})

        default:
			return state;
    }

}

export default reducer;