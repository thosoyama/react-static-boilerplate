import React from 'react'
import styled from 'styled-components'

interface HeroProps {
  children: React.ReactNode
}

const Hero: React.FC = ({ children }: HeroProps) => {
  return <StyledHero>{children}</StyledHero>
}

const StyledHero = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: #eef;
  font-size: 20px;
`

export default Hero
