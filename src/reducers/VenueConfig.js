/* eslint-disable */
//import { createStore, applyMiddleware } from 'redux'
import database from '../firebase'
import thunkMiddleware from 'redux-thunk'
export const GET_LOGO = 'get logo'
/**
 * ACTION CREATORS
 */
export const getLogo = (logo) => ({type: GET_LOGO, payload:logo})
/**
 * THUNKS
 */
export function getLogoThunk() {
  return (dispatch, getState) => {
    const venueId = getState().venueId;
    const existingLogo = getState().firebase.data.venues[venueId].logo;
    if (existingLogo) {
      dispatch(getLogo(existingLogo))
    } else {
      database().storage().ref().child('venues/' + venueId + '/assets/images/splash_screen_logo.png').getDownloadURL()
        .then((url) => {
          //console.log('URL', url);
          //this.setState({ url });
          dispatch(getLogo(url));
        });
    }
    /*const tasks = [];
    database.ref(`/`).once('value', snap => {
      snap.forEach(data => {
        let task = data.val();
        tasks.push(task)
      })
    })
      .then(() => dispatch(getTasks(tasks)))*/
  }
}