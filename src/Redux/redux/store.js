
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { logger, loggerFn } from './middlewares/logger';
import { promise } from './middlewares/promise';

const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const middlewares = applyMiddleware(
    logger,
    thunk,
    promise
);



const store = createStore( 
    reducer, 
    composeEnhancers( middlewares )
);

console.log('[store]', store );

export default store;