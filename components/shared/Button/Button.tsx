import React, {FC, ReactNode} from 'react';
import LinkButton from "./LinkButton";
import ToggleSelectButton from "./ToggleSelectButton";

interface IButtonProps {
    children: ReactNode | ReactNode[] | string | string[]
    styleType: "inverse" | "rounded"
    className?: string
    childrenClassName?: string
    onClick?: () => void
}

type ButtonFC = FC<IButtonProps> & { Link: typeof LinkButton } & { Selector: typeof ToggleSelectButton};

export enum ButtonStyleType {
    inverse = `flex items-center justify-center outline-0
                before:content-[''] before:absolute before:top-0 before:right-0 before:bg-matterhorn before:h-full before:w-0 before:transition-all before:duration-400
                hover:before:w-full
                after:content-[''] after:absolute after:top-0 after:left-0 after:bg-matterhorn after:h-full after:w-0 after:transition-all after:duration-400
                hover:after:w-full`,
    rounded = `pt-2.5 pb-2 px-8 text-matterhorn uppercase text-xs leading-4 rounded-full
               bg-whiteSmoke hover:bg-matterhorn hover:text-whiteSmoke transition duration-200`
}

const Button: ButtonFC = ({children, styleType="inverse", className="", childrenClassName, onClick}) => {
    return (
        <>
            <button
                className={`${styleType === "inverse" ? "relative bg-whiteSmoke" : ""} ${className ? className : "border border-matterhorn"} ${ButtonStyleType[styleType]}`}
                onClick={onClick}
            >
                <div className={`${styleType === "inverse" ? "rounded-full bg-whiteSmoke w-full h-full flex items-center justify-center z-10" : ""} ${childrenClassName}`}>
                    {children}
                </div>
            </button>
        </>
    );
};

Button.Link = LinkButton;
Button.Selector = ToggleSelectButton;

export default Button;
