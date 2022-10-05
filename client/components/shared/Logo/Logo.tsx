import React, { FC } from 'react';
import LogoIcon from "../../../public/svg/logo-description.svg";

interface IProps {
    align: "start" | "end" | "center"
}

const ALIGN_STYLES = {
    start: "items-start mt-4",
    end: "",
    center: "items-center justify-center mt-4",
}

const Logo: FC<IProps> = ({align}) => {
    return (
        <div className={`w-full mb-8 flex flex-row transition-all duration-200 ${ALIGN_STYLES[align]}`}>
            <LogoIcon/>
        </div>
    );
};

export default Logo;

//items-start justify-start
//w-32.1 h-14.8