import type { GetServerSideProps, NextPage } from 'next';
import PageWrapper from '../components/PageWrapper';
import React, { useMemo, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import MobileWrapper from '../components/layouts/mainPage/MobileWrapper';
import DesktopWrapper from '../components/layouts/mainPage/DesktopWrapper';
import { PageMeta } from '../types';
import { ApiLocale } from '../api/types/locales';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getPreviewProjectsList, useGetPreviewProjectsListQuery } from '../api/entities/project/queries';
import { ProjectQueryKey } from '../api/constants';
import { Project } from '../api/entities/project/types/client';
import { useRouter } from 'next/router';

type Props = {
  meta: PageMeta;
}

const Home: NextPage<Props> = ({ meta }) => {
  const [ hover, setHover ] = useState<boolean>(false);

  const {locale} = useRouter();
  const { t } = useTranslation();

  const previewProjectsQuery = useGetPreviewProjectsListQuery(
    { localization: locale?.toUpperCase() as ApiLocale },
  );

  const projectsList = useMemo<Project[] | null>(() => {
    return previewProjectsQuery.isSuccess ? previewProjectsQuery.data : null;
  }, [ previewProjectsQuery.isSuccess ]);

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
        isLoading={previewProjectsQuery.isLoading}
      />
    );
  };

  return (
    <PageWrapper
      meta={meta}
      isHomeLocation={true}
      hideHomeButton={hover}
      screenBreakpoints={true}
    >
      {({ breakpoints: { mobileSm: iPhone }, screens: { tablet } }) =>
        renderWrapper({ previewProjects: projectsList, tablet, iPhone })
      }
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ locale }) => {
  const localization = locale?.toUpperCase() as ApiLocale;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([ ProjectQueryKey.Preview, { localization } ], getPreviewProjectsList);

  return {
    props: {
      meta: { title: 'ZNK Project Burro', description: 'Main page' },
      ...(await serverSideTranslations(localization, [ 'common' ])),
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
