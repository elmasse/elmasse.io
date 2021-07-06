

import React from 'react'
import Head from 'next/head'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
 

export default function About () {
  return (
    <div>
      <Head>
        <title>{`elmasse | About`}</title>
      </Head>
      <Navigation />
      <article>
        <div className='bg-hero-pattern-light bg-fixed'>
          <div className='max-w-7xl mx-auto py-48'>
            <h1 className='text-8xl font-serif tracking-tight font-extrabold text-gray-900 border-yellow-500 border-l-8 pl-8'>
              About Me
            </h1>
          </div>
        </div>
        <div className="max-w-5xl mx-auto py-20 px-6 prose prose-xl">
          <p>
            Hello, my name is <strong>Max Fierro</strong>. I have been working in software development for more than 20 years.
            <img className='p-8' src="/images/about.jpg" />
          </p>
          <p>
            I blog about mostly software development and not that often as I would like. 
            But I try to share here part of my experience and most of the time it serves as a note for future self.
            &nbsp;Hopefully that would serve someone else too.
          </p>
          <hr />
          <p>
            If you want to keep in touch or just contact me, find me on twitter by <a>@elmasse</a>
            &nbsp;or drop me a line at <i>elmasse at gmail dot com</i>.
          </p>
        </div>
      </article>
      <Footer />
      {/* <style jsx>{`
        article :global(.header) {
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
        
      `}</style>       */}
    </div>
  )
}
