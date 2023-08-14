import React, { useEffect, useMemo, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import PageWrapper from '../components/PageWrapper';
import ProjectSections from '../components/layouts/ProjectSections/ProjectSections';
import ProjectPreview from '../components/shared/SliderPreview/ProjectPreview';
import { Swiper, SwiperSlide } from 'swiper/react';
import { chunkArray } from '../features/utils';
import { Keyboard, Pagination } from 'swiper';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PageMeta } from '../types';
import { ApiLocale, Locale } from '../api/types/locales';
import * as apiRoutes from '../api/endpoints';
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
import ThereIsNoProjects from '../components/shared/Logo/ThereIsNoProjects';
import { PAGE_TITLE_META } from '../assets/constants';

export type SelectedFilterParam = {
  type: BffTagsQueryKey | null;
  tag: BffTag | null
};

type Props = {
  meta: PageMeta;
}

const Projects: NextPage<Props> = ({ meta }) => {
  const [ hover, setHover ] = useState<boolean>(false);
  const [ selectedProjectIndex, setSelectedProjectIndex ] = useState<number | null>(null);
  const [ selectedProjectsChunkIndex, setSelectedProjectsChunkIndex ] = useState<number | null>(null);
  const [ selectedFilter, setSelectedFilter ] = useState<SelectedFilterParam>({
    type: null,
    tag: null,
  });

  const { locale } = useRouter();

  const localization = useMemo(() => {
    return locale?.toUpperCase() as ApiLocale;
  }, [ locale ]);

  const servicesTagsQuery = useGetBffServicesListQuery({ localization });
  const purposesTagsQuery = useGetBffPurposesListQuery({ localization });
  const buildYearsTagsQuery = useGetBffBuildYearsListQuery({ localization });

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

  const isProjectsQueryEnabled = Boolean(localization) && Boolean(selectedFilter.tag) && Boolean(selectedFilter.type);

  const projectsQuery = useGetProjectsListByFilterQuery(
    {
      localization,
      [selectedFilter.type as BffTagsQueryKey]: selectedFilter.tag,
    },
    { enabled: isProjectsQueryEnabled },
  );

  const projects = useMemo<Project[][] | null>(() => {
    return projectsQuery.isSuccess ? chunkArray(projectsQuery.data, 6) : null;
  }, [ projectsQuery.isSuccess, projectsQuery.data ]);

  const isLoading = servicesTagsQuery.isLoading || purposesTagsQuery.isLoading || buildYearsTagsQuery.isLoading || projectsQuery.isLoading;

  const getFilteredProjects = () => {
    return projects && selectedProjectIndex !== null && selectedProjectsChunkIndex !== null ?
      projects[selectedProjectsChunkIndex][selectedProjectIndex]
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

  const renderProjectsSlider = () => {
    if (!isProjectsQueryEnabled || !projects) {
      return <ThereIsNoProjects noFilters={true}/>;
    }

    return (
      <div className="w-full h-full overflow-hidden">
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicMainBullets: 3,
            dynamicBullets: true,
          }}
          keyboard={true}
          modules={[ Pagination, Keyboard ]}
        >
          {projects?.map((projectsChunk, chunkIndex) =>
            <SwiperSlide key={chunkIndex}>
              <div className="w-full h-screen flex flex-row overflow-x-auto">
                {projectsChunk.map((project, index) => {
                  const imagePreview = project.images.find(image => image?.projectPreview && image.projectPreview);

                  return (
                    <ProjectPreview
                      key={project.id}
                      href={`/${apiRoutes.project()}/${project.id}`}
                      name={project.title}
                      imgSrc={imagePreview?.src}
                      hover={hover}
                      setHover={(val) => hoverHandler(val, index, chunkIndex)}
                    />
                  );
                })}
              </div>
            </SwiperSlide>,
          )}
        </Swiper>
      </div>
    );
  };

  return (
    <PageWrapper meta={meta} isLoading={isLoading}>
      <div className="flex flex-row">
        <div className="flex">
          <ProjectSections.ProjectsFilter
            hover={hover}
            project={getFilteredProjects()}
            bffParams={{
              bffServices: servicesTags,
              bffPurposes: purposesTags,
              bffBuildYears: buildYearsTags,
            }}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        </div>
        {renderProjectsSlider()}
      </div>
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ locale }) => {
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
          } ],
        getProjectsListByFilter);
    }
  }

  return {
    props: {
      // @ts-ignore
      meta: { title: PAGE_TITLE_META[locale], description: locale === Locale.RU ? 'Все проекты' : 'All projects' },
      ...(await serverSideTranslations(locale || Locale.RU, [ 'common' ])),
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Projects;