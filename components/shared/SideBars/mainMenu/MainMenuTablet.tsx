import React, {FC} from 'react';
import {Transition} from "@headlessui/react";
import Button from "../../Button/Button";
import CrossIcon from "../../../../public/svg/cross-menu.svg";
import BurgerIcon from "../../../../public/svg/burger-menu.svg";
import {CONTACTS, SIDEBAR_LINKS_MOBILE} from "../../../../assets/staticParams";
import {TFunction} from "i18next";
import Contacts from "../Contacts";

interface IProps {
    isHomeLocation?: boolean
    hide?: boolean
    isOpen: boolean
    isContactsOpen: boolean
    openContacts: () => void
    t: TFunction<"translation", undefined, "translation">
    menuButtonHandler: () => void
    menuButtonColor?: string
}

const MainMenuTablet: FC<IProps> = ({
                                        isHomeLocation,
                                        hide,
                                        isOpen,
                                        isContactsOpen,
                                        openContacts,
                                        t,
                                        menuButtonHandler,
                                        menuButtonColor
                                    }) => {
    return (
        <div className="fixed right-0 top-0 z-999">
            <Transition
                show={!hide}
                enter="transform transition-opacity duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transform transition-opacity duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed right-0 flex flex-col z-50">
                    <Button
                        styleType={"transparent"}
                        className={`flex items-center justify-center p-[2.25rem] outline-0`}
                        onClick={menuButtonHandler}
                    >
                        {isOpen
                            ? <CrossIcon className="w-[1.875rem] h-[1.6975rem]"/>
                            : <BurgerIcon className={`w-8.5 h-5 ${menuButtonColor || "text-matterhorn"}`}/>}
                    </Button>
                </div>
            </Transition>
            <div
                className={`flex flex-col h-screen w-56 fixed right-0 
                            transform transition-all duration-700 ${isOpen ? "" : "translate-x-60"} 
                            border-l border-matterhorn bg-whiteSmoke z-40`}
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
                        <div className="mt-[8.875rem] z-30">
                            {!isHomeLocation && <>
                                <Button.Link
                                    styleType={"transparent"}
                                    className="outline-0 w-full"
                                    childrenClassName="pt-1.7 pb-1.3 uppercase text-sl leading-24.4p font-medium"
                                    href={"/"}
                                >
                                    {t("actionButtons.mainPage")}
                                </Button.Link>
                            </>}
                            <Button.DropdownMenu
                                suggestions={SIDEBAR_LINKS_MOBILE}
                                handlers={{
                                    "openContacts": openContacts
                                }}
                            />
                        </div>
                    </Transition>
                </div>
                <div className="absolute left-0 bottom-0 w-full z-30">
                    <Button.LocaleSwitcher/>
                </div>
            </div>
            <Contacts show={isContactsOpen} contacts={CONTACTS} translateWay={"rtl"}/>
        </div>
    );
};

export default MainMenuTablet;