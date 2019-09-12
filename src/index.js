import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from './utils/theme';
import Wrapper from './components/Wrapper';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
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
        <Sidebar>
          <h3>Quotes</h3>
        </Sidebar>
        <Content>
          <p>Main content section</p>
        </Content>
      </Wrapper>
      <GlobalStyle />
    </React.Fragment>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'));
