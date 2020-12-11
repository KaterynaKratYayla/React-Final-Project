

export const logger = store => next => action => {
    console.log('[LOGGER]', action );
    return next( action );
}

export function loggerFn( store ){
    return function( next ){
        return function ( action ){
            console.log('[LOGGER]', action );
            return next( action );
        }
    }
} 