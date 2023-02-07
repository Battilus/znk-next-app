import React, {FC} from 'react';
import {ProjectDescriptionData} from "../../../types/Api/dataTypes";
import ProjectPreview from "../../shared/SliderPreview/ProjectPreview";

interface IProps {
    previewProjects: ProjectDescriptionData[]
    hover?: boolean
    hoverHandler: (val: boolean, index: number | null) => void
}

const MainProjectPreview: FC<IProps> = ({previewProjects, hover, hoverHandler}) => {
    return (
        <div className="w-full h-full flex mr-8 2xl:mr-2.22v">
            {previewProjects.map((project, index) => {
                const imagePreview = project.images.find(image => image?.projectPreview && image.projectPreview);
                return <ProjectPreview
                    key={project._id}
                    href={`/project/${project._id}`}
                    name={project.title}
                    imgSrc={imagePreview?.src || ""}
                    hover={hover}
                    setHover={(val) => hoverHandler(val, index)}
                    disableBorder={previewProjects.length - 1 === index}
                />}
            )}
        </div>
    );
};

export default MainProjectPreview;