import React from 'react'
import Moment from 'react-moment'
import Head from 'next/head'
import { injectGlobal, hydrate } from 'emotion'
import styled from 'react-emotion'
import withPosts, { sortByDate } from 'nextein/posts'
import { Content } from 'nextein/post'
import Link from 'nextein/link'

import Hero from '../components/hero'
import Tags from '../components/tags'
import About from '../components/about'
import Footer from '../components/footer'
import withAnalytics from '../components/analytics'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

const Index = withPosts(({ posts }) => {
  posts.sort(sortByDate)

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

  return (
    <div>
      <Head>
        <title>elmasse | Home</title>
      </Head>
      <Hero />
      <About />
      {
        posts.map((post, idx) => {
          const { title, url, date, tags } = post.data

          return (
            <Post key={`post-${idx}`}>
              <Title><Link {...post}><a>{title}</a></Link></Title>
              <Meta>
                <Moment format="MMMM D, YYYY">{date}</Moment>
                <Tags tags={tags} />
               </Meta> 
              <Body {...post} excerpt />
              <Link {...post} passHref><ReadMore>Continue reading </ReadMore></Link> 
            </Post>
          )
        })
      }
      <Footer />
    </div>
  )
})

export default withAnalytics(Index)



const Post = styled('div')`
  max-width: 850px;
  margin: 70px auto;
  @media (max-width: 600px) {
    padding: 0 20px;
  }
`
const Title = styled('h1')`
  color: #111;
  font-size: 2.5em;
  > a {
    text-decoration: none;
    color: inherit;
  }
`
const Meta = styled('div')`
  display: flex;

  > time {
    font-weight: 300;
    color: #444;
    margin-right: 5px;
  }
`
const Body = styled(Content)`
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 1.25em;
  line-height: 1.58;
  color: rgba(0,0,0,.75);
  letter-spacing: -0.003em; 
  code {
    background: #f9f9f9;
    padding: 4px;
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 400;
  }
`
const ReadMore = styled('a')`
  :before {
    content: '>';
    padding: 0 5px;
  }
`
