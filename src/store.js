import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { reactReduxFirebase } from 'react-redux-firebase';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

import rootReducer from './reducers';


const rrfConfig = {
    userProfile: 'users'
};


const configureStore = ({ initialState, firebase, history }) => {
    const middleware = [
        routerMiddleware(history)
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
