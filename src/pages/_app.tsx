import '../../styles/globals.scss'
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

function ZnkApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Component {...pageProps} />
}

export default appWithTranslation(ZnkApp)
