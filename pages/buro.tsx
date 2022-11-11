import React, {useCallback, useState} from 'react';
import {NextPage} from "next";
import PageWrapper from "../components/PageWrapper";
import ProjectSections from "../components/layouts/ProjectSections/ProjectSections";
import ProjectPreview from "../components/layouts/ProjectSections/utilityComponents/ProjectPreview";

const previewProjects = [
    {
        _id: "philosophy",
        title: "философия",
        mainPagePreview: true,
        images: [
            {
                _id: "buro_philosophy",
                src: "/buro_philosophy.png",
                // alt: "",
                // description: "",
                // projectPreview: true,
            },
        ],
    },
    {
        _id: "command",
        title: "команда",
        mainPagePreview: true,
        images: [
            {
                _id: "buro_command",
                src: "/buro_command.png",
                // alt: "",
                // description: "",
                // projectPreview: true,
            },
        ],
    },
    {
        _id: "achievements",
        title: "достижения",
        mainPagePreview: true,
        images: [
            {
                _id: "buro_achievements",
                src: "/buro_achievements.png",
                // alt: "",
                // description: "",
                // projectPreview: true,
            },
        ],
    },
]

const Buro: NextPage = () => {

    const [hover, setHover] = useState<boolean>(false);

    const hoverHandler = useCallback((val: boolean, index: number | null) => {
        setHover(val);
    }, []);

    return (
        <PageWrapper title={"ZNK App"} description={"Buro page"}>
            <div className="flex flex-row">
                <div className="flex">
                    <ProjectSections.LogoInf/>
                </div>
                <div className="w-full h-full flex flex-row">
                    {previewProjects.map((project, index) =>
                        <ProjectPreview
                            key={project._id}
                            name={project.title}
                            imgSrc={project.images[0].src}
                            hover={hover}
                            setHover={(val) => hoverHandler(val, index)}
                            // disableBorder={previewProjects.length - 1 === index}
                        />
                    )}
                </div>
            </div>
        </PageWrapper>
    );
};

export default Buro;