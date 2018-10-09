import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';

import coreReducers from './core';


const rootReducer = combineReducers({
  firebase,
  form: formReducer,
  ...coreReducers
});

export default rootReducer;
