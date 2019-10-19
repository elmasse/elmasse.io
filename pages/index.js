import React from 'react'
import Moment from 'react-moment'
import Head from 'next/head'
import { injectGlobal, hydrate } from 'emotion'
import styled from 'react-emotion'
import withPosts, { sortByDate } from 'nextein/posts'
import { Content } from 'nextein/post'
import Link from 'nextein/link'

import 'typeface-montserrat';
import 'typeface-public-sans';

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

    body {
      font-family: "Public Sans", sans-serif;
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

  return (
    <div>
      <Head>
        <title>elmasse | Home</title>
      </Head>
      <Hero />
      <List>
      {
        posts.map(post => {
          const { title, description, url, date, tags } = post.data

          return (
            <Post key={`post-${url}`}>
              <Title><Link {...post}><a>{title}</a></Link></Title>
              {description && <Description>{description}</Description>}
              <Meta>
                <Moment format="MMMM D, YYYY">{date}</Moment>
                <Tags tags={tags} />
              </Meta> 
              <Body {...post} excerpt />
              <Link {...post} passHref><ReadMore>Read More </ReadMore></Link> 
            </Post>
          )
        })
      }
      </List>
      <Footer />
    </div>
  )
})

export default withAnalytics(Index)

const List = styled('div')`
  @media (min-width: 880px) {
    position: relative;
    margin-top: -200px;
  }
`

const Post = styled('div')`
  max-width: 800px;
  margin: 32px auto;
  padding: 16px 30px;

  @media (min-width: 880px) {
    background: #fafafa;
    box-shadow: 0px 2px 4px rgba(0,0,0,.15);  
  }
`
const Title = styled('h1')`
  color: #111;
  font-size: 2.5em;
  letter-spacing: -0.02em;
  margin: .5em;
  margin-left: -0.05em;
  margin-top: 1em;
  line-height: 1;

  > a {
    text-decoration: none;
    color: inherit;
  }
`
const Description = styled('p')`
  margin-top: 0;
  color:  #999;
  font-size: 1.5em;
  font-weight: 300;
`

const Meta = styled('div')`
  display: flex;
  margin: 32px 5px;
  > time {
    font-weight: 300;
    color: #444;
    margin-right: 5px;
  }
`
const Body = styled(Content)`
  font-weight: 400;
  font-size: 1.25em;
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
const ReadMore = styled('a')`
  margin: 24px 0;
  display: block;

  // :before {
  //   content: '>';
  //   padding: 0 5px;
  // }
`
