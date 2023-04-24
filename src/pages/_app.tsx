import '../../styles/globals.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { wrapper } from '../redux';
import { Provider } from 'react-redux';

function ZnkApp({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Provider store={store}>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <Component {...props} />
    </Provider>
  );
}

export default appWithTranslation(ZnkApp);
