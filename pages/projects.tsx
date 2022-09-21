import React, {useState} from 'react';
import {NextPage} from "next";
import PageWrapper from "../components/PageWrapper";
import ProjectSections from "../components/layouts/ProjectSections/ProjectSections";
import {ProjectDescriptionData} from "../types/Api/dataTypes";
import ProjectPreview from "../components/layouts/ProjectSections/utilityComponents/ProjectPreview";

const description: ProjectDescriptionData = {
    _id: 1,
    title: "общественное пространство «среда»",
    location: "санкт-петербург",
    yearOfBuild: "2020",
    status: "проектирование",
}

const Projects: NextPage = () => {
    const [hover, setHover] = useState<boolean>(false);
    return (
        <PageWrapper title={"ZNK App"} description={"Projects page"}>
            <div className="flex flex-row">
                <div className="flex">
                    <ProjectSections.ProjectsFilter
                        hover={hover}
                        description={description}
                    />
                </div>
                <div className="w-full h-full flex flex-row overflow-x-auto">
                    <ProjectPreview href={"/project/1"} name={"Project 1"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/2"} name={"Project 2"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/3"} name={"Project 3"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/4"} name={"Project 4"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/5"} name={"Project 5"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/6"} name={"Project 6"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/7"} name={"Project 7"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/8"} name={"Project 8"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/9"} name={"Project 9"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/10"} name={"Project 10"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/11"} name={"Project 11"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/12"} name={"Project 12"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/13"} name={"Project 13"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/14"} name={"Project 14"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/15"} name={"Project 15"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/16"} name={"Project 16"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/17"} name={"Project 17"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/18"} name={"Project 18"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/19"} name={"Project 19"} hover={hover} setHover={setHover}/>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Projects;