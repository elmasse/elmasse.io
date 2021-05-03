

import React from 'react'
import Head from 'next/head'
 
import { Anchor, Paragraph, HorizontalRule, Image } from 'elems'

import Layout from '../components/layout'
import Container from '../components/container'

export default function About () {
  return (
    <Layout>
      <Head>
        <title>{`elmasse | About`}</title>
      </Head>
      <article>
        <div className="header">
          <Container>
            <div className="column">
              <h1>About Me</h1>
            </div>
          </Container>
        </div>
        <Container className="content">
          <Paragraph>
            Hello, my name is <strong>Max Fierro</strong>. I have been working in software development for more than 20 years.
            <Image src="/static/images/about.jpg" />
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

        .header {
          min-height: 75vh;
          display: flex;
          align-items: center;
          justify-items: center; 
        }

        .column {
          flex: 1;        
          display: flex;
          flex-direction: column;
        }

        .header h1 {
          margin-bottom: calc(var(--spacing) * 2);
          border-left: var(--spacing) solid var(--action-color);
          padding-left: calc(var(--spacing) * 4);
          font-family: var(--font-family-heading);
          font-weight: 700;
          font-size: 6.5em;
          line-height: .93;
          letter-spacing: -2px;
          hyphens: word;
        }

        .subtitle {
          padding-top: calc(var(--spacing) * 3);
          padding-left: calc(var(--spacing) * (4 + 1));
          font-size: 1.35em;
          color: var(--grey700);
          letter-spacing: -0.5px;
        }

        @media (max-width: 780px) {
          .header h1 {
            font-size: 5em;
          }
        }
        
      `}</style>      
    </Layout>
  )
}
