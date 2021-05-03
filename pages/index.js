import React from 'react'
import Head from 'next/head'

import withPosts, { sortByDate } from 'nextein/posts'

import Layout from '../components/layout'
import Container from '../components/container'
import Hero from '../components/hero'
import Grid from '../components/grid'

export default withPosts(({ posts }) => {
  posts.sort(sortByDate)
  const [heroPost, featured, side, ...morePosts] = posts

  return (
    <Layout>
      <Head>
        <title>elmasse | Home</title>
      </Head>
      <div className="hero">
        <Container>
          {heroPost && <Hero post={heroPost}/>}
        </Container>
      </div>
      <div className="grid">
        <Container>
          <Grid featured={featured} side={side} posts={morePosts} />
        </Container>
      </div>
      <style jsx>{`
        .hero {
          /* background by SVGBackgrounds.com */
          background-image: var(--wavy-image);
          background-attachment: fixed;
        }
        .grid {
          margin-top: calc(var(--spacing) * 8);
          margin-bottom: calc(var(--spacing) * 16);
        }

        @media (max-width: 780px) {
          .grid {
            margin: 0;
            margin-bottom: calc(var(--spacing) * 4);
          }
          .grid :global(.container) {
            padding 0;
          }
        }
      `}</style>
    </Layout>
  )
})
