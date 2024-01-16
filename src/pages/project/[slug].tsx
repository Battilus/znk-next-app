import React, { useMemo } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import PageWrapper from '../../components/PageWrapper';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PageMeta } from '../../types';
import { ApiLocale, Locale } from '../../api/types/locales';
import { Project } from '../../api/entities/project/types/client';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { ProjectQueryKey } from '../../api/constants';
import {
  getOneProjectBySlug,
  useGetOneProjectBySlugQuery,
} from '../../api/entities/project/queries';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import DesktopWrapper from '../../components/layouts/ProjectPage/desktop/DesktopWrapper';
import MobileWrapper from '../../components/layouts/ProjectPage/mobile/MobileWrapper';

type Props = {
  urlSlug: string;
}

const Project: NextPage<Props> = ({ urlSlug }) => {
  const { locale } = useRouter();

  const { t } = useTranslation();

  const queryParams = useMemo(() => {
    if (!locale) {
      return null;
    }

    return { localization: locale?.toUpperCase() as ApiLocale };
  }, [ locale ]);

  const projectQuery = useGetOneProjectBySlugQuery(urlSlug, queryParams!, { enabled: Boolean(locale) });

  const project = useMemo<Partial<Project> | null>(() => {
    return projectQuery.isSuccess ? projectQuery.data : null;
  }, [ projectQuery.isSuccess, projectQuery.data ]);

  const meta: PageMeta = {
    title: t('meta.title'),
    description: project?.description || project?.title || '',
  };

  const renderWrapper = ({ isTablet, isPhone, desktop }: { isTablet: boolean; isPhone: boolean; desktop: boolean; }) => {
    if (!project || (!isPhone && !isTablet && !desktop)) {
      return null;
    }

    if (isTablet || isPhone) {
      return <MobileWrapper project={project} t={t}/>
    }

    return <DesktopWrapper project={project}/>;
  }

  return (
    <PageWrapper meta={meta} isLoading={projectQuery.isLoading} screenBreakpoints={true} menuButtonColor="text-white">
      {({ breakpoints: { mobileSm: isPhone }, screens: { tablet: isTablet, desktop } }) =>
        renderWrapper({ isTablet, isPhone, desktop })
      }
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ params, locale }) => {
  const localization = locale?.toUpperCase() as ApiLocale;

  const urlSlug = `${params?.slug}`;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([ ProjectQueryKey.One, urlSlug, { localization } ], getOneProjectBySlug);

  return {
    props: {
      ...(await serverSideTranslations(locale || Locale.RU, [ 'common' ])),
      dehydratedState: dehydrate(queryClient),
      urlSlug,
    },
  };
};

export default Project;