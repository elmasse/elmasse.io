import React, { Component } from 'react'
import Moment from 'react-moment'
import Head from 'next/head'
import styled, { injectGlobal, hydrate } from 'react-emotion'
 
import withPost, { Content } from 'nextein/post'

import 'typeface-montserrat';
import 'typeface-public-sans';

import Code from '../components/code'
import Header from '../components/header'
import Tags from '../components/tags'
import Footer from '../components/footer'


// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

class Post extends Component {

  render() {
    const { post } = this.props
    injectGlobal`
      html, body {
        margin: 0;
      }

      body {
        font-family: Public Sans, sans-serif;
      }
  
      h1,h2,h3,h4 {
        font-family: Montserrat;
      }
  
      a {
        text-decoration: none;
        color: #0af;
      }

      @media (max-width: 600px) {
        body {
          font-size: 12px;
        }
      }
    `  
    const { title, description, category, tags, date, comments=false, url } = post.data
    return (
      <div>
        <Head>
          <title>{`elmasse | ${title}`}</title>
        </Head>
        <Header title={title} description={description}>
          <Meta>
            <Moment format="MMMM D, YYYY">{date}</Moment>
            <Tags tags={tags} />
          </Meta>
        </Header>

        <Body>
          <Content {...post}
            renderers={{
              h2: Heading2,
              hr: Divider,
              p: Paragraph,
              blockquote: Blockquote,
              code: Code
            }}
          />
        </Body>
        <Disclaimer>
          &#8250; Any viewpoints and opinions expressed in this article are my own and do not, in any way, reflect those of my employer, my colleagues, or anyone else. I speak only for myself, not for them.
        </Disclaimer>
        <Footer />
      </div>
    )
  }
}

export default withPost(Post)

const Meta = styled.div`
  display: flex;
  align-items: center;
  // margin-top: 2em;
  // margin-bottom: 4em;
  > time {
    padding-right: 5px;
    font-weight: 300;
    font-size: 16px;
  }
`
const Body = styled('div')`
  font-weight: 400;
  font-size: 1.3em;
  max-width: 800px;
  margin: 0 auto;
  padding: 10px 20px;

  @media (min-width: 880px) {
    position: relative;
    margin-top: -200px;
    padding: 20px 40px;
    background: #fafafa;
    box-shadow: 0px 2px 4px rgba(0,0,0,.15);
  }

`

const Heading2 = styled('h2')`
  font-size: 1.6em;
  margin-left: -5px;
  margin-top: 75px;
  margin-bottom: 0;  
`

const Paragraph =styled('p')`
  line-height: 1.58;
  color: rgba(0,0,0,.75);
  letter-spacing: -0.003em; 

  code {
    background: #f9f9f9;
    padding: 4px;
    font-style: italic;
    font-weight: 400;

  }
`

const Blockquote = styled('blockquote')`
  border-left: 5px solid #eee;
  margin: 1.5em 0 0 0;
  padding: 0 1em;

  > p {
    margin: 0;
    font-size: .85em;
  }
`

const Divider = styled('hr')`
  margin: 60px 0 40px 0;
  border: none;    
  &:before {
    content: "...";
    text-align: center;
    display: block;
    letter-spacing: .6em;
    font-weight: bold;
  }

`

const Disclaimer = styled('p')`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1em;
  font-style: italic;
  font-weight: 200;
  color: #888;
  padding: 40px 0;
  
  @media (max-width: 600px) {
    padding: 10px 20px;
  }  
`
