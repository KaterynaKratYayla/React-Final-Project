import { combineReducers } from 'redux';

import posts from './posts';
import hotels from './hotels';


const root_reducer = combineReducers({
	posts,
	hotels
});

export default root_reducer;