import React, {FC} from 'react';
import {ProjectDescriptionData} from "../../../types/Api/dataTypes";
import MobileProjectPreview from "../../shared/SliderPreview/MobileProjectPreview";

interface IProps {
    previewProjects: ProjectDescriptionData[]
}

const ProjectPreviewMobileSlider: FC<IProps> = ({previewProjects}) => {
    return (
        <div className="w-full h-full">
            {previewProjects.map((project) =>
                <MobileProjectPreview
                    key={project._id}
                    href={`/project/${project._id}`}
                    name={project.title}
                    imgSrc={project.images[0].src}
                />
            )}
        </div>
    );
};

export default ProjectPreviewMobileSlider;