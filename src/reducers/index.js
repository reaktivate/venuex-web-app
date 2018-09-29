import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';

import coreReducers from './core';


const rootReducer = combineReducers({
    firebase,
    ...coreReducers
});

export default rootReducer;
