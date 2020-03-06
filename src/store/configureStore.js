import {
    combineReducers,
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import counters from '../reducer/counters';
import { reducer as formReducer } from 'redux-form'
import commentReducer from '../reducer/commentReducer'
//const middlewares = applyMiddleware(mylogger, thunk)
export default () => {
    const store = createStore(
        combineReducers({
            counters,
            commentReducer
        })
    );

    return store;
};