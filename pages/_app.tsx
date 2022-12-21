import '../styles/globals.scss'
import 'swiper/css';
import "swiper/css/pagination";
import type { AppProps } from 'next/app'

function ZnkApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default ZnkApp
