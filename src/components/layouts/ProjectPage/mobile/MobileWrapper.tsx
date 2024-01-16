import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { Project } from '../../../../api/entities/project/types/client';
import { TFunction } from 'i18next';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import ProjectStatusRow from '../../ProjectSections/utilityComponents/ProjectStatusRow';
import { useWindowSize } from '../../../../features/hooks/useWindowSize';
import { MIN_MOBILE_SCREEN_HEIGHT } from '../../../../assets/constants';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import LogoLink from '../../../shared/Logo/LogoLink';

type Props = {
  project: Partial<Project> | null;
  t: TFunction<'translation', 'string'>;
}

const MobileWrapper: FC<Props> = ({ project, t }) => {
  const [ isLoadedWithDelay, setIsLoadedWithDelay ] = useState<boolean>(false);
  const [ isUsingScroll, setIsUsingScroll ] = useState<boolean>(false);

  const { height: screenHeight = 0 } = useWindowSize();

  const descriptionAreaRef = useRef<HTMLDivElement>(null);

  const splitIndents = (text: string) => {
    return text.split('\n').map((str, index) => <p key={index}>{str}</p>);
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

  const checkIfUsingScroll = (): boolean => {
    if (descriptionAreaRef.current) {
      return descriptionAreaRef.current.scrollHeight > descriptionAreaRef.current.clientHeight;
    }

    return false;
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoadedWithDelay(true);
    }, 800)
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsUsingScroll(checkIfUsingScroll());
    }, 800)
  }, [project, descriptionAreaRef])

  const renderProjectPreviewImage = () => {
    const preview = project?.images?.find(img => img.projectPreview )

    if (!preview) {
      return null;
    }

    return (
      <Image
        className="object-cover brightness-[80%] h-dvh w-full"
        src={preview.src}
        alt="test"
        quality={100}
        priority={true}
        width="0"
        height="0"
        sizes="100vw"/>
    )
  }

  const renderDescriptionScreen = () => {
    if (!isLoadedWithDelay) {
      return renderProjectPreviewImage();
    }

    return (
      <Transition
        appear={true}
        show={true}
        enter="transform transition duration-1000"
        enterFrom="blur-none w-full h-dvh brightness-100"
        enterTo="blur w-full h-dvh brightness-[60%]"
        leave="transform transition duration-1000"
        leaveFrom="blur w-full h-dvh brightness-[60%]"
        leaveTo="blur-none w-full h-dvh brightness-100"
      >
        {renderProjectPreviewImage()}
      </Transition>
    )
  }

  const renderDescriptionSlide = () => {
    return (
      <SwiperSlide>
        <div className="h-dvh w-full">
          {renderDescriptionScreen()}

          <div className="fixed top-0 left-0 w-full h-dvh px-[36px] py-[32px]">
            <div className="uppercase text-white text-lg max-w-[290px] lg:max-w-max font-medium">{project?.title}</div>

            <Transition
              show={isLoadedWithDelay}
              enter="transform transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100 flex flex-col w-full text-white"
            >
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

              <div
                ref={descriptionAreaRef}
                className={`${isUsingScroll && 'swiper-no-swiping'} h-[52vh] pr-1 overflow-y-scroll ${screenHeight >= MIN_MOBILE_SCREEN_HEIGHT ? 'mt-[16vh]' : 'mt-[5vh]'} text-base font-normal text-justify flex flex-col space-y-1`}
              >
                {projectDescriptionNode}
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
        verticalClass: '!top-[96vh] !right-[1.5rem]',
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