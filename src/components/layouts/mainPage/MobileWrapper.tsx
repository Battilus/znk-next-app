import React, { FC, TouchEventHandler, useState } from 'react';
import ProjectSections from '../ProjectSections/ProjectSections';
import ProjectPreviewMobileSlider from './ProjectPreviewMobileSlider';
import { TFunction } from 'i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { mathPercent } from '../../../features/utils';
import { Pagination } from 'swiper';
import LogoLink from '../../shared/Logo/LogoLink';
import Button from '../../shared/Button/Button';
import DownloadIcon from '../../../../public/svg/download-arrow.svg';
import { Project } from '../../../api/entities/project/types/client';
import { PRESENTATION_LINK } from '../../../assets/constants';

interface IProps {
  previewProjects: Project[];
  t: TFunction<'translation', undefined, 'translation'>;
  alignLogo?: 'start' | 'center';
  isPhone?: boolean;
}

const MobileWrapper: FC<IProps> = ({ previewProjects, t, alignLogo, isPhone }) => {
  const [ touchMenu, setTouchMenu ] = useState<boolean>(false);
  const [ startPoint, setStartPoint ] = useState<number>(0);

  const swipeLeftHandler: TouchEventHandler<HTMLDivElement> = (event) => {
    if (mathPercent((startPoint - event.changedTouches[0].clientX), startPoint) > 15) {
      setTouchMenu(true);
    }

    if (mathPercent((event.changedTouches[0].clientX - startPoint), startPoint) > 15) {
      setTouchMenu(false);
    }
  };

  const swipeRightHandler: TouchEventHandler<HTMLDivElement> = (event) => {
    if (mathPercent((startPoint - event.changedTouches[0].clientX), startPoint) > 15) {
      setTouchMenu(false);
    }

    if (mathPercent((event.changedTouches[0].clientX - startPoint), startPoint) > 15) {
      setTouchMenu(true);
    }
  };

  const touchStartHandler: TouchEventHandler<HTMLDivElement> = (event) => {
    setStartPoint(event.changedTouches[0].clientX);
  };

  const touchEndHandler: TouchEventHandler<HTMLDivElement> = () => {
    setStartPoint(0);
  };

  return (
    <Swiper
      pagination={
        touchMenu && {
          clickable: true,
          dynamicMainBullets: 3,
          horizontalClass: 'top-5',
          dynamicBullets: true,
        }}
      noSwiping={!touchMenu}
      noSwipingClass="swiper-slide"
      modules={[ Pagination ]}
      className="absolute top-0 left-0 w-full h-screen z-10"
    >
      <SwiperSlide>
        <div className="flex">
          <div className="flex">
            <ProjectSections.LogoInf
              staticWidth={true}
              mobile={true}
              alignLogo={alignLogo}
              onLeaveChildren={
                <ProjectSections.BurroDescriptionMobile
                  descriptionText={
                    <>
                      <p>
                        {isPhone ?
                          t('pages.main.burroDescription.phone.text_p1') :
                          t('pages.main.burroDescription.desktop.text_p1')}
                      </p>
                      <p>
                        {isPhone ?
                          t('pages.main.burroDescription.phone.text_p2') :
                          t('pages.main.burroDescription.desktop.text_p2')}
                      </p>
                    </>
                  }
                />
              }
            />
          </div>
          <ProjectPreviewMobileSlider
            className="transition-all duration-200 w-full"
            widthClassName={touchMenu ? 'fixed top-0 left-0' : ''}
            onTouchMove={swipeLeftHandler}
            onTouchStart={touchStartHandler}
            onTouchEnd={touchEndHandler}
            previewProject={previewProjects[0]}
            openSlide={touchMenu}
            t={t}
          />
        </div>
      </SwiperSlide>
      {previewProjects.map((project, index) =>
        index > 0 && index < previewProjects.length - 1 ?
          <SwiperSlide key={project.id}>
            <ProjectPreviewMobileSlider previewProject={project} openSlide={touchMenu} t={t}/>
          </SwiperSlide> :
          index === previewProjects.length - 1 &&
          <SwiperSlide key={project.id}>
            <div className="flex">
              <ProjectPreviewMobileSlider
                className="transition-all duration-200 w-full"
                widthClassName={touchMenu ? 'fixed top-0 right-0' : ''}
                onTouchMove={swipeRightHandler}
                onTouchStart={touchStartHandler}
                onTouchEnd={touchEndHandler}
                previewProject={project}
                openSlide={touchMenu}
                t={t}
              />
              <div className="flex">
                <div
                  className="w-[17.375rem] h-screen px-8 py-11 bg-white border-l border-matterhorn flex flex-col items-center justify-end">
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <LogoLink href="/" align="center"/>
                  </div>
                  <div className="w-full flex flex-col items-center gap-[15px]">
                    <Button.Link
                      href={PRESENTATION_LINK}
                      isBlank={true}
                      styleType="rounded"
                      className="w-full border border-matterhorn"
                      childrenClassName="w-full flex items-center justify-center gap-2"
                    >
                      <div
                        className="text-sl font-semibold text-center leading-21.5"
                      >
                        {t('actionButtons.presentation')}
                      </div>
                      <DownloadIcon className="w-4 h-3 -mt-[0.25rem]"/>
                    </Button.Link>
                    <Button.Link
                      href="/projects"
                      styleType="rounded"
                      className="w-full border border-matterhorn"
                      childrenClassName="w-full flex items-center justify-center"
                    >
                      <div
                        className="text-sl font-semibold text-center leading-21.5"
                      >
                        {t('all_projects')}
                      </div>
                    </Button.Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>)
      }
    </Swiper>
  );
};

export default MobileWrapper;