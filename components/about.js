import React from 'react'
import styled from 'emotion/react'

import Github from './icons/github'
import Mail from './icons/mail'
import Twitter from './icons/twitter'

export default () => {

  return (
    <About>
      <Section href="https://github.com/elmasse">
          <Github fill="#212121" width="55" style={{padding: '6px'}}/>
          <Description>gihtub.com/<strong>elmasse</strong></Description>
      </Section>
      <Section href="https://twitter.com/elmasse">
        <Twitter fill="#212121" width="55" style={{padding: '10px'}}/>
        <Description>twitter.com/<strong>elmasse</strong></Description>
      </Section>
      <Section href="mailto:elmasse@gmail.com">
        <Mail fill="#212121" width="55" style={{padding: '5px'}}/>
        <Description><strong>elmasse</strong> at gmail dot com</Description>
      </Section>
    </About>
  )
}

const About = styled('div') `
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50vh;
  background: #e3e3e3;
  padding: 50px 20px 0;

  @media (max-width: 600px) {
    height: 80vh;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;
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
`
const Section = styled('a')`
  font-size: 1em;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 90px;

  @media (max-width: 600px) {
    padding: 10px 0px;
    
  }    
`
const Description = styled('div')`
  margin-top: 30px;
  color: #828282;
  @media (max-width: 600px) {
    margin-top: 10px;
  }
`