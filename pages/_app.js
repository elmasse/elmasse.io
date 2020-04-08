import React, { Fragment } from 'react'
import NextApp from 'next/app'

import 'prismjs/themes/prism-twilight.css';

export default class App extends NextApp {

  render () {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <style jsx global>{`
          :root {
            --font-base: 16px;
            --font-family-heading: 'PT Serif';
            --font-family-body: 'Lato';
            --spacing: 8px;

            --grey50: #fafafa;
            --grey100: #f0f0f0;
            --grey200: #e4e4e4;
            --grey300: #d5d5d5;
            --grey400: #bdbdbd;
            --grey500: #9e9e9e;
            --grey600: #757575;
            --grey700: #424242;
            --grey800: #212121;
            --grey900: #181818;

            --main-color: var(--grey700);
            --main-contrast-color: var(--grey200);
            --action-color: #f60;
          }

          * {
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            margin: 0;
            padding: 0;
          }

          body {            
            font-family: var(--font-family-body), -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", sans-serif;
            font-size: var(--font-base);
          }

        `}</style>
        <Component { ...pageProps } />

      </Fragment>
    )
  }
}