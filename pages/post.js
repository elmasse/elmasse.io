import React from 'react'
import Head from 'next/head'
 
import withPost, { Content } from 'nextein/post'
import renderers from 'elems/renderers'

import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'

export default withPost(({ post }) => {
  const { title, description, category, tags, date, url, readingTime } = post.data
  return (
    <Layout>
      <Head>
        <title>{`elmasse | ${title}`}</title>
      </Head>
      <article>
        <div className="header">
          <Container>
            <Header title={title} subtitle={description} meta={{date, readingTime, tags}}/>
          </Container>
        </div>
        <Container className="content">
          <Content
            {...post}
            renderers={renderers}
          />
        </Container>
      </article>
      <div className="disclaimer">
        <Container>
          Any viewpoints and opinions expressed in this article are my own and do not, 
          in any way, reflect those of my employer, my colleagues, or anyone else. I speak only for myself, not for them.
        </Container>
      </div>
      <style jsx>{`
        article :global(.header) {
          /* background by SVGBackgrounds.com */
          background-image: var(--wavy-image);
          background-attachment: fixed;
        }
        
        article :global(.content) {
          padding-top: calc(var(--spacing) * 3);
          padding-bottom: 8rem;
          margin: 0 auto;
          width: 100%;
          max-width: 48rem;
        }

        article :global(p > img) {
          margin: calc(var(--spacing) * 6) 0;
        }

        .disclaimer {
          padding: calc(var(--spacing)* 4);
          color: var(--grey500);
          background-color: var(--grey50);
        }
      `}</style>      
    </Layout>
  )
});
