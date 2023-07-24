import React, { useEffect, useState } from 'react';
import '../../styles/globals.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useRouter } from 'next/router';

function ZnkApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      const loadingScreen = document.getElementById('loadingScreen');

      if (loadingScreen) {
        loadingScreen.style.display = 'block';
      }

      return null;
    };

    const handleRouteComplete = () => {
      const loadingScreen = document.getElementById('loadingScreen');

      if (loadingScreen) {
        loadingScreen.style.display = 'none';
      }

      return null;
    };

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      // router.events.off('routeChangeComplete', handleRouteComplete)
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default appWithTranslation(ZnkApp);
