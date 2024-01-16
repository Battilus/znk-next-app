import React, { FC } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import MobileProjectPreview from '../../shared/SliderPreview/MobileProjectPreview';
import { Project } from '../../../api/entities/project/types/client';
import LogoLink from '../../shared/Logo/LogoLink';
import { BffTag } from '../../../api/entities/bffTags/types/client';
import { SelectedFilterParam } from '../../../pages/projects';
import { TFunction } from 'i18next';
import ProjectsFilterMobile from './ProjectsFilterMobile';
import { declOfNum } from '../../../features/utils';
import { Locale } from '../../../api/types/locales';

type Props = {
  foundProjects: Project[] | null;
  servicesTags: BffTag[];
  purposesTags: BffTag[];
  buildYearsTags: BffTag[];
  selectedFilter: SelectedFilterParam;
  setSelectedFilter: (selectedFilter: SelectedFilterParam) => void;
  t: TFunction<'translation', undefined>;
  locale?: string;
}

const MobileWrapper: FC<Props> = (
  {
    foundProjects,
    servicesTags,
    purposesTags,
    buildYearsTags,
    selectedFilter,
    setSelectedFilter,
    t,
    locale,
  }) => {
  const renderMainScreen = () => {
    const renderFoundProjectsTotal = () => {
      const foundTotal = foundProjects?.length || 0;
      const foundTotalPostfix = locale === Locale.RU ?
        declOfNum(foundTotal, ['проект', 'проекта', 'проектов']) :
        declOfNum(foundTotal, ['project', 'projects', 'projects']);

      return (
        <div className="uppercase text-whiteSmoke">
          {t('projects_filters.foundProjects')} <span className="font-medium">{foundTotal}</span> {foundTotalPostfix}
        </div>
      )
    }

    return (
      <SwiperSlide>
        <div className="h-dvh px-[40px] pt-[4px] pb-[40px] bg-neonGray flex flex-col justify-between">
        <LogoLink href="/" align="start" isWhite={true}/>

          <ProjectsFilterMobile
            bffParams={{
              bffServices: servicesTags,
              bffPurposes: purposesTags,
              bffBuildYears: buildYearsTags,
            }}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            t={t}
          />

          {renderFoundProjectsTotal()}
        </div>
      </SwiperSlide>
    )
  }

  const renderFoundPreviewProjects = () => {
    if (!foundProjects) {
      return null;
    }

    return foundProjects.map((project) => {
      return (
        <SwiperSlide key={project.id}>
          <MobileProjectPreview previewProject={project} />
        </SwiperSlide>
      )
    })
  }

  return (
    <Swiper
      pagination={{
        clickable: true,
        dynamicMainBullets: 3,
        dynamicBullets: true,
        verticalClass: '!top-[90vh] !right-[1.5rem]',
      }}
      modules={[ Pagination ]}
      className="absolute top-0 left-0 w-full h-dvh z-10"
      direction="vertical"
    >
      {renderMainScreen()}
      {renderFoundPreviewProjects()}
    </Swiper>
  );
};

export default MobileWrapper;