import { getDataFilterBy, getPost } from 'nextein/fetcher'
import { inCategory, inCategories } from 'nextein/filters'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Hero from '../components/hero'
import Footer from '../components/footer'
import Grid from '../components/grid'

function sortByDate (a, b) {
  const aTime = new Date(a.date).getTime()
  const bTime = new Date(b.date).getTime()
  return bTime - aTime
}

export async function getStaticProps () {
  const entries = await getDataFilterBy(
    inCategories(['projects', 'guides', 'notes', 'personal'])
  )

  const [hero, featured, side, ...morePosts] = entries.sort(sortByDate)

  return {
    props: {
      heroPost: await getPost(hero),
      featuredPost: await getPost(featured),
      sidePost: await getPost(side),
      pills: await getDataFilterBy(inCategory('pills/*')),
      morePosts
    }
  }
}

export default function Index ({ pills, heroPost, featuredPost, sidePost, morePosts })  {
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
        <Grid posts={pills.map(data => ({ data }))} />
      </div>

      <div className='max-w-7xl mx-auto mt-24 mb-32 space-y-8'>
      <div className='space-y-4 pl-4'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight font-extrabold text-gray-900 dark:text-gray-100'>
            More Posts
          </h2>
          <div className='w-20 h-1 bg-action'></div>
        </div>

        <Grid featured={featuredPost} side={sidePost} posts={morePosts.map(data => ({ data }))} />
      </div>
      <Footer />
    </div>
  )
}
