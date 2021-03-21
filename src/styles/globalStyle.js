import { createGlobalStyle } from "styled-components";
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
  
}

body {
  line-height: 1.6;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
  ;
}


`;
