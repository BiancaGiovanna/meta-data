import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");

  * {
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body,
  html {
    background-color: #000;
    color: #fff;
  }

  a,
  a:hover,
  a:visited {
    color: unset;
    text-decoration: none;
  }
`;
