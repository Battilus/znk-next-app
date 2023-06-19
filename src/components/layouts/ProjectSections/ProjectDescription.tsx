import React, { FC } from 'react';
import ProjectStatusRow from './utilityComponents/ProjectStatusRow';
import ProjectSections from './ProjectSections';
import LogoLink from '../../shared/Logo/LogoLink';
import { useTranslation } from 'next-i18next';
import { Project } from '../../../api/entities/project/types/client';

interface IProjectDescriptionProps {
  project: Partial<Project> | null;
}

const ProjectDescription: FC<IProjectDescriptionProps> = ({ project }) => {

  const { t } = useTranslation();

  const splitIndents = (text: string) => {
    return text.split('\n').map(str => <p key={str}>{str}</p>);
  };

  return (
    <ProjectSections
      className="w-98.5 2xl:w-29.44v px-7 2xl:px-[1.94vw] pb-6 2xl:pb-1.67v"
      border={true}
    >
        <div className="flex flex-col w-full h-full">
            <LogoLink href="/" align="start"/>

            <div className="w-full flex flex-col">
                <div className="w-full h-px 2xl:h-[0.07vw] bg-matterhorn mb-1.5 2xl:mb-0.42v"/>
                <div className="uppercase text-matterhorn leading-18p 2xl:leading-1.25v font-medium text-sm 2xl:text-0.97v">
                    {project?.title}
                </div>
            </div>

            <div
              className="h-full my-9 2xl:my-[2.5vw] text-matterhorn text-xs 2xl:text-0.83v leading-13p 2xl:leading-0.9v
                         font-normal text-justify space-y-0.5">
                {project?.description ? splitIndents(project?.description) : null}
            </div>

            <div className="w-full h-full flex flex-col justify-end items-end space-y-3">
                <ProjectStatusRow title={t('projectStatusRow.destination')} status={project?.service}/>
                <ProjectStatusRow title={t('projectStatusRow.place')} status={project?.location}/>
                <ProjectStatusRow title={t('projectStatusRow.year')} status={project?.yearOfBuild}/>
                <ProjectStatusRow title={t('projectStatusRow.status')} status={project?.status}/>
            </div>
        </div>
    </ProjectSections>
  );
};

export default ProjectDescription;