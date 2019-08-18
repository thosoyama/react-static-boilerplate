import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
import { Item } from 'types'
import styled from 'styled-components'
import Header from 'components/Header'
import Hero from 'components/Hero'

export default () => {
  const { items }: { items: Item[] } = useRouteData()

  return (
    <>
      <Header />
      <Hero>Hero Unit</Hero>
      <StyledHead>Items</StyledHead>
      <StyledItems>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <Link to={`/item/${item.id}_${item.name}/`}>{item.title}</Link>
            </li>
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
