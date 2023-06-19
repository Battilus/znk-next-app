import React, { FC, TouchEventHandler } from 'react';
import MobileProjectPreview from '../../shared/SliderPreview/MobileProjectPreview';
import { TFunction } from 'i18next';
import { Project } from '../../../api/entities/project/types/client';

interface IProps {
  previewProject: Project;
  className?: string;
  widthClassName?: string;
  onTouchMove?: TouchEventHandler<HTMLDivElement>;
  onTouchStart?: TouchEventHandler<HTMLDivElement>;
  onTouchEnd?: TouchEventHandler<HTMLDivElement>;
  openSlide?: boolean;
  t: TFunction<'translation', undefined, 'translation'>;
  isPhone?: boolean;
}

const ProjectPreviewMobileSlider: FC<IProps> = (
  {
    previewProject,
    className,
    widthClassName,
    onTouchMove,
    onTouchStart,
    onTouchEnd,
    openSlide,
    t,
    isPhone,
  }) => {
  return (
    <div
      className={`${className} ${widthClassName || 'w-full'} h-full`}
      onTouchMove={onTouchMove}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      // draggable={!openSlide}
    >
      <MobileProjectPreview
        href={`/project/${previewProject.id}`}
        name={previewProject.title}
        imgSrc={previewProject.images[0].src}
        openSlide={openSlide}
        t={t}
        isPhone={isPhone}
      />
    </div>
  );
};

export default ProjectPreviewMobileSlider;