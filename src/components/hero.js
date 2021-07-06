import Content from 'nextein/content'
import Link from 'nextein/link'
import { formatWithOptions } from 'date-fns/fp'
import { enUS } from 'date-fns/locale'

export default function Hero({ post }) {
  const { title, description, readingTime, date } = post.data
  return (
    
    <div className='py-40 flex'>
      <div className='flex-1 px-4 space-y-5'>
        <h1 className='text-5xl md:text-7xl font-serif tracking-tight font-extrabold text-gray-900 border-yellow-500 border-l-8 pl-8'>
          <Link {...post}><a>{title}</a></Link>
        </h1>
        <div className='pl-8 space-y-4'>
          <p className='text-2xl'>{description}</p>
          <p className='text-sm text-gray-500'>
          { formatWithOptions({ locale: enUS }, 'MMM d, yyyy')(new Date(date))} · {readingTime} min read
          </p>
        </div>
      </div>

      <div className='flex-1 px-4 flex flex-col justify-center space-y-4'>
        <Content className='text-xl text-gray-500' {...post} excerpt />
        <Link {...post}>
          <a className='text-lg uppercase text-yellow-500 font-extrabold tracking-tight'>read post</a>
        </Link>
      </div>
    

      {/* <style jsx>{`
        .root {
          min-height: calc(100vh - calc(var(--spacing) * 12));
          // display: flex;
          // flex-wrap: wrap;
          // align-items: center;
          // justify-items: center;
        }


        .column {
          flex: 1;
          padding: 0 calc(var(--spacing) * 2);
        }

        @media (max-width: 780px) {
          .center { flex-direction: column; }
          .column {
            flex: 0 0 100%;
            max-width: 100%;
            padding: calc(var(--spacing) * 4) 0;
          }
        }

        .header {
          display: flex;
          flex-direction: column;
        }

        .header h1 {
          margin-bottom: calc(var(--spacing) * 2);
          border-left: var(--spacing) solid var(--action-color);
          padding-left: calc(var(--spacing) * 4);
          font-family: var(--font-family-heading);
          font-size: 4.5em;
          font-weight: 700;
          line-height: .93;
          letter-spacing: -2px;
        }

        h1 a, h1 a:visited {
          text-decoration: none;
          color: var(--gre900);
        }

        .header p {
          padding-top: calc(var(--spacing) * 3);
          padding-left: calc(var(--spacing) * (4 + 1));
          font-size: 1.35em;
          color: var(--grey700);
          letter-spacing: -0.5px;
        }

        .header .meta {
          padding-top: calc(var(--spacing) * 2);
          font-size: .9em;
          color: var(--grey600);
        }
        
        .excerpt {
          line-height: 1.54;
          font-size: 1.2em;
          color: var(--grey700);
        }

        .excerpt .action {
          margin-top: calc(var(--spacing) * 4);
          text-transform: uppercase;
          font-weight: 800;
          font-size: 0.9em;
          display: inline-block;
          text-decoration: none;
          color: var(--action-color);
        }

        @media (max-width: 780px) {
          .header h1 {
            hyphens: auto;
            font-size: 4em;
          }
          .header p {
            hyphens: auto;
          }
        }          
      `}</style> */}
    </div>
  )
}