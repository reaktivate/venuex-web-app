import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { FoldingCube } from 'styled-spinkit';

import { getVenueId, firebaseGet } from '../reducers/core';
import Screen from '../components/Screen';

export const VenueConfigContext = React.createContext();


const VenueConfigProvider = ({ venueConfig, venueId, children }) => {
    if (!isLoaded(venueConfig)) {
        return <Screen><FoldingCube /></Screen>;
    }

    if (isEmpty(venueConfig)) {
        return (
            <Screen>
                <h2>Aw, snap! Venue config was not found :(</h2>
                <div>Please double-check your venue ID (&quot;{venueId}&quot;)</div>
            </Screen>
        );
    }

    return (
        <VenueConfigContext.Provider value={venueConfig}>
            {children}
        </VenueConfigContext.Provider>
    );
};


export default compose(
    firebaseConnect((props, store) => [
        `venues/${getVenueId(store.getState())}`
    ]),
    connect(state => ({
        venueId: getVenueId(state),
        venueConfig: firebaseGet(state, `data/venues/${getVenueId(state)}`)
    }))
)(VenueConfigProvider);
