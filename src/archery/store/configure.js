import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../logic';

const loggerMiddleware = createLogger({collapsed: true, duration: true});

let middleware = [thunkMiddleware];

// If we are testing we don't want the logger
if (process.env.NODE_ENV === 'development') {
    middleware = [...middleware, loggerMiddleware];
}

/**
 * Creates the redux store
 */
const store =  createStore(
    rootReducer,
    compose(
        applyMiddleware(
            ...middleware
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store