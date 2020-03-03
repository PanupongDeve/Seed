import {
    combineReducers,
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import counters from '../reducer/counters';
import ReduxForm from '../reducer/ReduxForm';
import { reducer as formReducer } from 'redux-form'

//const middlewares = applyMiddleware(mylogger, thunk)
export default () => {
    const store = createStore(
        combineReducers({
            counters,
            ReduxForm,
            form: formReducer
        })
    );

    return store;
};