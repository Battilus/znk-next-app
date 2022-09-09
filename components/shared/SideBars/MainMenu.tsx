import React, {FC, useState} from 'react';
import BurgerIcon from '../../../public/svg/burger-menu.svg';
import CrossIcon from '../../../public/svg/cross-menu.svg';
import ArrowLeftIcon from '../../../public/svg/arrow-left.svg';
import {Transition} from '@headlessui/react';
import {CONTACTS, SIDEBAR_LINKS} from "../../../assets/staticParams";
import {Button} from "../Button";
import Contacts from "./Contacts";

interface IMainMenuProps {
    isHomeLocation?: boolean
}

const MainMenu: FC<IMainMenuProps> = ({isHomeLocation}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isContactsOpen, setIsContactsOpen] = useState<boolean>(false);

    const closeMenu = () => {
        setIsOpen(false);
        setIsContactsOpen(false);
    }

    return (
        <div className="fixed left-0 top-0 z-999">
            <div className="fixed left-0 w-8 h-16 flex flex-col z-50">
                <Button
                    styleType={"inverse"}
                    className={`w-8 h-8 ${isOpen ? "" : ""} border-b border-r border-matterhorn`}
                    onClick={() => {
                        setIsOpen(!isOpen);
                        setIsContactsOpen(false);
                    }}
                >
                    {isOpen
                        ? <CrossIcon/>
                        : <BurgerIcon/>}
                </Button>
                <Transition
                    show={!isHomeLocation && !isOpen}
                    enter="transform transition-all duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transform transition-all duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Button.Link
                        styleType={"inverse"}
                        className={`w-8 h-8 ${isOpen ? "" : ""} border-b border-r border-matterhorn`}
                        href={"/"}
                    >
                        <ArrowLeftIcon/>
                    </Button.Link>
                </Transition>
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
                                            childrenClassName="pt-1.7 pb-1.3"
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
                                                childrenClassName="pt-1.7 pb-1.3"
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
                    enter="transform transition-opacity duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-40"
                    leave="transform transition-opacity duration-500"
                    leaveFrom="opacity-40"
                    leaveTo="opacity-0"
                >
                <div
                    className={`w-screen h-screen bg-matterhorn z-99`}
                    onClick={closeMenu}
                />
                </Transition>
            </div>
        </div>
    );
};

export default MainMenu;