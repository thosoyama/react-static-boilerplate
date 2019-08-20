import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { useRouteData } from 'react-static'
import { Item } from 'types'
import Header from 'components/Header'

const ItemComponent: React.FC = () => {
  const { item }: { item: Item } = useRouteData()
  return (
    <StyledItem>
      <GlobalStyle />
      <Header />
      <StyledContent>
        <ul>
          <li>id: {item.id}</li>
          <li>name: {item.name}</li>
          <li>title: {item.title}</li>
        </ul>
      </StyledContent>
    </StyledItem>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
  }
`

const StyledItem = styled('div')`
  background-color: #000;
  color: #fff;
`

const StyledContent = styled('div')`
  margin: 10px;
`

export default ItemComponent
