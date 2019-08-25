import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
import { Item } from 'types'
import styled from 'styled-components'
import { Header } from 'components/Header'
import { Hero } from 'components/Hero'

const Index: React.FC = () => {
  const { items }: { items: Item[] } = useRouteData()

  return (
    <>
      <Header />
      <Hero>Hero Unit</Hero>
      <StyledHead>Items</StyledHead>
      <StyledItems>
        <ul>
          {items.map(item => (
            <StyledItemList key={item.id}>
              <StyledItemLink to={`/item/${item.id}_${item.name}/`}>{item.title}</StyledItemLink>
            </StyledItemList>
          ))}
        </ul>
      </StyledItems>
    </>
  )
}

const StyledHead = styled('h1')`
  padding: 10px;
  background-color: #eee;
  font-size: 16px;
`

const StyledItems = styled('div')`
  margin: 10px;
`

const StyledItemList = styled('li')`
  border-bottom: 1px solid #ddd;
`

const StyledItem = styled('a')`
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px;
`

const StyledItemLink = StyledItem.withComponent(Link)

export default Index
