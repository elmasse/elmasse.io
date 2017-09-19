
import React from 'react'
import styled from 'emotion/react'

import Back from './icons/back'

export default ({ title, description, children }) => {

  return (
    <Header>
      <div>
        <div><a href="/"><Back fill="#212121" width="25" style={{padding: '10px 0', marginTop: '10px'}}/></a></div>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {children}
      </div>
    </Header>
  )
}

const Header = styled('div') `
  position: relative;
  display: flex;
  flex-direction: column;
  height: 70vh;
  background: #f3f3f3;
  padding: 10px 20px;

  @media (max-width:600px){
    width: auto;
    height: 95vh;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-width: 25vh 0 0 100vw;
    border-color: transparent #fff transparent;
    border-style: solid;
  }
  > div {
    width:1000px;
    margin: 0px auto;

    @media (max-width:600px){
      width: auto;
    }
  
  }
`
const Title = styled(`h1`) `
  font-size: 4.5em;
  font-weight: 600;
  margin-bottom: 0px;
`
const Description = styled(`h1`) `
  font-size: 2.5em;
  font-weight: 100;
  margin-top: 0;
`