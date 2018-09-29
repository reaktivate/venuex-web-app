import { createAction, handleAction } from 'redux-actions';

export const setVenueId = createAction('SET_VENUE_ID');


const venueId = handleAction(
    setVenueId,
    (state, action) => action.payload,
    null
);


export default {
    venueId
};
