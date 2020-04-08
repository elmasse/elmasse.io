import Link from 'next/link'

import Container from './container'
import { Anchor } from './elements'

export default function Footer() {
  return (
    <footer>
      <Container>
        <h1><Link href="/"><a>elmasse.io</a></Link></h1>
        <p className="license">
          <Anchor rel="license" href="http://creativecommons.org/licenses/by/4.0/">
            <img height="24px" alt="Creative Commons License" src="/static/images/cc.svg" />
            <img height="24px" alt="Creative Commons License BY" src="/static/images/cc-by.svg" />
          </Anchor>
        </p>
        <p className="license">
          This work is licensed under a &nbsp;
          <Anchor rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</Anchor>.
        </p>
        <p className="built">
          Built with ♥︎ and <Anchor href="https://nextein.elmasse.io">nextein</Anchor> by <Anchor href="https://github.com/elmasse">/<span>elmasse</span></Anchor>
        </p>
      </Container>
      <style jsx>{`
        footer {
          background: var(--grey100);
          border-top: 1px solid var(--grey200);
          padding: calc(var(--spacing) * 4) 0;
        }

        footer :global(.container) {
          display: flex;
          flex-direction: column;
        }

        h1 {
          font-size: 1.5em;
        }

        h1 > a, h1 > a:visited {
          text-decoration: none;
          color: var(--main-color);
        }

        p {
          font-size: .8rem;
          color: var(--grey700);
        }

        .license {
          align-self: flex-end;
          text-align: right;
          max-width: 350px;
        }

        .built {
          padding-top: calc(var(--spacing) * 4);
          align-self: flex-end;
        }

      `}</style>
    </footer>
  )
}
