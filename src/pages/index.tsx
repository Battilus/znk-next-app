import type { GetServerSideProps, NextPage } from 'next';
import PageWrapper from '../components/PageWrapper';
import React, { useEffect, useState } from 'react';
import { ProjectDescriptionData } from '../types/Api/dataTypes';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { projectsList } from '../app/mock/fakeData';
import { useTranslation } from 'next-i18next';
import MobileWrapper from '../components/layouts/mainPage/MobileWrapper';
import DesktopWrapper from '../components/layouts/mainPage/DesktopWrapper';
import { PageMeta } from '../types';
import { ApiLocale, Locale } from '../api/types/locales';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getPreviewProjectsList, useGetPreviewProjectsListQuery } from '../api/entities/project/queries';

type Props = {
  meta: PageMeta;
  previewProjects: ProjectDescriptionData[];
}

const Home: NextPage<Props> = ({ meta, previewProjects }) => {
  const [ hover, setHover ] = useState<boolean>(false);

  const { t } = useTranslation();

  // const previewProjectsQuery = useGetPreviewProjectsListQuery(
  //   { localization: ApiLocale.RU },
  //   { refetchInterval: false },
  // );
  //
  // useEffect(() => {
  //   if (previewProjectsQuery.isSuccess) {
  //     console.log(previewProjectsQuery.data);
  //   }
  // }, [ previewProjectsQuery.isSuccess ]);

  const renderWrapper = ({ previewProjects, tablet, iPhone }: {
    previewProjects: ProjectDescriptionData[],
    tablet: boolean,
    iPhone: boolean
  }) => {
    if (previewProjects.length === 0) {
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
    >
      {({ breakpoints: { mobileSm: iPhone }, screens: { tablet } }) =>
        renderWrapper({ previewProjects, tablet, iPhone })
      }
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ locale }) => {
  // const queryClient = new QueryClient();
  // await queryClient.prefetchQuery([ 'previewProjects', { localization: ApiLocale.RU } ], getPreviewProjectsList);

  const previewProjects = projectsList.filter(project => project?.mainPagePreview && project.mainPagePreview);

  return {
    props: {
      meta: { title: 'ZNK Project Burro', description: 'Main page' },
      previewProjects: previewProjects.length > 3 ? previewProjects.slice(0, 3) : previewProjects,
      ...(await serverSideTranslations(locale || Locale.RU, [ 'common' ])),
      // dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
