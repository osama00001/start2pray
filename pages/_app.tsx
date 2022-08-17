import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2025219748618763"
     crossOrigin="anonymous"></script>

<ins className="adsbygoogle"
     data-ad-client="ca-pub-2025219748618763"
     data-ad-slot="2026767381"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
</>
  </Head>
  return <Component {...pageProps} />
}

export default MyApp
