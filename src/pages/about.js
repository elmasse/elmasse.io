

import React from 'react'
import Head from 'next/head'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
 

export default function About () {
  return (
    <div className='min-h-screen bg-white dark:bg-black'>
      <Head>
        <title>{`elmasse | About`}</title>
      </Head>
      <Navigation />
      <article>
        <div className='bg-hero-pattern-light dark:bg-hero-pattern-dark bg-fixed'>
          <div className='max-w-7xl mx-auto px-10 py-20 md:py-48'>
            <h1 className='text-7xl md:text-8xl font-serif tracking-tight font-extrabold text-gray-900 dark:text-gray-100 border-action border-l-8 pl-8'>
              About Me
            </h1>
          </div>
        </div>
        <div className='max-w-5xl mx-auto px-6 lg:px-0 py-20 prose dark:prose-dark prose-lg lg:prose-xl'>
          <p>
            Hello, my name is <strong>Max Fierro</strong>. I have been working in software development for more than 20 years.
            <img className='p-8' src='/images/about.jpg' />
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
    </div>
  )
}
