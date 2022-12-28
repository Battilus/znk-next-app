import React, { FC } from 'react';
import LogoIcon from "../../../public/svg/logo-description.svg";

interface IProps {
    align: "start" | "end" | "center"
}

const ALIGN_STYLES = {
    start: "items-start mt-4 2xl:mt-1.11v",
    end: "",
    center: "items-center justify-center mt-4 2xl:mt-1.11v",
}

const Logo: FC<IProps> = ({align}) => {
    return (
        <div className={`w-full mb-8 2xl:mb-2.22v flex flex-row transition-all duration-200 ${ALIGN_STYLES[align]}`}>
            <LogoIcon className="w-[131px] 2xl:w-[9.1vw] h-[61px] 2xl:h-[4.24vw]"/>
        </div>
    );
};

export default Logo;