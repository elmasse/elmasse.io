import React, { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Link from 'nextein/link'

import Container from './container'

export default function Navigation() {
  const [shrink, setShrink] = useState(false)
  
  useScrollPosition(({ currPos }) => {
    const isShrink = currPos.y < -10;
    if (shrink !== isShrink) setShrink(isShrink);
  }, [shrink])

  return (
    <nav className={`root ${shrink ? 'shrink': ''}`}>
      <Container>
        <h1><Link href="/"><a>elmasse.io</a></Link></h1>
      </Container>
      <style jsx>{`
        .root {
          position: sticky;
          background: rgba(255,255,255, .9);
          z-index: 10;
          top: 0;
          height: calc(var(--spacing) * 12);
          transition: all ease-in 150ms;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #e4e4e4;
        }

        .root.shrink {
          height: calc(var(--spacing) * 8);
        }

        nav {
          display: flex;
          align-items: center;
        }

        h1 {
          font-size: 1.5em;
        }

        a, a:visited {
          text-decoration: none;
          color: var(--main-color);
        }
      `}</style>
    </nav>
  )
}