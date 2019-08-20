import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
import { Item } from 'types'
import styled from 'styled-components'
import Header from 'components/Header'
import Hero from 'components/Hero'

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
              <Link to={`/item/${item.id}_${item.name}/`}>{item.title}</Link>
            </StyledItemList>
          ))}
        </ul>
      </StyledItems>
    </>
  )
}

const StyledHead = styled('h1')`
  background-color: #eee;
  padding: 10px;
  font-size: 16px;
`

const StyledItems = styled('div')`
  margin: 10px;
`

const StyledItemList = styled('li')`
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
`

export default Index
