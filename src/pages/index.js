import Head from 'next/head'
import withPosts, { sortByDate } from 'nextein/posts'

// import Layout from '../components/layout'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import Footer from '../components/footer'
import Grid from '../components/grid'

export default withPosts(({ posts }) => {
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
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight font-extrabold text-gray-900 dark:text-gray-100 pl-4'>
        Pills &amp; Notes
        </h2>
        <Grid posts={pills} />
      </div>

      <div className='max-w-7xl mx-auto mt-16 mb-32 space-y-8'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight font-extrabold text-gray-900 dark:text-gray-100 pl-4'>
        More Posts
        </h2>

        <Grid featured={featured} side={side} posts={morePosts} />
      </div>
      <Footer />
    </div>
  )
})
