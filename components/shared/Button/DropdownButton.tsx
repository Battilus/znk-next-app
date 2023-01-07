import React, {FC, MouseEventHandler, useEffect, useRef, useState} from 'react';
import ArrowDown from "../../../public/svg/arrow-down.svg";
import Button, {LinkButtonType} from "./Button";
import {useTranslation} from "next-i18next";
import {Transition} from "@headlessui/react";

interface IProps {
    className?: string
    suggestions?: LinkButtonType[]
    handlers?: { [key: string]: (value: any) => void }
    dropdownHandler?: (val?: boolean) => void
}

const DropdownMenuButton: FC<IProps> = (props) => {
    const {className, suggestions, handlers, dropdownHandler} = props;

    const [show, setShow] = useState<boolean>(false);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const {t} = useTranslation();

    const showHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        setShow(!show);
    }

    useEffect(() => {
        if (dropdownHandler) {
            dropdownHandler(show);
        }
    }, [show, dropdownHandler])

    return (
        <div className={className} ref={dropdownRef}>
            {suggestions?.map((buttonItem) =>
                <div key={buttonItem.description} className={className}>
                    {buttonItem.type === "dropdown" ?
                        <Button
                            styleType={buttonItem.styleType}
                            className={buttonItem.className}
                            childrenClassName={buttonItem.childrenClassName}
                            onClick={showHandler}
                        >
                            <div className="flex items-center justify-center gap-2.5">
                                {t(`${buttonItem.description}`)}
                                <ArrowDown
                                    className={`w-3.2 h-2 -mt-1 transition-transform duration-500 ${show ? "rotate-180" : ""}`}/>
                            </div>
                        </Button> :
                        buttonItem.type === "link" ?
                            <Button.Link
                                key={buttonItem.description}
                                styleType={buttonItem.styleType}
                                className={buttonItem.className}
                                href={buttonItem.href}
                                childrenClassName={buttonItem.childrenClassName}
                                childrenStyle={buttonItem.childrenStyle}
                            >
                                {t(`${buttonItem.description}`)}
                            </Button.Link> :
                            buttonItem.type === "button" &&
                            <Button
                                styleType={buttonItem.styleType}
                                className={buttonItem.className}
                                childrenClassName={buttonItem.childrenClassName}
                                onClick={
                                    buttonItem.onClickEn &&
                                    buttonItem.onClickHandlerKey &&
                                    handlers &&
                                    handlers[buttonItem.onClickHandlerKey] ?
                                        handlers[buttonItem.onClickHandlerKey!] : undefined
                                }
                            >
                                {t(`${buttonItem.description}`)}
                            </Button>}
                    {buttonItem.suggestions &&
                        <Transition
                            show={show}
                            enter="transition-opacity duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <DropdownMenuButton
                                className={className}
                                suggestions={buttonItem.suggestions}
                                handlers={handlers}
                            />
                        </Transition>
                    }
                </div>
            )}
        </div>
    );
};

export default DropdownMenuButton;