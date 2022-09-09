import React, { FC } from 'react';
import LogoIcon from "../../../public/svg/logo-description.svg";

interface IProps {
    align: "start" | "end" | "center"
}

const ALIGN_STYLES = {
    start: "items-start mb-8 w-full",
    end: "",
    center: "items-center justify-center mt-4 w-32.1 h-14.8",
}

const Logo: FC<IProps> = ({align}) => {
    return (
        <div className={`mb-16 flex flex-row ${ALIGN_STYLES[align]}`}>
            <LogoIcon/>
        </div>
    );
};

export default Logo;