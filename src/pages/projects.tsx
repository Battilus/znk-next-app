import React, { useEffect, useMemo, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import PageWrapper from '../components/PageWrapper';
import { chunkArray } from '../features/utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PageMeta } from '../types';
import { ApiLocale, Locale } from '../api/types/locales';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { BffTagsQueryKey, ProjectQueryKey } from '../api/constants';
import { getProjectsListByFilter, useGetProjectsListByFilterQuery } from '../api/entities/project/queries';
import {
  getBffPurposesList,
  getBffServicesList,
  getBffBuildYearsList, useGetBffPurposesListQuery,
  useGetBffServicesListQuery, useGetBffBuildYearsListQuery,
} from '../api/entities/bffTags/queries';
import { Project } from '../api/entities/project/types/client';
import { BffTag } from '../api/entities/bffTags/types/client';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import DesktopWrapper from '../components/layouts/ProjectsFilterPage/DesktopWrapper';
import MobileWrapper from '../components/layouts/ProjectsFilterPage/MobileWrapper';

export type SelectedFilterParam = {
  type: BffTagsQueryKey | null;
  tag: BffTag | null
};

const Projects: NextPage = () => {
  const [ hover, setHover ] = useState<boolean>(false);
  const [ selectedProjectIndex, setSelectedProjectIndex ] = useState<number | null>(null);
  const [ selectedProjectsChunkIndex, setSelectedProjectsChunkIndex ] = useState<number | null>(null);
  const [ selectedFilter, setSelectedFilter ] = useState<SelectedFilterParam>({
    type: null,
    tag: null,
  });

  const { locale } = useRouter();

  const { t } = useTranslation();

  const meta: PageMeta = {
    title: t('meta.title'),
    description: t('meta.allProjects'),
  };

  const queryParams = useMemo(() => {
    if (!locale) {
      return null;
    }

    return { localization: locale?.toUpperCase() as ApiLocale };
  }, [ locale ]);

  const servicesTagsQuery = useGetBffServicesListQuery(queryParams!, { enabled: Boolean(queryParams) });
  const purposesTagsQuery = useGetBffPurposesListQuery(queryParams!, { enabled: Boolean(queryParams) });
  const buildYearsTagsQuery = useGetBffBuildYearsListQuery(queryParams!, { enabled: Boolean(queryParams) });

  const servicesTags = useMemo<BffTag[]>(() => {
    return servicesTagsQuery.isSuccess ? servicesTagsQuery.data : [];
  }, [ servicesTagsQuery.isSuccess, servicesTagsQuery.data ]);

  const purposesTags = useMemo<BffTag[]>(() => {
    return purposesTagsQuery.isSuccess ? purposesTagsQuery.data : [];
  }, [ purposesTagsQuery.isSuccess, purposesTagsQuery.data ]);

  const buildYearsTags = useMemo<BffTag[]>(() => {
    if (buildYearsTagsQuery.isSuccess) {
      const tag = buildYearsTagsQuery.data.length ? buildYearsTagsQuery.data[buildYearsTagsQuery.data.length - 1] : null;

      if (tag) {
        setSelectedFilter({
          type: BffTagsQueryKey.BuildYears,
          tag,
        });
      }

      return buildYearsTagsQuery.data;
    }

    return [];
  }, [ buildYearsTagsQuery.isSuccess, buildYearsTagsQuery.data ]);

  const isProjectsQueryEnabled = Boolean(queryParams) && Boolean(selectedFilter.tag) && Boolean(selectedFilter.type);

  const projectsQuery = useGetProjectsListByFilterQuery(
    {
      localization: queryParams?.localization as ApiLocale,
      [selectedFilter.type as BffTagsQueryKey]: selectedFilter.tag,
      get_preview_images: 'True',
    },
    { enabled: isProjectsQueryEnabled },
  );

  const foundProjects = useMemo<Project[] | null>(() => {
    return projectsQuery.isSuccess ? projectsQuery.data : null;
  }, [ projectsQuery.isSuccess, projectsQuery.data ]);

  const projectsByChunks = useMemo<Project[][] | null>(() => {
    return foundProjects ? chunkArray(foundProjects, 6) : null;
  }, [ foundProjects ]);

  const isLoading = servicesTagsQuery.isLoading || purposesTagsQuery.isLoading || buildYearsTagsQuery.isLoading || projectsQuery.isLoading;

  const getFilteredProjects = () => {
    return projectsByChunks && selectedProjectIndex !== null && selectedProjectsChunkIndex !== null ?
      projectsByChunks[selectedProjectsChunkIndex][selectedProjectIndex]
      : null;
  };

  const hoverHandler = (isHover: boolean, index: number | null, chunkIndex: number | null) => {
    setHover(isHover);
    setSelectedProjectIndex(index);
    setSelectedProjectsChunkIndex(chunkIndex);
  };

  useEffect(() => {
    if (!hover) {
      setSelectedProjectIndex(null);
    }
  }, [ hover ]);

  const renderWrapper = ({ isTablet, isPhone, desktop }: { isTablet: boolean; isPhone: boolean; desktop: boolean; }) => {
    if (!isPhone && !isTablet && !desktop) {
      return null;
    }

    if (isTablet || isPhone) {
      return (
        <MobileWrapper
          foundProjects={foundProjects}
          servicesTags={servicesTags}
          purposesTags={purposesTags}
          buildYearsTags={buildYearsTags}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          t={t}
          locale={locale}
        />
      );
    }

    return (
      <DesktopWrapper
        projects={projectsByChunks}
        servicesTags={servicesTags}
        purposesTags={purposesTags}
        buildYearsTags={buildYearsTags}
        isProjectsQueryEnabled={isProjectsQueryEnabled}
        hover={hover}
        hoverHandler={hoverHandler}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        getFilteredProjects={getFilteredProjects}
      />
    );
  }

  return (
    <PageWrapper meta={meta} isLoading={isLoading} screenBreakpoints={true} menuButtonColor="text-white">
      {({ breakpoints: { mobileSm: isPhone }, screens: { tablet: isTablet, desktop } }) =>
        renderWrapper({ isTablet, isPhone, desktop })
      }
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const localization = locale?.toUpperCase() as ApiLocale;

  const queryClient = new QueryClient();
  await queryClient.fetchQuery([ BffTagsQueryKey.Services, { localization } ], getBffServicesList);
  await queryClient.fetchQuery([ BffTagsQueryKey.Purposes, { localization } ], getBffPurposesList);
  const buildYearsQueryData = await queryClient.fetchQuery([ BffTagsQueryKey.BuildYears, { localization } ], getBffBuildYearsList);

  if (buildYearsQueryData && buildYearsQueryData.length) {
    const tag = buildYearsQueryData[buildYearsQueryData.length - 1];

    if (tag) {
      await queryClient.fetchQuery([
          ProjectQueryKey.List,
          {
            localization,
            [BffTagsQueryKey.BuildYears]: tag,
            get_preview_images: 'True',
          } ],
        getProjectsListByFilter);
    }
  }

  return {
    props: {
      ...(await serverSideTranslations(locale || Locale.RU, [ 'common' ])),
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Projects;