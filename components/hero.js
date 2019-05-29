
import React from 'react'
import styled from 'react-emotion'

export default () => {

  return (
    <Hero>
      {/* <Image>
        <img src="/static/images/IMG_0131.png" />
      </Image> */}
      <Header>
        <SubTitle>elmasse</SubTitle>
        <Title>Max Fierro</Title>
        <Description>Javascript Developer</Description>
      </Header>
    </Hero>
  )
}

const Hero = styled('div')`
  position: relative;
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;
  background: #f3f3f3;
  background-image: linear-gradient(135deg,#f3f3f3 0%,#f3f3f3 50.99%,#eee 51%,#eee 100%);
  padding: 10px 20px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-width: 25vh 0 0 100vw;
    border-color: transparent #fff transparent;
    border-style: solid;
  }
`
const Header = styled('div')`
  // @media (max-width: 600px) {
  //   width: auto;
  //   margin: 0px;
    
  // }
`
const Title = styled(`h1`)`
  font-size: 5.5em;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0;
  margin-left: -0.05em;
  margin-bottom: 0px;  
`
const SubTitle = styled(`h2`)`
  font-size: 2em;
  font-weight: 400;
  margin: 0;
`
const Description = styled(`h1`)`
  font-size: 2em;
  font-weight: 100;
  margin-top: 0;
  color: #888;
`

const Image = styled(`div`)`
  height: 18em;
  margin: 3em;
  > img {
    height: 100%;
  }
`;