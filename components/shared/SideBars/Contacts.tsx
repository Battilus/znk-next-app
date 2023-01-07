import React, {FC} from 'react';
import Logo from "../Logo/Logo";
import {useTranslation} from "next-i18next";

export type Contact = {
    id: string
    name?: string
    phone?: string
    email?: string
}

interface IContactProps {
    show: boolean
    contacts: Contact[]
    translateWay: "rtl" | "ltr" | "utd"
    dropdownMobile?: boolean
    isHomeMobileLocation?: boolean
}

const Contacts: FC<IContactProps> = ({show, contacts, translateWay, dropdownMobile, isHomeMobileLocation}) => {
    const {t} = useTranslation();
    return (
        <div
            className={`fixed flex flex-col items-center 2xl:w-17.78v transform transition-all
                        ${translateWay === "ltr" ? "top-0 left-0 h-screen w-64 border-r duration-500" : 
                            translateWay === "rtl" ? "top-0 -right-64 h-screen w-64 border-r duration-500" : 
                                translateWay === "utd" ? "-top-[23.84rem] left-0 w-full border-b duration-500 pt-4 pb-[2.73rem]" : ""} 
                        ${translateWay === "ltr" ? show ? "translate-x-42 2xl:translate-x-11.67v" : "-translate-x-57 2xl:-translate-x-15.56v" : 
                            translateWay === "rtl" ? show ? "-translate-x-[29.9rem]" : "" : 
                                translateWay === "utd" ? show ? isHomeMobileLocation ? dropdownMobile? "translate-y-[51.1rem]" : "translate-y-[42.9rem]" : dropdownMobile? "translate-y-[54.87rem]" : "translate-y-[46.7rem]" : "" : ""}
                        border-matterhorn bg-whiteSmoke z-30`}
        >
            <Logo align={"center"}/>
            <div className="flex flex-col items-center text-matterhorn font-medium uppercase gap-8.2 2xl:gap-2.36v">
                {contacts.map(contact =>
                    <div key={contact.id} className="flex flex-col items-center">
                        {contact.name && <span className="text-sm 2xl:text-0.97v 2xl:leading-1.39v">{t(`${contact.name}`)}</span>}
                        {contact.phone && <span className="text-xl 2xl:text-1.39v 2xl:leading-1.94v">{contact.phone}</span>}
                        {contact.email && <span className="text-sm 2xl:text-0.97v 2xl:leading-1.39v">{contact.email}</span>}
                    </div>)}
            </div>
        </div>
    );
};

export default Contacts;