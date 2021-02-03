import React, { Fragment } from 'react'
import NextApp from 'next/app'
import Head from 'next/head'
import { CssBaseline } from 'elems'

import 'prismjs/themes/prism-twilight.css'

export default class App extends NextApp {
  render () {
    const { Component, pageProps } = this.props

    return (
      <Fragment>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
        </Head>
        <CssBaseline />
        <style jsx global>{`
          :root {
            --base-font-size: 16px;
            --base-line-height: calc(32 / 21);
            --font-family-heading: 'PT Serif';
            --font-family-body: 'Lato';
            --spacing: 8px;
            
            --action-color: #f60;
            --main-color: var(--grey700);
            
            --h2-margin: calc(var(--spacing) * 8) 0 calc(var(--spacing) * 2) -2px;
            
            --p-font-size: 21px;
            --li-font-size: 21px;
            --p-margin: calc(var(--spacing) * 6) 0 0 0;
            --hr-margin: calc(var(--spacing) * 6) 0 0 0;
            --code-background-color: var(--grey100);

            font-size: var(--base-font-size);
          }

          @media (prefers-color-scheme: light)  {
            :root{
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

              --light-alpha: rgba(255,255,255, .9);
              --wavy-image: url("/static/images/wavey-fingerprint-light.svg");
            }
          }

          @media (prefers-color-scheme: dark)  {
            :root{
              --light: #111;
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
  
              --light-alpha: rgba(24,24,24, .9);
              --wavy-image: url("/static/images/wavey-fingerprint-dark.svg");

            }
          }

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
            font-size: var(--base-font-size);
          }

        `}</style>
        <Component { ...pageProps } />

      </Fragment>
    )
  }
}
