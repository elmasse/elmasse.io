import { inCategory } from 'nextein/filters'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Hero from '../components/hero'
import Footer from '../components/footer'
import Grid from '../components/grid'

export async function getStaticProps () {
  const { getPosts } = await import('nextein/fetcher')
  return {
    props: {
      posts: await getPosts()
    }
  }
}

function sortByDate (a, b) {
  const aTime = new Date(a.data.date).getTime()
  const bTime = new Date(b.data.date).getTime()
  return bTime - aTime
}

export default function Index ({ posts })  {
  posts.sort(sortByDate)

  const [pills, rest] = posts.reduce((prev, curr) => {
    prev[curr.data.category === 'pills' ? 0 : 1].push(curr)
    return prev
  }, [[],[]])
  
  const [heroPost, featured, side, ...morePosts] = rest

  return (
    <div className='min-h-screen bg-white dark:bg-black'>
      <Head>
        <title>elmasse | Home</title>
      </Head>
      <Navigation />
      <div className='bg-hero-pattern-light dark:bg-hero-pattern-dark bg-fixed'>
        <div className='max-w-7xl mx-auto px-6'>
          {heroPost && <Hero post={heroPost}/>}
        </div>
      </div>

      <div className='max-w-7xl mx-auto mt-16 mb-16 space-y-8'>
        <div className='space-y-4 pl-4'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight font-extrabold text-gray-900 dark:text-gray-100'>
            Pills &amp; Notes
          </h2>
          <div className='w-20 h-1 bg-action'></div>
        </div>
        <Grid posts={pills} />
      </div>

      <div className='max-w-7xl mx-auto mt-24 mb-32 space-y-8'>
      <div className='space-y-4 pl-4'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight font-extrabold text-gray-900 dark:text-gray-100'>
            More Posts
          </h2>
          <div className='w-20 h-1 bg-action'></div>
        </div>

        <Grid featured={featured} side={side} posts={morePosts} />
      </div>
      <Footer />
    </div>
  )
}
