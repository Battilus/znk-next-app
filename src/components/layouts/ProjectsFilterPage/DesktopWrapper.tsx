import React, { FC, useEffect } from 'react';
import ProjectSections from '../ProjectSections/ProjectSections';
import ThereIsNoProjects from '../../shared/Logo/ThereIsNoProjects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination } from 'swiper';
import ProjectPreview from '../../shared/SliderPreview/ProjectPreview';
import * as apiRoutes from '../../../api/endpoints';
import { Project } from '../../../api/entities/project/types/client';
import { BffTag } from '../../../api/entities/bffTags/types/client';
import { SelectedFilterParam } from '../../../pages/projects';

type Props = {
  projects: Project[][] | null;
  servicesTags: BffTag[];
  purposesTags: BffTag[];
  buildYearsTags: BffTag[];
  isProjectsQueryEnabled: boolean;
  hover: boolean;
  hoverHandler: (isHover: boolean, index: number | null, chunkIndex: number | null) => void;
  selectedFilter: SelectedFilterParam;
  setSelectedFilter: (selectedFilter: SelectedFilterParam) => void;
  getFilteredProjects: () => Project | null;
}

const DesktopWrapper: FC<Props> = (
  {
    projects,
    servicesTags,
    purposesTags,
    buildYearsTags,
    isProjectsQueryEnabled,
    hover,
    hoverHandler,
    selectedFilter,
    setSelectedFilter,
    getFilteredProjects,
  }) => {

  const renderProjectsSlider = () => {
    if (!isProjectsQueryEnabled || !projects) {
      return <ThereIsNoProjects noFilters={true} withoutLogo={true}/>;
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
              <div className="w-full h-dvh flex flex-row overflow-x-auto">
                {projectsChunk.map((project, index) => {
                  const imagePreview = project.images.find(image => image?.projectPreview && image.projectPreview);

                  return (
                    <ProjectPreview
                      key={project.id}
                      href={`/${apiRoutes.project()}/${project.slug}`}
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
  );
};

export default DesktopWrapper;