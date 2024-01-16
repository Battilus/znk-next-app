import React, { FC } from 'react';
import ProjectStatusRow from './ProjectStatusRow';
import { Project } from '../../../../api/entities/project/types/client';

interface IProps {
  project: Project | null;
}

const ProjectPreviewDescription: FC<IProps> = ({ project }) => {
  if (!project) {
    return null;
  }

  return (
    <div className="w-full h-full flex flex-col justify-between min-w-48 2xl:min-w-13.33v">
      <div>
        <div className="w-full h-px 2xl:h-[0.07vw] bg-matterhorn mb-1.5 2xl:mb-0.42v"/>

        <div className="uppercase text-matterhorn leading-18p 2xl:leading-1.25v font-medium text-sm 2xl:text-0.97v text-justify">
          {project?.title}
        </div>
      </div>

      <div className="w-full h-full flex flex-col justify-end items-end space-y-3">
        <ProjectStatusRow status={project?.location}/>
        <ProjectStatusRow status={project?.yearOfBuild}/>
        <ProjectStatusRow status={project?.status}/>
      </div>
    </div>
  );
};

export default ProjectPreviewDescription;