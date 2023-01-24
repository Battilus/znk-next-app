import React, {FC} from 'react';
import {TFunction} from "i18next";
import CertificateCard from "../../../utility/CertificateCard";
import BurroPreview from "../../../shared/SliderPreview/BurroPreview";
import {CertificateCardType} from "../../../../types";

interface IProps {
    certificates: CertificateCardType[],
    hover: boolean,
    setHover: (v: boolean) => void,
    t: TFunction<"translation", undefined, "translation">,
}

const AchievementsSection: FC<IProps> = ({certificates, hover, setHover, t}) => {
    return (
        <BurroPreview
            title={t("pages.burro.achievements.title")}
            bgImage={"bg-burro_achievements_hover"}
            hover={hover}
            setHover={setHover}
            hoverClassName={"brightness-75"}
        >
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-full max-w-[38.56rem] 2xl:max-w-42.84v h-full max-h-[26rem] 2xl:max-h-28.89v grid grid-cols-2 gap-8 2xl:gap-2.22v">
                    {certificates.map(certificate =>
                        <CertificateCard
                            {...certificate}
                            key={certificate.id}
                        />)}
                </div>
            </div>
        </BurroPreview>
    );
};

export default AchievementsSection;