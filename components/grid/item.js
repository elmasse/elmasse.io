import React, { useRef, useEffect } from 'react'
import Content from 'nextein/content'
import Link from 'nextein/link'
import Clamp from 'clamp-js'
import { formatWithOptions } from 'date-fns/fp'
import { enUS } from 'date-fns/locale'
import { Anchor } from 'elems'

export const Featured = ({ post }) => {
  const { title, description, readingTime, date } = post.data
  return (
    <Item post={post}>
      <div className="header">
        <h1><Link {...post}><a>{title}</a></Link></h1>
        <div className="separator" />
        <p>{description}</p>
        <p className="meta">
          { formatWithOptions({ locale: enUS }, 'MMM d, yyyy')(new Date(date))} · {readingTime} min read
        </p>
      </div>
      <Excerpt post={post} clamp={10}/>
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
          padding: calc(var(--spacing) * 2) 0;
        }
        p.meta {
          padding-top: 0;
          padding-bottom: calc(var(--spacing) * 3);
          font-size: .85em;
          color: var(--grey600);
        }        
        .separator {
          margin-top: calc(var(--spacing) * 3);
          width: calc(var(--spacing) * 12);
          height: 4px;
          background-color: var(--action-color);
        }
      `}</style>
    </Item>
  );
}

export const Side = ({ post }) => {
  const { title, description, readingTime, date } = post.data

  return (
    <Item post={post}>
      <div className="header">
        <h1><Link {...post}><a>{title}</a></Link></h1>
        <p>{description}</p>
        <p className="meta">
          { formatWithOptions({ locale: enUS }, 'MMM d, yyyy')(new Date(date))} · {readingTime} min read
        </p>
      </div>
      <Excerpt post={post} />
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
        p.meta {
          padding-top: 0;
          padding-bottom: calc(var(--spacing) * 3);
          font-size: .85em;
          color: var(--grey600);
        }            
      `}</style>
    </Item>
  );
}


const Excerpt = ({ post, clamp = 7 }) => {
  const textEl = useRef(null)
  useEffect(() => {
    Clamp(textEl.current, { clamp, useNativeClamp: true })
  }, [])
  return (
    <div className="excerpt">
      <Content ref={textEl} {...post} renderers={{ a: Anchor }} excerpt/>
      <style jsx>{`
        .excerpt {
          flex: 1;
          display: flex;
          flex-direction: column;
          font-size: 1em;
          line-height: 1.51;
          color: var(--grey600);
        }

        .excerpt :global(p) {
          flex: 1;
        }
      `}</style>
    </div>
  )
}

export const Post = ({ post }) => {
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
      <div className="spacer" />
      <Link {...post} passHref>
        <a className="action">read post</a>
      </Link>
      <style jsx>{`
        .item {
          padding: calc(var(--spacing) * 4);
          background: var(--grey100);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .spacer { flex: 1; }
        .action {
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
