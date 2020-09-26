import { createGlobalStyle } from "styled-components";
import { primaryFont, secondaryFont } from "./typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  *,*:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: #ffffff;
    font-family: ${primaryFont};
    margin: 0;
  }

  main {
    width: 90%;
    margin: auto;
  }

  h1, h2 {
    font-family: ${secondaryFont}
  }
`;
