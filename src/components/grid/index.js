import { Featured, Side, Post } from './item'

export default function Grid({ featured, side, posts }) {
  return (
    <div className='grid grid-cols-12 gap-4 auto-rows-100px'>

      {featured &&
        <div className='col-span-8 row-span-5 grid justify-items-stretch'>
          <Featured post={featured} />
        </div>
      }

      {side &&
        <div className='col-span-4 row-span-5 grid justify-items-stretch'>
          <Side post={side} />
        </div>
      }

      {posts.map(post => (
        <div key={post.data.url} className='col-span-4 row-span-4 grid justify-items-stretch'>
          <Post post={post} />
        </div>
      ))}

      {/* <style jsx>{`
        .grid{
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: 100px;
          grid-gap: calc(var(--spacing) * 2);
        }

        .cell {
          grid-column: span 4;
          grid-row: span 3;
          display: grid;
          justify-items: stretch;
        }

        .featured {
          grid-column: span 8;
          grid-row: span 5;
        }

        .side {
          grid-column: span 4;
          grid-row: span 5;
        }

        @media (max-width: 950px) {
          .cell {
            grid-column: span 6;
          }

          .featured, .side {
            grid-column: span 12;
          }

        }

        @media (max-width: 780px) {
          .grid {
            grid-gap: var(--spacing);
          }
          
          .cell, .featured, .side {
            grid-column: span 12;
          }
        }
      `}</style> */}
    </div>
  )
}