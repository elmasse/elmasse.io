import Link from 'nextein/link'

import Container from './container'

export default function Navigation() {
  
  return (
    <nav>
      <Container className="items">
        <h1><Link href="/"><a>elmasse.io</a></Link></h1>
        <div className="spacer" />
        <h4><Link href="/about"><a>about me</a></Link></h4>
      </Container>
      <style jsx>{`
        nav {
          position: sticky;
          background: var(--light-alpha);
          z-index: 10;
          top:  calc(var(--spacing) * -4);
          height: calc(var(--spacing) * 12);
          transition: all ease-in 150ms;
          border-bottom: 1px solid var(--grey100);
          display: flex;
          align-items: center;
        }

        nav :global(.items) {
          display: flex;
          flex-direction: row;
          align-items: center;
          height: calc(var(--spacing) * 8);
          position: sticky;
          top: 0;     
        }

        .spacer {
          flex: 1;
        }

        h1 {
          font-size: 1.5em;
        }

        h4 {
          text-transform: uppercase;
          font-weight: 400;
        }

        a, a:visited {
          text-decoration: none;
          color: var(--main-color);
        }
      `}</style>
    </nav>
  )
}