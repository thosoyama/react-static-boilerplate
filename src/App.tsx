import React from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import { createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'
import { Header } from 'components/Header'

const App: React.FC = () => (
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
    font-family: Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 300;
  }

  a {
    color: #108db8;
    font-weight: bold;
    text-decoration: none;
  }
`

export default App
