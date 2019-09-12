import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';


import theme from './utils/theme';
import Wrapper from './components/Wrapper';
import './index.css';

const GlobalStyle = createGlobalStyle`
  body {
    background: #fafafa;
    font-family: ${props => props.theme.fonts.regular};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
  }
`

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Wrapper>
        <h1>CCN Quotes</h1>
      </Wrapper>
      <GlobalStyle />
    </React.Fragment>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'));
