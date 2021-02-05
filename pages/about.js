

import React from 'react'
import Head from 'next/head'
 
import { Anchor, Paragraph, HorizontalRule } from 'elems'

import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'

export default function About () {
  return (
    <Layout>
      <Head>
        <title>{`elmasse | About`}</title>
      </Head>
      <article>
        <div className="header">
          <Container>
            <Header title="Masse Fierro" subtitle="About me" />
          </Container>
        </div>
        <Container className="content">
          <Paragraph>
            Hello, my name is Max Fierro. I have been working in software development for more than 20 years.
          </Paragraph>
          <Paragraph>
            I blog about mostly software development and not that often as I would like. 
            But I try to share here part of my experience and most of the time it serves as a note for future self.
            &nbsp;Hopefully that would serve someone else too.
          </Paragraph>
          <HorizontalRule />
          <Paragraph>
            If you want to keep in touch or just contact me, find me on twitter by <Anchor>@elmasse</Anchor>
            &nbsp;or drop me a line at <i>elmasse at gmail dot com</i>.
          </Paragraph>

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
}
