import React from 'react'
import styled from 'styled-components'

const Hero: React.FC = ({ children }) => {
  return (
    <StyledHero>
      {children}
    </StyledHero>
  )
}

const StyledHero = styled('div')`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: #eef;
`

export default Hero
