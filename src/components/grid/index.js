import { Featured, Side, Post } from './item'

export default function Grid({ featured, side, posts }) {
  return (
    <div className='grid grid-cols-12 gap-4 auto-rows-100px'>

      {featured &&
        <div className='col-span-full md:col-span-8 row-span-5 grid justify-items-stretch'>
          <Featured post={featured} />
        </div>
      }

      {side &&
        <div className='col-span-full md:col-span-4 row-span-5 grid justify-items-stretch'>
          <Side post={side} />
        </div>
      }

      {posts.map(post => (
        <div key={post.data.url} className='col-span-full md:col-span-4 row-span-4 grid justify-items-stretch'>
          <Post post={post} />
        </div>
      ))}
    </div>
  )
}