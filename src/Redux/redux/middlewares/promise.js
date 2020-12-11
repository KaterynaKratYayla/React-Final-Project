



export const promise = ({ dispatch, getState }) => next => action => {

    if( action.type === "PROMISE" ){
        const [ startAction, successAction, failureAction ] = action.actions;
        dispatch({ type: startAction });
        return action.promise
            .then( res => res.json() )
            .then( res => {
                dispatch({ type: successAction, payload: res });
            })
            .catch( err => {
                dispatch({ type: failureAction, error: err });
            });
    }

    return next( action );
}