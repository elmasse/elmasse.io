import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charset='utf-8' />
          <link rel='canonical' href='/' />
          <meta name='viewport' content='width=device-width,minimum-scale=1' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto' />
          <style>{`body {font-family: Roboto, sans-serif;}`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />          
        </body>
      </html>
    )
  }
}
