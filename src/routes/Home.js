import styled, { ThemeProvider } from 'styled-components';
import React from 'react';


const H1 = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
`;

const Headline = () =>
    <H1>Welcome to React</H1>;


const theme = {
    colors: {
        primary: 'red'
    }
};

export default () => (
    <ThemeProvider theme={theme}>
        <Headline />
    </ThemeProvider>
);
