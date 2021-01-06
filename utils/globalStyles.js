import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

export default createGlobalStyle`
  ${styledNormalize}
  /*! http://devinhunt.github.io/typebase.css/ v0.1.0 | MIT License */
  /* Setup */
  html {
  }
  body {
    background-color: ${(props) => props.theme.bodyBackground};
    color: ${(props) => props.theme.bodyTextColor};
    overflow-x: hidden;
    transition: all 0.5s ease;
  }
`;
