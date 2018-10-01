import React from 'react';
import styled from 'styled-components';

import Screen from '../components/Screen';
import { VenueConfigContext } from '../containers/VenueConfigProvider';

const H1 = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
`;

const Tagline = styled.div`
    color: ${({ theme }) => theme.colors.secondary};
`;


const Headline = () => (
    <VenueConfigContext.Consumer>
        { venueConfig => (
            <Screen>
                <H1>Welcome to {venueConfig.name}</H1>
                <Tagline>Awesome space, best event tools</Tagline>
            </Screen>
        ) }
    </VenueConfigContext.Consumer>
);


export default () => (
    <Headline />
);
