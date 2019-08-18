import React from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import { createGlobalStyle } from "styled-components"
import { Reset } from "styled-reset"
import Header from "components/Header"

const App = () => (
  <Root>
    <Reset />
    <GlobalStyle />
    <React.Suspense fallback={<Header>Loading...</Header>}>
      <Router>
        <Routes path="*" />
      </Router>
    </React.Suspense>
  </Root>
)

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }
`

export default App
