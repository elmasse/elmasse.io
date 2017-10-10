import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'
import { flush } from 'emotion'

const dev = process.env.NODE_ENV !== 'production'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    if (dev) { flush() }    
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  constructor (props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }
  
  render() {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width,minimum-scale=1' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Lato:100,300,400,600|Open+Sans:300,400,600' />
          <style>{`body {font-family: Lato, sans-serif;}`}</style>

          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-light.min.css" />		
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
