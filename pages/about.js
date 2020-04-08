import React from 'react'
import Head from 'next/head'
 
import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'

export default () => {
  return (
    <Layout>
      <Head>
        <title>elmasse | about</title>
      </Head>
      <Container>
        <Header title={<div>Max Fierro.</div>} subtitle="I'm a Javascript Developer." />
      </Container>
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
      <Disclaimer>
        &#8250; Any viewpoints and opinions expressed in this article are my own and do not, in any way, reflect those of my employer, my colleagues, or anyone else. I speak only for myself, not for them.
      </Disclaimer>
      <Footer /> */}
    </Layout>
  )
}
