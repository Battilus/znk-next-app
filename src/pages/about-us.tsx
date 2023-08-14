import React, { memo, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import PageWrapper from '../components/PageWrapper';
import { CERTIFICATES, PAGE_TITLE_META } from '../assets/constants';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { PartnerCardType, PageMeta } from '../types';
import BurroDesktop from '../components/layouts/burroPage/desktop/BurroDesktop';
import BurroMobile from '../components/layouts/burroPage/mobile/BurroMobile';
import { Locale } from '../api/types/locales';


type Props = {
  meta: PageMeta;
  certificates: PartnerCardType[];
}

const AboutUs: NextPage<Props> = ({ meta, certificates }) => {

  const [ hover, setHover ] = useState<boolean>(false);

  const { t } = useTranslation();

  return (
    <PageWrapper meta={meta} screenBreakpoints={true} menuButtonColor="text-white">
      {({ breakpoints: { mobileSm }, screens: { tablet } }) =>
        tablet ?
          <BurroMobile
            certificates={certificates}
            t={t}
            isMobileScreen={mobileSm}
          /> :
          <BurroDesktop
            certificates={certificates}
            t={t}
            hover={hover}
            setHover={setHover}
          />}
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ locale }) => {
  return {
    props: {
      // @ts-ignore
      meta: { title: PAGE_TITLE_META[locale], description: locale === Locale.RU ? 'О нас' : 'About us' },
      certificates: CERTIFICATES,
      ...(await serverSideTranslations(locale || Locale.RU, [ 'common' ])),
    },
  };
};
export default memo(AboutUs);