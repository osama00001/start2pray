import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  <head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2025219748618763"
     crossOrigin="anonymous"></script>
  </head>
  return <Component {...pageProps} />
}

export default MyApp
