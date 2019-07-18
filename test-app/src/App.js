/** @jsx jsx */
import { jsx } from '@emotion/core'
//import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import logo from './logo.svg';
import './App.css';

const TestStyled = styled("div")(
  {
    height: 100,
    width: 100,
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "pink",
    color: "white",
    fontSize: "16px"
  }
);

const TestCss = css({
  height: 100,
  width: 100,
  position: "absolute",
  top: 10,
  left: 120,
  backgroundColor: "black",
  color: "white",
  fontSize: "16px"
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TestStyled>Emotion styled test</TestStyled>
        <div css={TestCss}>Emotion css test</div>
      </header>
    </div>
  );
}

export default App;
