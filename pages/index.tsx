import type {NextPage} from 'next'
import PageWrapper from "../components/PageWrapper";
import ProjectSections from "../components/layouts/ProjectSections/ProjectSections";
import React, {useEffect, useState} from "react";
import ProjectPreview from "../components/layouts/ProjectSections/utilityComponents/ProjectPreview";
import ShowProjectSlider from "../components/layouts/ProjectSections/utilityComponents/ShowProjectSlider";
import ProjectStatusRow from "../components/layouts/ProjectSections/utilityComponents/ProjectStatusRow";
import {ProjectDescriptionData} from "../types/Api/dataTypes";
import ProjectPreviewDescription
    from "../components/layouts/ProjectSections/utilityComponents/ProjectPreviewDescription";

const description: ProjectDescriptionData = {
    _id: 1,
    title: "общественное пространство «среда»",
    location: "санкт-петербург",
    yearOfBuild: "2020",
    status: "проектирование",
}

const Home: NextPage = () => {
    const [hover, setHover] = useState<boolean>(false);

    // useEffect(() => console.log(hover), [hover])

    return (
        <PageWrapper title={"ZNK App"} description={"Main page"} isHomeLocation hideHomeButton={hover}>
            <div className="flex flex-row">
                <div className="flex">
                    <ProjectSections.LogoInf hover={hover} widthDuration={150}>
                        <ProjectPreviewDescription description={description}/>
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
                <div className="w-full h-full flex flex-row pr-8">
                    <ProjectPreview href={"/project/1"} name={"Project 1"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/2"} name={"Project 2"} hover={hover} setHover={setHover}/>
                    <ProjectPreview href={"/project/3"} name={"Project 3"} hover={hover} setHover={setHover} disableBorder/>
                </div>
                <ShowProjectSlider/>
            </div>

        </PageWrapper>
    )
}

export default Home
