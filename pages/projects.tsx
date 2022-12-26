import React, {useCallback, useEffect, useState} from 'react';
import {GetStaticProps, NextPage} from "next";
import PageWrapper from "../components/PageWrapper";
import ProjectSections from "../components/layouts/ProjectSections/ProjectSections";
import {ProjectDescriptionData} from "../types/Api/dataTypes";
import ProjectPreview from "../components/shared/SliderPreview/ProjectPreview";
import {projectsList} from "../app/mock/fakeData";
import {Swiper, SwiperSlide} from "swiper/react";
import {chunkArray} from "../features/utils";
import {Pagination} from "swiper";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

interface IProps {
    projects: ProjectDescriptionData[][]
}

const Projects: NextPage<IProps> = ({projects}) => {
    const [hover, setHover] = useState<boolean>(false);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
    const [selectedProjectsChunkIndex, setSelectedProjectsChunkIndex] = useState<number | null>(null);

    const hoverHandler = useCallback((val: boolean, index: number | null, chunkIndex: number | null) => {
        setHover(val);
        setSelectedProjectIndex(index);
        setSelectedProjectsChunkIndex(chunkIndex);
    }, []);

    useEffect(() => {
        if (!hover) {
            setSelectedProjectIndex(null);
        }
    }, [hover])

    return (
        <PageWrapper title={"ZNK App"} description={"Projects page"}>
            <div className="flex flex-row">
                <div className="flex">
                    <ProjectSections.ProjectsFilter
                        hover={hover}
                        description={selectedProjectIndex !== null && selectedProjectsChunkIndex !== null ? projects[selectedProjectsChunkIndex][selectedProjectIndex] : undefined}
                    />
                </div>
                <div className="w-full h-full overflow-hidden">
                    <Swiper
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            dynamicMainBullets: 3,
                            dynamicBullets: true
                        }}
                        modules={[Pagination]}
                    >
                        {projects.map((projectsChunk, chunkIndex) =>
                            <SwiperSlide key={chunkIndex}>
                                <div className="w-full h-screen flex flex-row overflow-x-auto">
                                    {projectsChunk.map((project, index) =>
                                        <ProjectPreview
                                            key={project._id}
                                            href={`/project/${project._id}`}
                                            name={project.title}
                                            imgSrc={project.images[0].src}
                                            hover={hover}
                                            setHover={(val) => hoverHandler(val, index, chunkIndex)}
                                        />)}
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
        </PageWrapper>
    );
};

export const getStaticProps: GetStaticProps = async ({locale})  => {

    return {
        props: {
            projects: chunkArray(projectsList, 6),
            ...(await serverSideTranslations(locale || "", ["common"])),
        },
        revalidate: 10,
    }
}

export default Projects;