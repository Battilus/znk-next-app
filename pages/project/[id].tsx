import React from 'react';
import {NextPage} from "next";
import PageWrapper from "../../components/PageWrapper";
import ProjectSections from "../../components/layouts/ProjectSections/ProjectSections";
import {ProjectDescriptionType} from "../../components/layouts/ProjectSections/ProjectDescription";
import {projectsList} from "../../app/mock/fakeData";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";

type IProjectsPath = {
    params: {
        id: string | number
    }
}[];

interface IProps {
    project: ProjectDescriptionType
}

const Project: NextPage<IProps> = ({project}) => {
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
                        modules={[Pagination]}
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
                    </Swiper>
                </div>
            </div>
        </PageWrapper>
    );
};

export const getStaticProps = async ({params}: any) => {
    return {
        props: {
            project: projectsList.find(project => project._id === params.id)
        },
        revalidate: 10,
    }
}

export const getStaticPaths = async () => {
    const paths: IProjectsPath = projectsList.map(project => ({params: {id: project._id}}))

    return {paths, fallback: "blocking"}
}

export default Project;