import React, {FC} from 'react';
import LogoIcon from "../../../public/svg/logo-description.svg";
import Link from "next/link";

interface IProps {
    align: "start" | "end" | "center",
    href: string,
    className?: string,
    ref?: any
}

const ALIGN_STYLES = {
    start: "items-start mt-4",
    end: "",
    center: "items-center justify-center mt-4",
}

const LogoLink: FC<IProps> = ({align, href, className}) => {
    return (
        <Link href={href}>
            <div
                className={`w-full mb-8 flex flex-row transition-all duration-200 cursor-pointer ${ALIGN_STYLES[align]} ${className}`}>
                <LogoIcon/>
            </div>
        </Link>
    );
};

export default LogoLink;