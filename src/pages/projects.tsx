import React, {useCallback, useEffect, useState} from 'react';
import {GetServerSideProps, NextPage} from "next";
import PageWrapper from "../components/PageWrapper";
import ProjectSections from "../components/layouts/ProjectSections/ProjectSections";
import {BffFilterParam, ProjectDescriptionData} from "../types/Api/dataTypes";
import ProjectPreview from "../components/shared/SliderPreview/ProjectPreview";
import {mockBffAssignments, mockBffServices, mockBffYearsOfBuilds, projectsList} from "../app/mock/fakeData";
import {Swiper, SwiperSlide} from "swiper/react";
import {chunkArray} from "../features/utils";
import {Pagination} from "swiper";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {PageMeta} from "../types";
import {useAppDispatch, useAppSelector} from "../store/utils";
import {setFilterParam} from "../store/reducers/projectsSlice";
import {getProjectsFilterParam} from "../store/selectors/projects";
import {wrapper} from "../store";

interface IProps {
    meta: PageMeta
    projects: ProjectDescriptionData[][]
    bffServices: BffFilterParam[]
    bffAssignments: BffFilterParam[]
    bffYearsOfBuilds: BffFilterParam[]
}

const Projects: NextPage<IProps> = ({meta, projects, bffServices, bffAssignments, bffYearsOfBuilds}) => {
    const [hover, setHover] = useState<boolean>(false);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
    const [selectedProjectsChunkIndex, setSelectedProjectsChunkIndex] = useState<number | null>(null);

    const selectedFilter = useAppSelector(getProjectsFilterParam);

    const dispatch = useAppDispatch();

    const setSelectedFilter = (param: string) => {
        dispatch(setFilterParam(param));
    }

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
        <PageWrapper meta={meta}>
            <div className="flex flex-row">
                <div className="flex">
                    <ProjectSections.ProjectsFilter
                        hover={hover}
                        description={selectedProjectIndex !== null && selectedProjectsChunkIndex !== null ? projects[selectedProjectsChunkIndex][selectedProjectIndex] : undefined}
                        bffParams={{
                            bffServices,
                            bffAssignments,
                            bffYearsOfBuilds
                        }}
                        selectedFilter={selectedFilter}
                        setSelectedFilter={setSelectedFilter}
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
                                    {projectsChunk.map((project, index) => {
                                        const imagePreview = project.images.find(image => image?.projectPreview && image.projectPreview);
                                        return <ProjectPreview
                                            key={project._id}
                                            href={`/project/${project._id}`}
                                            name={project.title}
                                            imgSrc={imagePreview?.src || ""}
                                            hover={hover}
                                            setHover={(val) => hoverHandler(val, index, chunkIndex)}
                                        />})}
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
        </PageWrapper>
    );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
    () => async ({locale})  => {

    return {
        props: {
            meta: {title: "ZNK Project Burro", description:"Projects page"},
            projects: chunkArray(projectsList, 6),
            bffServices: mockBffServices,
            bffAssignments: mockBffAssignments,
            bffYearsOfBuilds: mockBffYearsOfBuilds,
            ...(await serverSideTranslations(locale!, ["common"])),
        }
    }
})

export default Projects;