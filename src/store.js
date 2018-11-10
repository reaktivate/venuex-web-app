import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { reactReduxFirebase } from 'react-redux-firebase';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';


const rrfConfig = {
    userProfile: 'users',
    enableLogging: true,
    logErrors: true,
};

const configureStore = ({ initialState, firebase, history }) => {
    const middleware = [
        routerMiddleware(history),
        logger,
        thunkMiddleware
    ];

    const enhancers = [
        devToolsEnhancer()
    ];

    const createStoreWithFirebase = reactReduxFirebase(firebase, rrfConfig)(createStore);

    return createStoreWithFirebase(
        connectRouter(history)(rootReducer),
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enhancers
        )
    );
};

export default configureStore;
