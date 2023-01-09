import React, {FC} from 'react';
import ProjectSections from "../../ProjectSections/ProjectSections";
import PhilosophySection from "./PhilosophySection";
import CommandSection from "./CommandSection";
import AchievementsSection from "./AchievementsSection";
import {TFunction} from "i18next";
import {CertificateCardType} from "../../../../types";

interface IProps {
    certificates: CertificateCardType[]
    t: TFunction<"translation", undefined, "translation">
    hover: boolean
    setHover: (val: boolean) => void
}

const BurroDesktop: FC<IProps> = ({certificates, hover, setHover, t}) => {
    return (
        <div className="flex">
            <div className="flex">
                <ProjectSections.LogoInf/>
            </div>
            <div className="w-full h-full flex">
                <PhilosophySection
                    hover={hover}
                    setHover={setHover}
                    t={t}
                />
                <CommandSection
                    hover={hover}
                    setHover={setHover}
                    t={t}
                />
                <AchievementsSection
                    certificates={certificates}
                    hover={hover}
                    setHover={setHover}
                    t={t}
                />
            </div>
        </div>
    );
};

export default BurroDesktop;