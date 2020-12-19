import { GET_DESC_REQ, GET_DESC_RES , GET_DESC_ERR,GET_EN_DESC_REQ, GET_EN_DESC_RES , GET_EN_DESC_ERR} from '../constants';
import { GET_IMAGES_REQ, GET_IMAGES_RES , GET_IMAGES_ERR} from '../constants'

const initState = {
	parts: [],
	loaded: false,
	errors: [],

    en_parts: [],
    en_parts_loaded: false,
    errors: [],

    images: [],
    images_loaded: false,
    errors: []
}


const reducer = ( state = initState, action ) => {
	switch( action.type ){

		case GET_DESC_REQ:
			return({
				...state,
				loaded: false
			})

		case GET_DESC_RES:
			return({
				...state,
				loaded: true,
				parts: action.payload
			})


		// case 'REMOVE_DESC':
		// 	return({
        //         ...state,
        //         htls: state.htls.filter( htl => htl.id !== action.payload )
		// 	})


		case GET_DESC_ERR:
			return({
				...state,
				errors: [...state.errors, action.error ]
			})

            case GET_EN_DESC_REQ:
			return({
				...state,
				en_parts_loaded: false
			})

		case GET_EN_DESC_RES:
			return({
				...state,
				en_parts_loaded: true,
				en_parts: action.payload
            })
            
            case GET_EN_DESC_ERR:
                return({
                    ...state,
                    errors: [...state.errors, action.error ]
                })

                case GET_DESC_ERR:
			return({
				...state,
				errors: [...state.errors, action.error ]
			})

        case GET_IMAGES_REQ:
			return({
				...state,
				images_loaded: false
			})

		case GET_IMAGES_RES:
			return({
				...state,
				images_loaded: true,
				images: action.payload
            })
            
            case GET_IMAGES_ERR:
                return({
                    ...state,
                    errors: [...state.errors, action.error ]
                })

        default:
			return state;
    }

}

export default reducer;