import React from 'react';
import App from 'next/app';
import {ThemeProvider, createGlobalStyle} from 'styled-components'
import {BaseStyles, Link, theme} from '@primer/components'

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {}
  //
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }
  //
  //   return { pageProps }
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <BaseStyles fontSize={2}>
            <Component {...pageProps} />
          </BaseStyles>
        </>
      </ThemeProvider>
    );
  }
}

export default MyApp;