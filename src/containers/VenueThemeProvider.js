import React from 'react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../config/defaultTheme.json';

import { VenueConfigContext } from './VenueConfigProvider';


const venueConfigToTheme = ({ theme }) => ({
    ...defaultTheme,
    ...theme
});


const VenueThemeProvider = ({ children }) => (
    <VenueConfigContext.Consumer>
        { venueConfig => (
            <ThemeProvider theme={venueConfigToTheme(venueConfig)}>
                {children}
            </ThemeProvider>
        ) }
    </VenueConfigContext.Consumer>
);


export default VenueThemeProvider;
