import React, {FC} from 'react';
import {Transition} from "@headlessui/react";
import {Button} from "../Button";

export type LinkButton = {
    className: string
    description: string
    type: string
    href?: string
    styleType: "inverse" | "rounded"
}

interface ISideButtonsProps {
    isOpen: boolean
    showContacts: (show: boolean) => void
    linkButtons: LinkButton[]
}

const SideButtons: FC<ISideButtonsProps> = ({isOpen, showContacts, linkButtons}) => {
    return (
        <Transition
            show={isOpen}
            enter="transform transition-all duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transform transition-all duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="mt-8 z-30">
                {linkButtons.length ? <div className="w-full h-px bg-matterhorn opacity-40"/> : null}
                {linkButtons.map(button =>
                    button.type === "button" ?
                        <>
                            <Button
                                key={button.description}
                                styleType={button.styleType}
                                className={button.className}
                                onClick={button.description === "Контакты" ? () => showContacts(true) : () => {}}
                            >
                                {button.description}
                            </Button>
                            <div className="w-full h-px bg-matterhorn opacity-40"/>
                        </>
                        : button.type === "link" ?
                            <>
                                <Button.Link
                                    styleType={button.styleType}
                                    className={button.className}
                                    href={button.href}
                                >
                                    {button.description}
                                </Button.Link>
                                <div className="w-full h-px bg-matterhorn opacity-40"/>
                            </>
                            : null)}
            </div>
            <div className="flex flex-col justify-end h-full z-30">
                <span className="text-center uppercase text-sm font-medium">RU/EN</span>
            </div>
        </Transition>
    );
};

export default SideButtons;