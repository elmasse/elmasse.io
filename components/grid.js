import React from 'react'
import Content from 'nextein/content'
import Link from 'nextein/link'

import { Anchor } from 'elems'

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

const Featured = ({ post }) => {
  return (
    <Item post={post}>
      <div className="header">
        <h1><Link {...post}><a>{post.data.title}</a></Link></h1>
        <div className="separator" />
        <p>{post.data.description}</p>
      </div>
      <div className="excerpt">
        <Content {...post} renderers={{ a: Anchor }} excerpt/>
      </div>
      <style jsx>{`
        h1 {
          font-family: var(--font-family-heading);
          font-size: 3em;
          line-height: .9;
          letter-spacing: -1px;
        }
        h1 a, h1 a:visited {
          text-decoration: none;
          color: var(--gre900);
        }
        p {
          font-size: 1.5em;
        }
        .separator {
          margin: calc(var(--spacing) * 3) 0;
          width: calc(var(--spacing) * 12);
          height: 4px;
          background-color: var(--action-color);
        }
        .excerpt {
          font-size: 1.25em;
          color: var(--grey600);
        }
      `}</style>
    </Item>
  );
}

const Side = ({ post }) => {
  return (
    <Item post={post}>
      <div className="header">
        <h1><Link {...post}><a>{post.data.title}</a></Link></h1>
        <p>{post.data.description}</p>
      </div>
      <div className="excerpt">
        <Content {...post} renderers={{ a: Anchor }} excerpt/>
      </div>
      <style jsx>{`
        h1 {
          border-left: 4px solid var(--action-color);
          padding-left: calc(var(--spacing) * 2);
          font-family: var(--font-family-heading);
          font-size: 2.5em;
          line-height: .9;
          letter-spacing: -1px;
        }
        h1 a, h1 a:visited {
          text-decoration: none;
          color: var(--gre900);
        }
        p {
          padding: calc(var(--spacing) * 2) 0;
          font-size: 1.25em;
        }
        .excerpt {
          align-self: end;
          font-size: 1.125em;
          color: var(--grey600);
        }
      `}</style>
    </Item>
  );
}

const Post = ({ post }) => {
  return (
    <Item post={post}>
      <div className="header">
        <h1><Link {...post}><a>{post.data.title}</a></Link></h1>
        <div className="separator" />
        <p>{post.data.description}</p>
      </div>
      <style jsx>{`
        .header {
          align-self: center;
          justify-self: center;
          text-align: center;
        }
        h1 {
          font-family: var(--font-family-heading);
          line-height: .9;
          letter-spacing: -1px;
        }
        h1 a, h1 a:visited {
          text-decoration: none;
          color: var(--gre900);
        }
        p {
          padding: var(--spacing);
          color: var(--grey600);
        }
        .separator {
          margin: calc(var(--spacing) * 3) auto;
          width: calc(var(--spacing) * 6);
          height: 2px;
          background-color: var(--action-color);
        }
      `}</style>
    </Item>
  );
}

const Item = ({ post, children }) => {
  return (
    <div className="item">
      {children}
      <Link {...post} passHref>
        <a className="action">read post</a>
      </Link>
      <style jsx>{`
        .item {
          padding: calc(var(--spacing) * 4);
          background: var(--grey100);
          display: grid;
        }
        .action {
          align-self: end;
          margin-top: calc(var(--spacing) * 2);
          text-transform: uppercase;
          font-weight: 800;
          font-size: 0.9em;
          display: inline-block;
          text-decoration: none;
          color: var(--action-color);
        }
      `}</style>
    </div>
  );
}
