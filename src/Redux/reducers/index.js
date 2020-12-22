import { combineReducers } from 'redux';

import posts from './posts';
import hotels from './hotels';
import tours from './tours';


const root_reducer = combineReducers({
	posts,
	hotels,
	tours
});

export default root_reducer;