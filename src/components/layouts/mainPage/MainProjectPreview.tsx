import React, { FC } from 'react';
import ProjectPreview from '../../shared/SliderPreview/ProjectPreview';
import { Project } from '../../../api/entities/project/types/client';

interface IProps {
  previewProjects: Project[];
  hover?: boolean;
  hoverHandler: (val: boolean, index: number | null) => void;
}

const MainProjectPreview: FC<IProps> = ({ previewProjects, hover, hoverHandler }) => {
  return (
    <div className="w-full h-full flex mr-8 2xl:mr-2.22v">
      {previewProjects.map((project, index) => {
          const imagePreview = project.images.find(image => image?.projectPreview && image.projectPreview);

          return (
            <ProjectPreview
              key={project.id}
              href={`/project/${project.id}`}
              name={project.title}
              imgSrc={imagePreview?.src || ''}
              hover={hover}
              setHover={(val) => hoverHandler(val, index)}
              disableBorder={previewProjects.length - 1 === index}
            />
          );
        },
      )}
    </div>
  );
};

export default MainProjectPreview;