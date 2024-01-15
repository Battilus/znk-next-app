import React, { FC, useRef } from 'react';
import ProjectSections from '../../ProjectSections/ProjectSections';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper';
import Image from 'next/image';
import ThereIsNoProjects from '../../../shared/Logo/ThereIsNoProjects';
import { Project } from '../../../../api/entities/project/types/client';

type Props = {
  project: Partial<Project> | null;
}

const DesktopWrapper: FC<Props> = ({ project }) => {
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full h-full flex">
      <ProjectSections.ProjectDescription
        project={project}
      />
      <div className="w-full h-full overflow-hidden">
        <Swiper
          pagination={{
            clickable: true,
            dynamicMainBullets: 3,
            horizontalClass: 'top-5',
            dynamicBullets: true,
          }}
          keyboard={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              const swiperNav = swiper?.params?.navigation;

              if (swiperNav && typeof swiperNav === 'object') {
                if ('prevEl' in swiperNav) {
                  swiperNav.prevEl = navigationPrevRef.current;
                }
                if ('nextEl' in swiperNav) {
                  swiperNav.nextEl = navigationNextRef.current;
                }
              }

              // Re-init navigation
              swiper?.navigation?.destroy();
              swiper?.navigation?.init();
              swiper?.navigation?.update();
            });
          }}
          modules={[ Autoplay, Pagination, Navigation, Keyboard ]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >

          {project?.images?.length &&
            project.images.map(image =>
              <SwiperSlide key={image.showOrder}>
                <div className="w-full h-screen">
                  <Image
                    className="object-cover object-center"
                    src={image.src}
                    alt={`Project preview ${image.alt || image.showOrder}`}
                    quality={100}
                    priority={true}
                    fill={true}
                    sizes="100vw"/>
                </div>
              </SwiperSlide>)
            || <ThereIsNoProjects onlyLogo={true}/>}

          <div ref={navigationPrevRef} className="z-10 absolute top-0 left-0 h-full w-96 2xl:w-26.67v"/>
          <div ref={navigationNextRef} className="z-10 absolute top-0 right-0 h-full w-96 2xl:w-26.67v"/>
        </Swiper>
      </div>
    </div>
  );
};

export default DesktopWrapper;