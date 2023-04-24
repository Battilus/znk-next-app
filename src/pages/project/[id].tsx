import React, { useRef } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import PageWrapper from '../../components/PageWrapper';
import ProjectSections from '../../components/layouts/ProjectSections/ProjectSections';
import { ProjectDescriptionType } from '../../components/layouts/ProjectSections/ProjectDescription';
import { projectsList } from '../../app/mock/fakeData';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PageMeta } from '../../types';
import { Locale } from '../../types/locales';

interface IProps {
  meta: PageMeta;
  project: ProjectDescriptionType;
}

const Project: NextPage<IProps> = ({ meta, project }) => {
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  return (
    <PageWrapper meta={meta}>
      <div className="w-full h-full flex">
        <ProjectSections.ProjectDescription
          description={project}
        />
        <div className="w-full h-full overflow-hidden">
          <Swiper
            pagination={{
              clickable: true,
              dynamicMainBullets: 3,
              horizontalClass: 'top-5',
              dynamicBullets: true,
            }}
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
            modules={[ Autoplay, Pagination, Navigation ]}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {project.images.map(image =>
              <SwiperSlide key={image.showOrder}>
                <div className="w-full h-screen">
                  <Image
                    className="object-cover object-center"
                    src={image.src}
                    alt={`Project preview ${image.alt || image.showOrder}`}
                    layout="fill"
                    quality={100}
                    priority={true}
                  />
                </div>
              </SwiperSlide>)}
            <div ref={navigationPrevRef} className="z-10 absolute top-0 left-0 h-full w-96 2xl:w-26.67v"/>
            <div ref={navigationNextRef} className="z-10 absolute top-0 right-0 h-full w-96 2xl:w-26.67v"/>
          </Swiper>
        </div>
      </div>
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params, locale }) => {

  const foundProject = projectsList.find(project => project.id === params?.id);
  const project = foundProject ?
    {
      ...foundProject,
      images: [ ...foundProject.images ]
        .sort((a, b) => a.showOrder - b.showOrder),
    } : {};

  return {
    props: {
      meta: { title: 'ZNK Project Burro', description: 'Project description' },
      project,
      ...(await serverSideTranslations(locale || Locale.RU, [ 'common' ])),
    },
  };
};

export default Project;