import {
    combineReducers,
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import counters from '../reducer/counters';


//const middlewares = applyMiddleware(mylogger, thunk)
export default () => {
    const store = createStore(
        combineReducers({
            counters
        })
    );

    return store;
};