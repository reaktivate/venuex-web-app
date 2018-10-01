import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { setVenueId } from '../reducers/core';
import configureStore from '../store';
import routes from '../routes';
import firebase from '../firebase';

import VenueConfigProvider from './VenueConfigProvider';
import VenueThemeProvider from './VenueThemeProvider';


class App extends Component {

    constructor(...args) {
        super(...args);

        const initialState = {};
        const history = createBrowserHistory();

        this.state = {
            store: configureStore({
                initialState,
                firebase: firebase(),
                history
            }),
            history
        };

        this.state.store.dispatch(setVenueId(this.props.venueId));
    }


    render() {
        const { store, history } = this.state;
        return (
            <Provider store={store}>
                <VenueConfigProvider>
                    <VenueThemeProvider>
                        <ConnectedRouter history={history}>
                            { routes }
                        </ConnectedRouter>
                    </VenueThemeProvider>
                </VenueConfigProvider>
            </Provider>
        );
    }
}

export default App;
