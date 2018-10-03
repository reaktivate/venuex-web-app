import React from 'react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../config/defaultTheme.json';

import { withVenueConfig } from './VenueConfigProvider';


const venueConfigToTheme = ({ theme }) => ({
    ...defaultTheme,
    ...theme
});


const VenueThemeProvider = ({ venueConfig, children }) => (
    <ThemeProvider theme={venueConfigToTheme(venueConfig)}>
        {children}
    </ThemeProvider>
);


export default withVenueConfig(VenueThemeProvider);
