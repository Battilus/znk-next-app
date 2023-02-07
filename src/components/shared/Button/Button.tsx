import React, {FC, MouseEventHandler, ReactNode} from 'react';
import ToggleSelectButton from "./ToggleSelectButton";
import LocaleSwitcher from "./LocaleSwitcher";
import LinkButton from './LinkButton';
import DropdownMenuButton from "./DropdownButton";

export type LinkButtonType = {
    className: string
    description: string
    type: "button" | "link" | "dropdown"
    href?: string
    styleType: "inverse" | "rounded" | "transparent"
    onClickEn?: boolean
    onClickHandlerKey?: string
    childrenClassName?: string
    childrenStyle?: { [key: string]: string | number }
    suggestions?: LinkButtonType[]
}

interface IButtonProps {
    children: ReactNode | string
    styleType?: "inverse" | "rounded" | "transparent"
    className?: string
    childrenClassName?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    isActive?: boolean
    activeClassName?: string
    roundedPadding?: string
    disabled?: boolean
}

type ButtonFC = FC<IButtonProps> &
    { Link: typeof LinkButton } &
    { Selector: typeof ToggleSelectButton } &
    { LocaleSwitcher: typeof LocaleSwitcher } &
    { DropdownMenu: typeof DropdownMenuButton };

export enum ButtonStyleType {
    inverse = `flex items-center justify-center outline-0
                before:content-[''] before:absolute before:top-0 before:right-0 before:bg-matterhorn before:h-full before:w-0 before:transition-all before:duration-400
                hover:before:w-full
                after:content-[''] after:absolute after:top-0 after:left-0 after:bg-matterhorn after:h-full after:w-0 after:transition-all after:duration-400
                hover:after:w-full`,
    rounded = `text-matterhorn uppercase text-xs 2xl:text-0.83v leading-4 2xl:leading-1.11v rounded-full
               bg-whiteSmoke hover:bg-matterhorn hover:text-whiteSmoke transition duration-200`,
    transparent = "flex items-center justify-center",
}

const Button: ButtonFC = ({
                              children,
                              styleType = "inverse",
                              className = "",
                              childrenClassName,
                              onClick,
                              isActive,
                              activeClassName,
                              roundedPadding,
                              disabled
                          }) => {
    return (
        <>
            <button
                className={`${styleType === "inverse" ? "relative bg-whiteSmoke" : ""} 
                            ${className ? className : "border border-matterhorn"} 
                            ${styleType === "rounded" ? roundedPadding ? roundedPadding : "pt-2.5 2xl:pt-0.69v pb-2 2xl:pb-0.56v px-8 2xl:px-[2.22vw]" : ""}
                            ${ButtonStyleType[styleType]} ${isActive && activeClassName ? activeClassName : ""}`}
                onClick={onClick}
                disabled={disabled}
            >
                <div
                    className={`${styleType === "inverse" ? "rounded-full bg-whiteSmoke w-full h-full flex items-center justify-center z-10" : ""} ${childrenClassName || ""}`}>
                    {children}
                </div>
            </button>
        </>
    );
};

Button.Link = LinkButton;
Button.Selector = ToggleSelectButton;
Button.LocaleSwitcher = LocaleSwitcher;
Button.DropdownMenu = DropdownMenuButton;

export default Button;
