import { combineReducers } from 'redux';

import posts from './posts';
import hotels from './hotels';
import tours from './tours';
import cities from './cities';



const root_reducer = combineReducers({
	posts,
	hotels,
	tours,
	cities
});

export default root_reducer;