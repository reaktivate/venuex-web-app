import 'normalize.css';
// import url from 'url';
import 'react-datepicker/dist/react-datepicker.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// const venueId = process.env.REACT_APP_VENUE_ID || url.parse(window.location.href).hostname;
const venuexConfig = window.__venuex__ || { venueId: 'test_venue' };
const { venueId } = venuexConfig;

ReactDOM.render(
    <App venueId={venueId} />,
    document.getElementById('root')
);

registerServiceWorker();
