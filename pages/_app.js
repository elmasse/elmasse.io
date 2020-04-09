import React, { Fragment } from 'react'
import NextApp from 'next/app'

import 'prismjs/themes/prism-twilight.css';

export default class App extends NextApp {

  render () {
    const { Component, pageProps } = this.props;
    const dark = true // typeof window !== undefined && !!localStorage.getItem('__is_dark')
    return (
      <Fragment>
        <style jsx global>{`
          :root {
            --font-base: 16px;
            --font-family-heading: 'PT Serif';
            --font-family-body: 'Lato';
            --spacing: 8px;

            --light: #fff;
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
            --dark: #000;

            --action-color: #f60;
            --light-alpha: rgba(255,255,255, .9);
            
            --wavy-image: url("/static/images/wavey-fingerprint-light.svg");

            --main-color: var(--grey700);
            --main-contrast-color: var(--grey200);
          }
          ${dark ? `
          :root{

            --light: #000;
            --grey50: #181818;
            --grey100: #212121;
            --grey200: #424242;
            --grey300: #757575;
            --grey400: #9e9e9e;
            --grey500: #bdbdbd;
            --grey600: #d5d5d5;
            --grey700: #e4e4e4;
            --grey800: #f0f0f0;
            --grey900: #fafafa;
            --dark: #fff;

            --light-alpha: rgba(0,0,0, .9);
            --wavy-image: url("/static/images/wavey-fingerprint-dark.svg");
            
          }`: ''}

          * {
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            margin: 0;
            padding: 0;
          }

          body {
            background-color: var(--light);
            color: var(--dark);
            font-family: var(--font-family-body), -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", sans-serif;
            font-size: var(--font-base);
          }

        `}</style>
        <Component { ...pageProps } />

      </Fragment>
    )
  }
}
