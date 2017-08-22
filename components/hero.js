
import React from 'react'
import styled from 'emotion/react'

export default () => {

  return (
    <Hero>
      <Header>
        
        <Title>elmasse</Title>
        <SubTitle>Maximiliano Fierro</SubTitle>
        <Description>Javascript Developer</Description>
      </Header>
    </Hero>
  )
}

const Hero = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 70vh;
  background: #f3f3f3;
  padding: 10px 20px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-width: 25vh 0 0 100vw;
    border-color: transparent #e3e3e3 transparent;
    border-style: solid;
  }
`
const Header = styled('div')`
  width:1000px;
  margin: 0px auto;
  @media (max-width: 600px) {
    width: auto;
    margin: 0px;
    
  }
`
const Title = styled(`h1`)`
  font-family: Open Sans;
  font-size: 4.5em;
  font-weight: 600;
  margin-bottom: 0px;
`
const SubTitle = styled(`h2`)`
  font-size: 2em;
  font-weight: 400;
  margin: 40px 0 0 0;
  margin: 0;
`
const Description = styled(`h1`)`
  font-size: 2.5em;
  font-weight: 100;
  margin-top: 0;
`