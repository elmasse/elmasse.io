import Content from 'nextein/content'
import Link from 'next/link'
import { formatWithOptions } from 'date-fns/fp'
import { enUS } from 'date-fns/locale'

export default function Hero({ post }) {
  const { title, description, readingTime, date } = post.data
  return (
    
    <div className='py-20 md:py-40 flex flex-col md:flex-row'>
      <div className='flex-none md:flex-1 px-2 space-y-5'>
        <h1 className='text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight font-extrabold text-gray-900 dark:text-gray-100 border-action border-l-8 pl-8'>
          <Link as={`/${post.data.category}/${post.data.slug}`} href='/[...post]'><a>{title}</a></Link>
        </h1>
        <div className='pl-8 space-y-4'>
          <p className='text-2xl'>{description}</p>
          <p className='text-sm text-gray-500 dark:text-gray-300 '>
          { formatWithOptions({ locale: enUS }, 'MMM d, yyyy')(new Date(date))} · {readingTime} min read
          </p>
        </div>
      </div>

      <div className='flex-none md:flex-1 my-10 md:my-0 px-4 flex flex-col justify-center space-y-4'>
        <Content className='text-xl text-gray-500 dark:text-gray-300 ' {...post} excerpt />
        <Link as={`/${post.data.category}/${post.data.slug}`} href='/[...post]'>
          <a className='text-lg uppercase text-action Dfont-extrabold tracking-tight'>read post</a>
        </Link>
      </div>
    </div>
  )
}