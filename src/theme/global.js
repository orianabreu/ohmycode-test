import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }
    body {
        font-family: 'Josefin Sans', sans-serif;
    }
`;

export default GlobalStyle;
