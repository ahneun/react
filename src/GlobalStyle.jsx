import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {

    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    background-attachment: fixed;
}`;

export default GlobalStyle;
