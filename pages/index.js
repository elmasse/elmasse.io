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

// export default () => <H1>Hola</H1>

const Post = styled('div')`
  max-width: 1000px;
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
    font-weight: 200;
    color: #888;
    margin-right: 5px;
  }
`
const Body = styled(Content)`
  font-family: 'Open Sans';
  font-weight:300;
  font-size: 1.3em;
  
  p {
    line-height: 1.4;
  }

  p code {
    background: #e4e4e4;
    padding: 4px;
  }
`
const ReadMore = styled('a')`
  font-weight: 300;
`
