import React, {FC, useCallback, useState} from 'react';
import {TFunction} from "i18next";
import {Transition} from "@headlessui/react";
import Button from "../../Button/Button";
import CrossIcon from "../../../../../public/svg/cross-menu.svg";
import BurgerIcon from "../../../../../public/svg/burger-menu.svg";
import {CONTACTS, SIDEBAR_LINKS_MOBILE} from "../../../../assets/staticParams";
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

const MainMenuMobile: FC<IProps> = ({
                                        isHomeLocation,
                                        hide,
                                        isOpen,
                                        isContactsOpen,
                                        openContacts,
                                        t,
                                        menuButtonHandler,
                                        menuButtonColor
                                    }) => {

    const [dropdown, setDropdown] = useState<boolean>(false);

    const dropdownHandler = useCallback((drop?: boolean) => {
        setDropdown(drop!)
    }, []);

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
                className={`flex flex-col ${isHomeLocation ? dropdown? "h-[438px]" : "h-[307px]" : dropdown? "h-[496px]" : "h-[365px]"} w-full fixed left-0 top-0 
                            transform transition-all duration-500 ${isOpen ? "" : "-translate-y-full"} 
                            border-b border-matterhorn bg-whiteSmoke z-40`}
            >
                <div className="w-full">
                    <Transition
                        show={isOpen}
                        enter="transform transition-all duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transform transition-all duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="flex flex-col my-[5.46rem] z-30">
                            {!isHomeLocation &&
                                <Button.Link
                                    styleType={"transparent"}
                                    className="outline-0 w-full my-[0.6875rem]"
                                    childrenClassName="pt-1.7 pb-1.3 uppercase text-sl leading-24.4p font-medium"
                                    href={"/"}
                                >
                                    {t("actionButtons.mainPage")}
                                </Button.Link>}
                            <Button.DropdownMenu
                                className="flex flex-col gap-[0.6875rem]"
                                suggestions={SIDEBAR_LINKS_MOBILE}
                                handlers={{
                                    "openContacts": openContacts
                                }}
                                dropdownHandler={dropdownHandler}
                            />
                        </div>
                    </Transition>
                </div>
                <div className="absolute left-0 bottom-0 w-full z-30">
                    <Button.LocaleSwitcher/>
                </div>
            </div>
            <Contacts
                show={isContactsOpen}
                contacts={CONTACTS}
                translateWay={"utd"}
                dropdownMobile={dropdown}
                isHomeMobileLocation={isHomeLocation}
            />
        </div>
    );
};

export default MainMenuMobile;