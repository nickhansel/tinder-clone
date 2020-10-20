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
    width: 100%;
    margin: auto;
  }

  h1, h2 {
    font-family: ${secondaryFont}
  }

  .ant-typography-expand {
    font-size: 12px;
  } 

  .ant-pagination-total-text {
    height: 25px;
  }

  .ant-modal-content {
    border-radius: 8px;
  }

  .ant-modal-header {
    border-radius: 8px;
  }
`;
