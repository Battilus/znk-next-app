import React, {FC} from 'react';
import ProjectSections from "../ProjectSections/ProjectSections";
import ProjectPreviewMobileSlider from "./ProjectPreviewMobileSlider";
import {ProjectDescriptionData} from "../../../types/Api/dataTypes";
import {TFunction} from "i18next";

interface IProps {
    previewProjects: ProjectDescriptionData[]
    t: TFunction<"translation", undefined, "translation">
    alignLogo?: "start" | "center"
    isPhone?: boolean
}

const MobileWrapper: FC<IProps> = ({previewProjects, t, alignLogo, isPhone}) => {
    return (
        <div className="flex">
            <div className="flex">
                <ProjectSections.LogoInf
                    hover={false}
                    staticWidth
                    mobile
                    alignLogo={alignLogo}
                    onLeaveChildren={
                        <ProjectSections.BurroDescriptionMobile
                            descriptionText={
                                <>
                                    <p>
                                        {isPhone ?
                                            t("pages.main.burroDescription.phone.text_p1") :
                                            t("pages.main.burroDescription.desktop.text_p1")}
                                    </p>
                                    <p>
                                        {isPhone ?
                                            t("pages.main.burroDescription.phone.text_p2") :
                                            t("pages.main.burroDescription.desktop.text_p2")}
                                    </p>
                                </>
                            }
                        />
                    }
                />
            </div>
            <ProjectPreviewMobileSlider previewProjects={[previewProjects[0]]}/>
        </div>
    );
};

export default MobileWrapper;