import { combineReducers } from 'redux';

import posts from './posts';


const root_reducer = combineReducers({
	posts,
});

export default root_reducer;