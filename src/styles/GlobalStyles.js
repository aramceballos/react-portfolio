import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    body {
        margin: 0;
        padding: 0;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    a {
        text-decoration: none;
        display: inline;
        color: black;
    }
`;
