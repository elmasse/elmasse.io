import React from 'react'

import { formatWithOptions } from 'date-fns/fp'
import { enUS } from 'date-fns/locale'


export default function Header({ title, subtitle, meta: { date, readingTime } = {} }) {
  return (
    <div className="root">
      <div className="center">
        <div className="column">
          <h1>{title}</h1>
          <p className="subtitle">{subtitle}</p>
          <p className="meta">
          { formatWithOptions({ locale: enUS }, 'MMM d, yyyy')(new Date(date))} · {readingTime} min read
          </p>

        </div>
      </div>

      <style jsx>{`
        .root {
          min-height: 75vh;
          display: flex;
          align-items: center;
          justify-items: center; 
        }

        .center {
          display: flex;
        }

        .column {
          flex: 1;        
          display: flex;
          flex-direction: column;
        }

        h1 {
          margin-bottom: calc(var(--spacing) * 2);
          border-left: var(--spacing) solid var(--action-color);
          padding-left: calc(var(--spacing) * 4);
          font-family: var(--font-family-heading);
          font-weight: 700;
          font-size: 6.5em;
          line-height: .93;
          letter-spacing: -2px;
          hyphens: word;
        }

        p {
          padding-left: calc(var(--spacing) * (4 + 1));
          font-size: 1.35em;
          color: var(--grey700);
          letter-spacing: -0.5px;
        }

        .meta {
          padding-top: calc(var(--spacing) * 2);
          font-size: .9em;
          color: var(--grey600);
        }

        @media (max-width: 780px) {
          h1 {
            hyphens: auto;
            font-size: 5em;
          }
          .subtitle {
            hypens: word;
          }
        }        

      `}</style>
    </div>
  )
}