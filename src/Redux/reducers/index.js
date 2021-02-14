import { combineReducers } from 'redux';

import posts from './posts';
import hotels from './hotels';
import tours from './tours';
import cities from './cities';
import content from './content';
import pages from './pages'


//{combineReducers} - это библиотека из редакса для комбинации нескольких редьюсеров
const root_reducer = combineReducers({
	posts,
	hotels,
	tours,
	cities,
	content,
	pages
});

export default root_reducer;