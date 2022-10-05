import React, {FC, ReactNode} from "react";
import A from "../Link/A";
import {ButtonStyleType} from "./Button";

interface ILinkButtonProps {
    children: ReactNode | ReactNode[] | string | string[]
    styleType: "inverse" | "rounded"
    className?: string
    childrenClassName?: string
    href?: string
}

const LinkButton: FC<ILinkButtonProps> = ({children, styleType="inverse", className="", childrenClassName, href}) => {
    return (
        <>
            <A
                className={`${styleType === "inverse" ? "relative bg-whiteSmoke" : ""} ${className ? className : "border"} ${ButtonStyleType[styleType]}`}
                href={href || ""}
            >
                <div className={`${styleType === "inverse" ? "rounded-full bg-whiteSmoke w-full h-full flex items-center justify-center z-10" : ""} ${childrenClassName}`}>
                    {children}
                </div>
            </A>
        </>
    );
};

export default LinkButton;