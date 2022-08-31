import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function ZnkApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default ZnkApp
