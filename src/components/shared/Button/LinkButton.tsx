import React, {FC, ReactNode} from "react";
import A from "../Link/A";
import {ButtonStyleType} from "./Button";

interface ILinkButtonProps {
    children: ReactNode | string
    styleType: "inverse" | "rounded" | "transparent"
    className?: string
    childrenClassName?: string
    href?: string
    childrenStyle?: {[key: string]: string | number}
}

const LinkButton: FC<ILinkButtonProps> = ({children, styleType="inverse", className="", childrenClassName, href, childrenStyle}) => {
    return (
        <>
            <A
                className={`${styleType === "inverse" ? "relative bg-whiteSmoke" : ""} ${className ? className : "border"} ${ButtonStyleType[styleType]}`}
                href={href || ""}
            >
                <div style={childrenStyle} className={`${styleType === "inverse" ? "rounded-full bg-whiteSmoke w-full h-full flex items-center justify-center z-10" : ""} ${childrenClassName}`}>
                    {children}
                </div>
            </A>
        </>
    );
};

export default LinkButton;