import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size: '16px';
  }

  button {
    font-size: 16px!important;
    margin: 5px;
  }

  /* # mobile */
  .only-m-show { display: none; }
  @media (max-width: 576px) { 
    .only-m-show { display: block; }
    .m-hide { display: none!important; }
  }
`
export default GlobalStyle
