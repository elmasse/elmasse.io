import React from 'react'
import Moment from 'react-moment'
import Head from 'next/head'
import { injectGlobal } from 'emotion'
import styled from 'emotion/react'
import withPosts, { sortByDate } from 'nextein/posts'
import { Content } from 'nextein/post'
import Link from 'nextein/link'

import Hero from '../components/hero'
import Tags from '../components/tags'
import About from '../components/about'
import Footer from '../components/footer'
import withAnalytics from '../components/analytics'

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
              <Body {...post} excerpt sanitize={false} />
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
  max-width: 1000px;
  margin: 70px auto;
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
`
const ReadMore = styled('a')`
  font-weight: 300;
`
