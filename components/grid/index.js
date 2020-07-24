import React from 'react'
import { Featured, Side, Post } from './item'

export default function Grid({ featured, side, posts }) {
  return (
    <div className="grid">
      {featured && <div className="cell featured"><Featured post={featured} /></div>}
      {side && <div className="cell side"><Side post={side} /></div>}
      {posts.map(post => (
        <div key={post.data.url} className="cell"><Post post={post} /></div>
      ))}

      <style jsx>{`
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

        @media (max-width: 780px) {
          .grid {
            grid-gap: 0;
          }
          
          .cell, .featured, .side {
            grid-column: span 12;
          }

          .cell:nth-child(3n+1) :global(.item){
            background-color: var(--palette-color-1);
          }
          .cell:nth-child(3n+2) :global(.item){
            background-color: var(--palette-color-2);
          }
          .cell:nth-child(3n+3) :global(.item){
            background-color: var(--palette-color-3);
          }
        }
      `}</style>
    </div>
  )
}