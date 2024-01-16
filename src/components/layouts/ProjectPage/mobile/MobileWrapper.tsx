import React, { FC, useEffect, useMemo, useState } from 'react';
import { Project } from '../../../../api/entities/project/types/client';
import { TFunction } from 'i18next';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import ProjectStatusRow from '../../ProjectSections/utilityComponents/ProjectStatusRow';
import { useWindowSize } from '../../../../features/hooks/useWindowSize';
import { MIN_MOBILE_SCREEN_HEIGHT } from '../../../../assets/constants';
import { Autoplay, FreeMode, Mousewheel, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import LogoLink from '../../../shared/Logo/LogoLink';

type Props = {
  project: Partial<Project> | null;
  t: TFunction<'translation', 'string'>;
}

const MobileWrapper: FC<Props> = ({ project, t }) => {
  const [ isLoadedWithDelay, setIsLoadedWithDelay ] = useState<boolean>(false);

  const { height: screenHeight = 0 } = useWindowSize();

  const splitIndents = (text: string) => {
    return text.split('\n').map((str, index) => <SwiperSlide className="!h-auto" key={index}>{str}</SwiperSlide>);
  };

  const projectDescriptionNode = useMemo(() => {
    if (project?.description) {
      return (
        <>
          {splitIndents(project?.description)}
        </>
      );
    }

    return null;
  }, [project])

  useEffect(() => {
    setTimeout(() => {
      setIsLoadedWithDelay(true);
    }, 600)
  }, []);

  const renderProjectPreviewImage = () => {
    const preview = project?.images?.find(img => img.projectPreview )

    if (!preview) {
      return null;
    }

    return (
      <Image
        className="object-cover brightness-[20%] h-dvh w-full"
        src={preview.src}
        alt="test"
        quality={100}
        priority={true}
        width="0"
        height="0"
        sizes="100vw"/>
    )
  }

  const renderDescriptionSlide = () => {
    return (
      <SwiperSlide>
        <div className="h-dvh w-full">
          {renderProjectPreviewImage()}

          <div className="fixed top-0 left-0 w-full h-dvh">
            <Transition
              appear={true}
              show={isLoadedWithDelay}
              enter="transform transition duration-500 z-10"
              enterFrom="opacity-0 z-10"
              enterTo="opacity-100 flex flex-col w-full text-white z-10"
              leave="transform transition duration-500 z-10"
              leaveFrom="opacity-100 flex flex-col w-full text-white z-10"
              leaveTo="opacity-0 z-10"
            >
              <div className="w-full h-dvh px-[36px] py-[32px]">
                <div
                  className="uppercase text-white text-lg max-w-[290px] lg:max-w-max font-medium">{project?.title}</div>
                <div className="w-full flex flex-col space-y-3 mt-[38px]">
                  <ProjectStatusRow
                    withoutDivider={true}
                    fontSizeClassName="text-base"
                    title={t('projectStatusRow.purpose')}
                    status={project?.purpose}
                    isWhite={true}
                  />
                  <ProjectStatusRow fontSizeClassName="text-base" title={t('projectStatusRow.place')}
                                    status={project?.location} isWhite={true}/>
                  <ProjectStatusRow fontSizeClassName="text-base" title={t('projectStatusRow.year')}
                                    status={project?.yearOfBuild} isWhite={true}/>
                  <ProjectStatusRow fontSizeClassName="text-base" title={t('projectStatusRow.status')}
                                    status={project?.status} isWhite={true}/>
                </div>

                <Swiper
                  direction={'vertical'}
                  slidesPerView={'auto'}
                  spaceBetween={8}
                  freeMode={true}
                  scrollbar={true}
                  mousewheel={true}
                  modules={[ FreeMode, Mousewheel, Scrollbar ]}
                  className={`h-[48vh] pr-1 ${screenHeight >= MIN_MOBILE_SCREEN_HEIGHT ? 'mt-[12vh]' : 'mt-[5vh]'} text-base font-normal text-justify text-white`}
                >
                  {projectDescriptionNode}
                </Swiper>
              </div>
            </Transition>
          </div>
        </div>
      </SwiperSlide>
  )
  }

  const renderImagesSlide = () => {
    return (
      <SwiperSlide>
        <div className="h-dvh w-full">
          <div className="w-full z-10 fixed top-0 left-0 px-[40px] pt-[4px]">
            <LogoLink href="/" align="start" isWhite={true}/>
          </div>

          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicMainBullets: 3,
              dynamicBullets: true,
            }}
            modules={[ Autoplay, Pagination ]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {project?.images?.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-full h-dvh">
                    <Image
                      className="object-cover object-center h-dvh w-full"
                      src={image.src}
                      alt={`Project preview ${image.alt || image.showOrder}`}
                      quality={100}
                      priority={true}
                      width="0"
                      height="0"
                      sizes="100vw"/>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </SwiperSlide>
    )
  }

  return (
    <Swiper
      pagination={{
        clickable: true,
        verticalClass: '!top-[90vh] !right-[1.5rem]',
      }}
      modules={[ Pagination ]}
      direction="vertical"
      className="absolute top-0 left-0 w-full h-dvh z-10"
    >
      {renderDescriptionSlide()}
      {renderImagesSlide()}
    </Swiper>
  );
};

export default MobileWrapper;