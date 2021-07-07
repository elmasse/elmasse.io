
import Head from 'next/head'
import withPost, { Content } from 'nextein/post'

import Navigation from '../components/navigation'
import Header from '../components/header'
import Footer from '../components/footer'

export default withPost(({ post }) => {
  const { title, description, category, tags, date, url, readingTime } = post.data
  return (
    <div className='min-h-screen bg-white dark:bg-black'>
      <Head>
        <title>{`elmasse | ${title}`}</title>
      </Head>
      <Navigation />
      <article>
        <div className='bg-hero-pattern-light dark:bg-hero-pattern-dark bg-fixed'>
          <div className='max-w-7xl mx-auto px-6'>
            <Header title={title} subtitle={description} meta={{date, readingTime, tags}}/>
          </div>
        </div>
        <Content className='max-w-5xl mx-auto px-6 lg:px-0 py-20 prose dark:prose-dark prose-lg lg:prose-xl' {...post} />
      </article>
      <div className='max-w-7xl mx-auto px-6 py-20'>
        <p className='text-sm text-gray-800 dark:text-gray-50'>
          Any viewpoints and opinions expressed in this article are my own and do not, 
          in any way, reflect those of my employer, my colleagues, or anyone else. I speak only for myself, not for them.
        </p> 
      </div>
      <Footer />
    </div>
  )
});
