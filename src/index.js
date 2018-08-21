import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    font-family: sans-serif;
  }
`;

const Wrap = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: center;
`

ReactDOM.render(<Wrap><App /></Wrap>, document.getElementById('root'));
