import Head from 'next/head'

import withPosts, { sortByDate } from 'nextein/posts'

// import Layout from '../components/layout'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import Footer from '../components/footer'
import Grid from '../components/grid'

export default withPosts(({ posts }) => {
  posts.sort(sortByDate)
  const [heroPost, featured, side, ...morePosts] = posts

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
      <div className='max-w-7xl mx-auto mt-16 mb-32'>
        <Grid featured={featured} side={side} posts={morePosts} />
      </div>
      <Footer />
    </div>
  )
})
