import React, {FC} from 'react';
import Image from "next/image";
import A from "../shared/Link/A";
import {useTranslation} from "next-i18next";

interface IProps {
    logoImg: string
    logoWidth: number
    logoHeight: number
    title: string
    certificateHref: string
}
const CertificateCard: FC<IProps> = ({logoImg, logoWidth, logoHeight, title, certificateHref}) => {
    const {t} = useTranslation();
    return (
        <div className="flex items-center gap-3.5">
            <Image src={logoImg} width={logoWidth} height={logoHeight}/>
            <div className="flex flex-col items-start text-sm leading-18p gap-1.5">
                <div className="uppercase font-medium">{title}</div>
                <A href={certificateHref} className="capitalize">{t("show")}</A>
            </div>
        </div>
    );
};

export default CertificateCard;