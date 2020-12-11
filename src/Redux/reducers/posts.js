
import { GET_POSTS_REQ, GET_POSTS_RES, GET_POSTS_ERR} from '../constants';


const initState = {
	items: [],
	loaded: false,
	errors: [],

	single: null,
	single_loaded: false
}


const reducer = ( state = initState, action ) => {
	switch( action.type ){

		case GET_POSTS_REQ:
			return({
				...state,
				loaded: false
			})

		case GET_POSTS_RES:
			return({
				...state,
				loaded: true,
				items: action.payload
			})


		case 'REMOVE_POST':
			return({
				...state,
				posts: state.posts.filter( post => post.id !== action.payload )
			})


		case GET_POSTS_ERR:
			return({
				...state,
				errors: [...state.errors, action.error ]
			})

        default:
			return state;
    }

}

export default reducer;