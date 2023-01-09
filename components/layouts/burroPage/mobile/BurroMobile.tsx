import React, {FC} from 'react';
import {CertificateCardType} from "../../../../types";
import {TFunction} from "i18next";

interface IProps {
    certificates: CertificateCardType[]
    t: TFunction<"translation", undefined, "translation">
}

const BurroMobile: FC<IProps> = ({certificates, t}) => {
    return (
        <div>

        </div>
    );
};

export default BurroMobile;