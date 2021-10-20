import Content from 'nextein/content'
import Link from 'next/link'
import { formatWithOptions } from 'date-fns/fp'
import { enUS } from 'date-fns/locale'

export const Featured = ({ post }) => {
  const { title, description, readingTime, date } = post.data
  return (
    <Item post={post}>
      <div className='space-y-4'>
        <h1 className='text-5xl font-serif font-extrabold tracking-tight text-gray-900 dark:text-gray-100'>
          <Link as={`/${post.data.category}/${post.data.slug}`} href='/[...post]'><a>{title}</a></Link>
        </h1>
        <div className='my-6 mx-0 w-20 h-1 bg-action' />
        <p className='text-xl text-gray-500 dark:text-gray-300 '>{description}</p>
        <p className='text-sm'>
          { formatWithOptions({ locale: enUS }, 'MMM d, yyyy')(new Date(date))} · {readingTime} min read
        </p>
        <Content className='line-clamp-5 text-lg text-gray-500 dark:text-gray-300 ' {...post} excerpt/>
      </div>
    </Item>
  );
}

export const Side = ({ post }) => {
  const { title, description, readingTime, date } = post.data

  return (
    <Item post={post}>
      <div className='space-y-4'>
        <h1 className='text-4xl font-serif font-extrabold tracking-tight border-l-4 border-action pl-4 text-gray-900 dark:text-gray-100'>
          <Link as={`/${post.data.category}/${post.data.slug}`} href='/[...post]'><a>{title}</a></Link>
        </h1>
        <p className='text-xl text-gray-500 dark:text-gray-300 '>{description}</p>
        <p className='text-sm'>
          { formatWithOptions({ locale: enUS }, 'MMM d, yyyy')(new Date(date))} · {readingTime} min read
        </p>
        <Content className='line-clamp-5 text-lg text-gray-500 dark:text-gray-300' {...post} excerpt/>
      </div>
    </Item>
  );
}

export const Post = ({ post }) => {
  return (
    <Item post={post}>
      <div className='text-center self-center justify-center'>
        <h1 className='text-3xl font-serif font-extrabold text-gray-900 dark:text-gray-100'>
          <Link as={`/${post.data.category}/${post.data.slug}`} href='/[...post]'><a>{post.data.title}</a></Link>
        </h1>
        <div className='my-6 mx-auto w-12 h-0.5 bg-action' />
        <p className='text-md text-gray-500 dark:text-gray-300 '>{post.data.description}</p>
      </div>
    </Item>
  );
}

const Item = ({ post, children }) => {
  return (
    <div className='p-10 bg-gray-100 dark:bg-gray-900 flex flex-col overflow-hidden'>
      {children}
      <div className='flex-1' />
      <Link as={`/${post.data.category}/${post.data.slug}`} href='/[...post]' passHref>
       <a className='text-md uppercase text-action font-extrabold tracking-tight'>read post</a>
      </Link>
    </div>
  );
}
