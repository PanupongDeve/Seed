import {
    combineReducers,
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import counters from '../reducer/counters';
import { reducer as formReducer } from 'redux-form'

//const middlewares = applyMiddleware(mylogger, thunk)
export default () => {
    const store = createStore(
        combineReducers({
            counters,
            form: formReducer
        })
    );

    return store;
};