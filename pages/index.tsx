import type {NextPage} from 'next'
import PageWrapper from "../components/PageWrapper";
import ProjectSections from "../components/layouts/ProjectSections/ProjectSections";
import React, {useState} from "react";
import ProjectPreview from "../components/layouts/ProjectSections/utilityComponents/ProjectPreview";
import ShowProjectSlider from "../components/layouts/ProjectSections/utilityComponents/ShowProjectSlider";
import ProjectStatusRow from "../components/layouts/ProjectSections/utilityComponents/ProjectStatusRow";

const description = {
    title: "общественное пространство «среда»",
    location: "санкт-петербург",
    yearOfBuild: "2020",
    status: "проектирование",
}

const Home: NextPage = () => {
    const [hover, setHover] = useState<boolean>(false)
    return (
        <PageWrapper title={"ZNK App"} description={"Main page"} isHomeLocation hide={hover}>
            <div className="flex flex-row">
                <ProjectSections>
                    <div className="flex">
                        <ProjectSections.LogoInf hover={hover}>
                            <>
                                <div className="w-full flex flex-col">
                                    <div className="w-full h-px bg-matterhorn mb-1.5"/>
                                    <div
                                        className="uppercase text-matterhorn leading-18p font-medium text-sm text-justify">
                                        {description?.title}
                                    </div>
                                </div>
                                <div className="w-full h-full flex flex-col justify-end items-end space-y-3">
                                    <ProjectStatusRow status={description?.location}/>
                                    <ProjectStatusRow status={description?.yearOfBuild}/>
                                    <ProjectStatusRow status={description?.status}/>
                                </div>
                            </>
                        </ProjectSections.LogoInf>
                        <ProjectSections.ByuroDescription
                            hide={hover}
                            descriptionText={
                                <>
                                    <p>Znak is an architecture office currently based IN saint-petersburg, russia</p>
                                    <p>in russian znak means «sign» and signify the interplay between artistic
                                        endeavors and technical skills, which results in architecture of outstan-ding
                                        quality and value</p>
                                </>
                            }
                        />
                    </div>
                </ProjectSections>
                <div className="w-full h-full flex flex-row">
                    <ProjectPreview href={"/project/1"} name={"Project 1"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/2"} name={"Project 2"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/3"} name={"Project 3"} hover={hover} setHover={setHover}/>
                </div>
                <ShowProjectSlider/>
            </div>

        </PageWrapper>
    )
}

export default Home
