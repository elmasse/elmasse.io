import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/favicon.png" rel="icon" type="image/x-icon" />
          <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Open+Sans:300,400,600|PT+Serif:400,700|Pacifico&display=swap" rel="stylesheet" />
        </Head>
        <body className='bg-white dark:bg-black'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
