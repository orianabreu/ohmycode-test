import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        list-style: none;
        margin: 0;
        padding: 0;
        text-decoration: none;
        box-sizing: border-box;
    }
    body {
        background-color: hsl(235, 21%, 11%);
        color: hsl(0, 0%, 98%);
        font-family: 'Josefin Sans', sans-serif;
    }
`;

export default GlobalStyle;
