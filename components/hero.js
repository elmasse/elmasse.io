import React from 'react'

import Content from 'nextein/content'
import Link from 'nextein/link'
import { formatWithOptions } from 'date-fns/fp'
import { enUS } from 'date-fns/locale'


export default function Hero({ post }) {
  const { title, description, readingTime, date } = post.data
  return (
    <div className="root">
      <div className="center">
        <div className="column header">
          <h1>{title}</h1>
          <p>{description}</p>
          <p className="meta">
          { formatWithOptions({ locale: enUS }, 'MMM d, yyyy')(new Date(date))} · {readingTime} min read
          </p>
        </div>
        <div className="column excerpt">
          <Content {...post} excerpt />
          <Link {...post} passHref>
            <a className="action">read post</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .root {
          min-height: calc(100vh - calc(var(--spacing) * 12));
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-items: center;
        }

        .center {
          display: flex;
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

        .header p {
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
      `}</style>
    </div>
  )
}