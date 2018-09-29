import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';


const venuexConfig = window.__venuex__ || {};
const { venueId } = venuexConfig;

ReactDOM.render(
    <App venueId={venueId} />,
    document.getElementById('root')
);

registerServiceWorker();
