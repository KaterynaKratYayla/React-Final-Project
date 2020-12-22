import { GET_TOUR_REQ, GET_TOUR_RES , GET_TOUR_ERR} from '../constants'
import { GET_EN_TOUR_REQ, GET_EN_TOUR_RES , GET_EN_TOUR_ERR} from '../constants'
import { GET_IMAGES_TOUR_REQ, GET_IMAGES_TOUR_RES , GET_IMAGES_TOUR_ERR} from '../constants'

const initState = {
	touritems: [],
	touritems_loaded: false,
	errors: [],

    en_touritems: [],
    en_touritems_loaded: false,
    errors: [],

    images: [],
    images_loaded: false,
    errors: []
}


const reducer = ( state = initState, action ) => {
	switch( action.type ){

		case GET_TOUR_REQ:
			return({
				...state,
				touritems_loaded: false
			})

		case GET_TOUR_RES:
			return({
				...state,
				touritems_loaded: true,
				touritems: action.payload
			})


		case GET_TOUR_ERR:
			return({
				...state,
				errors: [...state.errors, action.error ]
			})

            case GET_EN_TOUR_REQ:
                return({
                    ...state,
                    en_touritems_loaded: false
                })
    
            case GET_EN_TOUR_RES:
                return({
                    ...state,
                    en_touritems_loaded: true,
                    en_touritems: action.payload
                })
    
    
            case GET_EN_TOUR_ERR:
                return({
                    ...state,
                    errors: [...state.errors, action.error ]
                })


        case GET_IMAGES_TOUR_REQ:
			return({
				...state,
				images_loaded: false
			})

		case GET_IMAGES_TOUR_RES:
			return({
				...state,
				images_loaded: true,
				images: action.payload
            })
            
            case GET_IMAGES_TOUR_ERR:
                return({
                    ...state,
                    errors: [...state.errors, action.error ]
                })

        default:
			return state;
    }

}

export default reducer;