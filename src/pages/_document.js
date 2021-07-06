import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/images/favicon.ico" rel="icon" type="image/x-icon" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Open+Sans:300,400,600|PT+Serif:400,700&display=swap" rel="stylesheet" />
        </Head>
        <body className='bg-white dark:bg-black'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
