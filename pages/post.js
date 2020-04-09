import React, { Component } from 'react'
import Head from 'next/head'
 
import withPost, { Content } from 'nextein/post'

import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'
import { Heading2, Divider, Paragraph, Blockquote, Code, Pre, List, ListItem } from '../components/elements'

export default withPost(({ post }) => {
  const { title, description, category, tags, date, url, readingTime } = post.data
  return (
    <Layout>
      <Head>
        <title>{`elmasse | ${title}`}</title>
      </Head>
        <div className="header">
         <Container>
            <Header title={title} subtitle={description} meta={{date, readingTime, tags}}/>
          </Container>
        </div>        
        <article>
          <Container>
          <Content {...post}
            renderers={{
              h2: Heading2,
              hr: Divider,
              p: Paragraph,
              ul: List,
              li: ListItem,
              blockquote: Blockquote,
              code: Code,
              pre: Pre
            }}
          />
          <div className="disclaimer">
            Any viewpoints and opinions expressed in this article are my own and do not, 
            in any way, reflect those of my employer, my colleagues, or anyone else. I speak only for myself, not for them.
          </div>
          </Container>
        </article>
      <style jsx>{`
        .header {
          /* background by SVGBackgrounds.com */
          background-image: var(--wavy-image);
          background-attachment: fixed;
        }
        article {
          margin: 0 auto;
          margin-bottom: 8rem;
          width: 100%;
          max-width: 48rem;  
        }
        .disclaimer {
          padding: calc(var(--spacing)* 4);
          color: var(--grey500);
          background-color: var(--grey50);
        }
      `}</style>
      {/* 
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
      
      <Footer /> */}
    </Layout>
  )
});
