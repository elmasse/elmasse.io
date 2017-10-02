import React, { Component } from 'react'
import Moment from 'react-moment'
import Head from 'next/head'
import { injectGlobal, hydrate } from 'emotion'
import styled from 'react-emotion'
import Highlight from 'react-highlight'
import DisqusComments from 'react-disqus-comments';

import withPost, { Content } from 'nextein/post'

import Code from '../components/code'
import Header from '../components/header'
import Tags from '../components/tags'
import Footer from '../components/footer'
import withAnalytics from '../components/analytics'

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
        </Header >

        <Body {...post} renderers={{ code: Code }}/>
        <Disclaimer>
          &#8250; Any viewpoints and opinions expressed in this article are my own and do not, in any way, reflect those of my employer, my colleagues, or anyone else. I speak only for myself, not for them.
        </Disclaimer>
        {comments && 
        <Comments>
          <DisqusComments 
            shortname="elmassegithubio"
            title={title}
          />
        </Comments>
        }
        <Footer />
      </div>
    )
  }
}

export default withAnalytics(withPost(Post))

const Meta = styled('div')`
  display: flex;
  > time {
    padding-right: 5px;
  }
`
const Body = styled(Content)`
  font-family: 'Open Sans';
  font-weight:300;
  font-size: 1.3em;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 10px 20px;
  }

  & p {
    line-height: 1.4;
  }

  & p code {
    background: #e4e4e4;
    padding: 4px;
  }


  > blockquote {
    border-left: 5px solid #eee;
    margin: 0;
    padding: 0 1em;
  }
`
const Disclaimer = styled('p')`
  max-width: 1000px;
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
const Comments = styled('div')`
  max-width: 1000px;
  margin: 50px auto;

  @media (max-width: 600px) {
    display: none;
  }
`
