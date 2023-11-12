import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
--color-primary-001: #e6e8fc;
--color-secondary-001: #2739e8
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  overflow: hidden;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  color: var(---color-primary-001);
}
`;

export default GlobalStyle;
