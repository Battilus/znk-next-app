import React, {useRef} from 'react';
import {GetStaticProps, NextPage} from "next";
import PageWrapper from "../../components/PageWrapper";
import ProjectSections from "../../components/layouts/ProjectSections/ProjectSections";
import {ProjectDescriptionType} from "../../components/layouts/ProjectSections/ProjectDescription";
import {projectsList} from "../../app/mock/fakeData";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

type IProjectsPath = {
    params: {
        id: string | number
    }
}[];

interface IProps {
    project: ProjectDescriptionType
}

const Project: NextPage<IProps> = ({project}) => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <PageWrapper title={"ZNK Project"} description={"Project description"}>
            <div className="w-full h-full flex">
                <ProjectSections.ProjectDescription
                    description={project}
                />
                <div className="w-full h-full overflow-hidden">
                    <Swiper
                        pagination={{
                            clickable: true,
                            dynamicMainBullets: 3,
                            horizontalClass: "top-5",
                            dynamicBullets: true
                        }}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        onSwiper={(swiper) => {
                            setTimeout(() => {

                                if (swiper?.params?.navigation && typeof swiper.params.navigation === "object") {
                                    if ("prevEl" in swiper.params.navigation) {
                                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                                    }
                                    if ("nextEl" in swiper.params.navigation) {
                                        swiper.params.navigation.nextEl = navigationNextRef.current;
                                    }
                                }

                                // Re-init navigation
                                swiper?.navigation?.destroy();
                                swiper?.navigation?.init();
                                swiper?.navigation?.update();
                            })
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        loop
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                    >
                        {project.images.map(image =>
                            <SwiperSlide key={image._id}>
                                <div className="w-full h-screen">
                                    <Image
                                        className="object-cover object-center"
                                        src={image.src}
                                        alt={`Project preview ${image._id}`}
                                        layout={"fill"}
                                        quality={100}
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

export const getStaticProps: GetStaticProps = async ({params, locale}) => {
    return {
        props: {
            project: projectsList.find(project => project._id === params?.id),
            ...(await serverSideTranslations(locale!, ["common"])),
        },
        revalidate: 10,
    }
}

export const getStaticPaths = async () => {
    const paths: IProjectsPath = projectsList.map(project => ({params: {id: project._id}}))

    return {paths, fallback: "blocking"}
}

export default Project;