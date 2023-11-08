import type { GetServerSideProps, NextPage } from 'next';
import PageWrapper from '../components/PageWrapper';
import React, { useMemo, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import MobileWrapper from '../components/layouts/mainPage/MobileWrapper';
import DesktopWrapper from '../components/layouts/mainPage/DesktopWrapper';
import { PageMeta } from '../types';
import { ApiLocale, Locale } from '../api/types/locales';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getPreviewProjectsList, useGetPreviewProjectsListQuery } from '../api/entities/project/queries';
import { ProjectQueryKey } from '../api/constants';
import { Project } from '../api/entities/project/types/client';
import { useRouter } from 'next/router';


const Home: NextPage = () => {
  const [ hover, setHover ] = useState<boolean>(false);

  const {locale} = useRouter();
  const { t } = useTranslation();

  const localization = useMemo(() => {
    if (!locale) {
      return null;
    }

    return { localization: locale.toUpperCase() as ApiLocale };
  }, [locale]);

  const meta: PageMeta = {
    title: t('meta.title'),
    description: `${t('pages.main.burroDescription.desktop.text_p1')} ${t('pages.main.burroDescription.desktop.text_p2')} 
    ${t('pages.main.burroDescription.desktop.text_p3')}`,
  };

  const previewProjectsQuery = useGetPreviewProjectsListQuery(localization!, {enabled: Boolean(localization)});

  const projectsList = useMemo<Project[] | null>(() => {
    return previewProjectsQuery.isSuccess ? previewProjectsQuery.data : null;
  }, [ previewProjectsQuery.isSuccess, previewProjectsQuery.data ]);

  const renderWrapper = ({ previewProjects, tablet, iPhone }: {
    previewProjects: Project[] | null,
    tablet: boolean,
    iPhone: boolean
  }) => {
    if (!previewProjects || previewProjects.length === 0) {
      return null;
    }

    if (tablet) {
      return (
        <MobileWrapper
          previewProjects={previewProjects}
          t={t}
          alignLogo={iPhone ? 'center' : 'start'}
          isPhone={iPhone}
        />
      );
    }

    return (
      <DesktopWrapper
        previewProjects={previewProjects}
        t={t}
        hover={hover}
        setHover={setHover}
      />
    );
  };

  return (
    <PageWrapper
      meta={meta}
      isHomeLocation={true}
      hideHomeButton={hover}
      screenBreakpoints={true}
      isLoading={previewProjectsQuery.isLoading}
    >
      {({ breakpoints: { mobileSm: iPhone }, screens: { tablet } }) =>
        renderWrapper({ previewProjects: projectsList, tablet, iPhone })
      }
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const localization = locale?.toUpperCase() as ApiLocale;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([ ProjectQueryKey.Preview, { localization } ], getPreviewProjectsList);

  return {
    props: {
      ...(await serverSideTranslations(locale || Locale.RU, [ 'common' ])),
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
