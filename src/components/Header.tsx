import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

interface HeaderProps {
  children: React.ReactNode
}

const Header: React.FC = ({ children }: HeaderProps) => {
  return (
    <StyledHader>
      <StyledBack>
        <Link to="/">&lt;</Link>
      </StyledBack>
      <StyledTitle>{children ? children : 'Title'}</StyledTitle>
      <StyledMenu>
        <Link to="/">🍔</Link>
      </StyledMenu>
    </StyledHader>
  )
}

const StyledHader = styled('header')`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: start;
  align-items: center;
  background-color: #fff;
  color: #000;
`

const StyledBack = styled('div')`
  width: 50px;
  text-align: center;
  font-size: 20px;
`

const StyledTitle = styled('p')`
  text-align: center;
  width: 100%;
`

const StyledMenu = styled('div')`
  width: 50px;
  text-align: center;
  font-size: 20px;
`

export default Header
