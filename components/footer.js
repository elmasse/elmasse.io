
import React from 'react'
import styled from 'emotion/react'

export default () => {

  return (
    <Footer>
      <div>
        <h2>elmasse</h2>
        <p>
          Maximiliano Fierro &copy; 2013-{+new Date().getFullYear()}
        </p>
      </div>
    </Footer>
  )
}

const Footer = styled('div')`
  display: flex;
  position: relative;
  background: #e5e5e5;
  height: 20vh;
  margin-top: 25vh;

  &:before {
    content: "";
    position: absolute;
    top: -25vh;
    left: 0;
    border-width: 25vh 0 0 100vw;
    border-color: transparent #e5e5e5 transparent;
    border-style: solid;
  }

  & > div {
    min-width: 1000px;
    margin: 0 auto;  
  }

  & h2 {
    margin: 0;
    font-family: Open Sans;
  }

  & p {
    font-weight: 200;
  }

`
