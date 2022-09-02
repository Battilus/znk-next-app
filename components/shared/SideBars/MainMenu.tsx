import React, {FC, useState} from 'react';
import BurgerIcon from '../../../public/svg/burger-menu.svg';
import CrossIcon from '../../../public/svg/cross-menu.svg';
import Image from "next/image";
import {Transition} from '@headlessui/react';
import {CONTACTS, SIDEBAR_LINKS} from "../../../assets/staticParams";
import {Button} from "../Button";
import Contacts from "./Contacts";

const MainMenu: FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isContactsOpen, setIsContactsOpen] = useState<boolean>(false);

    const closeMenu = () => {
        setIsOpen(false);
        setIsContactsOpen(false);
    }

    return (
        <>
            <div className="fixed left-0 w-8 h-8 z-50">
                <Button
                    styleType={"inverse"}
                    className={`w-full h-full ${isOpen ? "border-r border-b" : "border-b border-r"} border-matterhorn border-opacity-40`}
                    onClick={() => {
                        setIsOpen(!isOpen);
                        setIsContactsOpen(false);
                    }}
                >
                    {isOpen
                        ? <Image src={CrossIcon} alt="cross logo" width={10} height={10}/>
                        : <Image src={BurgerIcon} alt="burger logo" width={10} height={10}/>}
                </Button>
            </div>
            <div
                className={`flex flex-col h-screen w-42 fixed left-0 
                            transform transition-all duration-700 ${isOpen ? "" : "-translate-x-38"} 
                            border-r border-matterhorn border-opacity-40 bg-whiteSmoke z-40`}
            >
                <div className="h-full w-full">
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
                            {SIDEBAR_LINKS.length ? <div className="w-full h-px bg-matterhorn opacity-40"/> : null}
                            {SIDEBAR_LINKS.map(button =>
                                button.type === "button" ?
                                    <>
                                        <Button
                                            key={button.description}
                                            styleType={button.styleType}
                                            className={button.className}
                                            onClick={button.description === "Контакты" ? () => setIsContactsOpen(true) : undefined}
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
                    </Transition>
                </div>
                <div className="absolute left-0 bottom-0 w-full z-30">
                    <Button.Selector
                        suggestions={["RU", "EN"]}
                        setSuggestion={() => {}}
                    />
                </div>
            </div>
            <Contacts show={isContactsOpen} contacts={CONTACTS}/>
            <div className="fixed top-0">
                <Transition
                    show={isOpen}
                    enter="transform transition-all duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transform transition-all duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="w-screen h-screen bg-matterhorn opacity-40 z-20" onClick={closeMenu}/>
                </Transition>
            </div>
        </>
    );
};

export default MainMenu;