import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

interface HeaderProps {
  children: React.ReactNode
}

export const Header: React.FC = ({ children }: HeaderProps) => {
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

const StyledHader = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 50px;
  background-color: #fff;
  color: #000;
`

const StyledBack = styled.div`
  width: 50px;
  font-size: 20px;
  text-align: center;
`

const StyledTitle = styled.p`
  width: 100%;
  text-align: center;
`

const StyledMenu = styled.div`
  width: 50px;
  font-size: 20px;
  text-align: center;
`
