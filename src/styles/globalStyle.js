import { createGlobalStyle } from "styled-components";
import { media } from "../utils";
export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
*,
*::after,
*::before {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; //1rem = 10px
  @media (max-width: ${media.big}) {
    font-size: 55%;
  }
  @media (max-width: ${media.lg}) {
    font-size: 50%;
  }
  @media (max-width: ${media.md}) {
    font-size: 45%;
  }
}

body {
  line-height: 1.6;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
  ;
}


`;
