
import React from 'react'
import styled from 'react-emotion'

export default () => {

  return (
    <Footer>
      <div>
        <h2>elmasse</h2>
        <p>
          Max Fierro &copy; 2013-{+new Date().getFullYear()}
        </p>
        <div>
        Built with ♥︎ and <a href="https://nextein.now.sh">nextein</a> by <a href="https://github.com/elmasse">/<span>elmasse</span></a>
        </div>
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

  &::before {
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

    @media (max-width: 600px) {
      min-width: auto;
      padding: 10px 20px; 
      margin: 0 0;
    }
  }

  & h2 {
    margin: 0;
  }

  & p {
    margin: 0 0 30px 0;
    font-weight: 300;
  }

`
