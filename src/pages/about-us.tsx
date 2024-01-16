import React, { memo, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import PageWrapper from '../components/PageWrapper';
import { CERTIFICATES } from '../assets/constants';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { PartnerCardType, PageMeta } from '../types';
import BurroDesktop from '../components/layouts/burroPage/desktop/BurroDesktop';
import BurroMobile from '../components/layouts/burroPage/mobile/BurroMobile';
import { Locale } from '../api/types/locales';


type Props = {
  certificates: PartnerCardType[];
}

const AboutUs: NextPage<Props> = ({ certificates }) => {

  const [ hover, setHover ] = useState<boolean>(false);

  const { t } = useTranslation();

  const meta: PageMeta = {
    title: t('meta.title'),
    description: `${t('pages.burro.philosophy.description.p1')} ${t('pages.burro.philosophy.description.p2')}`,
  };

  const renderWrapper = ({ isTablet, isPhone, desktop }: { isTablet: boolean; isPhone: boolean; desktop: boolean; }) => {
    if (!isPhone && !isTablet && !desktop) {
      return null;
    }

    if (isTablet) {
      return (
        <BurroMobile
          certificates={certificates}
          t={t}
          isMobileScreen={isPhone}
        />
      )
    }

    return (
      <BurroDesktop
        certificates={certificates}
        t={t}
        hover={hover}
        setHover={setHover}
      />
    )
  }

  return (
    <PageWrapper meta={meta} screenBreakpoints={true} menuButtonColor="text-white">
      {({ breakpoints: { mobileSm: isPhone }, screens: { tablet: isTablet, desktop } }) => {
        return renderWrapper({ isPhone, isTablet, desktop})
      }}
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ locale }) => {
  return {
    props: {
      certificates: CERTIFICATES,
      ...(await serverSideTranslations(locale || Locale.RU, [ 'common' ])),
    },
  };
};
export default memo(AboutUs);
