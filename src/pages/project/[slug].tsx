import React, { useMemo, useRef } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import PageWrapper from '../../components/PageWrapper';
import ProjectSections from '../../components/layouts/ProjectSections/ProjectSections';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Keyboard } from 'swiper';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PageMeta } from '../../types';
import { ApiLocale, Locale } from '../../api/types/locales';
import { Project } from '../../api/entities/project/types/client';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { ProjectQueryKey } from '../../api/constants';
import {
  getOneProjectBySlug,
  useGetOneProjectBySlugQuery,
} from '../../api/entities/project/queries';
import { useRouter } from 'next/router';
import ThereIsNoProjects from '../../components/shared/Logo/ThereIsNoProjects';
import { PAGE_TITLE_META } from '../../assets/constants';

type Props = {
  meta: PageMeta;
  urlSlug: string;
}

const Project: NextPage<Props> = ({ meta, urlSlug }) => {
  const { locale } = useRouter();

  const projectQuery = useGetOneProjectBySlugQuery(urlSlug, { localization: locale?.toUpperCase() as ApiLocale });

  const project = useMemo<Partial<Project> | null>(() => {
    return projectQuery.isSuccess ? projectQuery.data : null;
  }, [ projectQuery.isSuccess, projectQuery.data ]);

  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  return (
    <PageWrapper meta={meta} isLoading={projectQuery.isLoading}>
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
                      layout="fill"
                      quality={100}
                      priority={true}
                    />
                  </div>
                </SwiperSlide>)
              || <ThereIsNoProjects onlyLogo={true}/>}

            <div ref={navigationPrevRef} className="z-10 absolute top-0 left-0 h-full w-96 2xl:w-26.67v"/>
            <div ref={navigationNextRef} className="z-10 absolute top-0 right-0 h-full w-96 2xl:w-26.67v"/>
          </Swiper>
        </div>
      </div>
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ params, locale }) => {
  const localization = locale?.toUpperCase() as ApiLocale;

  const urlSlug = `${params?.slug}`;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([ ProjectQueryKey.One, urlSlug, { localization } ], getOneProjectBySlug);

  return {
    props: {
      // @ts-ignore
      meta: { title: PAGE_TITLE_META[locale], description: locale === Locale.RU ? 'Описание проекта' : 'Project description' },
      ...(await serverSideTranslations(localization, [ 'common' ])),
      dehydratedState: dehydrate(queryClient),
      urlSlug,
    },
  };
};

export default Project;