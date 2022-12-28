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
}

const Contacts: FC<IContactProps> = ({show, contacts}) => {
    const {t} = useTranslation();
    return (
        <div
            className={`fixed left-0 top-0 flex flex-col items-center h-screen w-64 2xl:w-17.78v
                        transform transition-all duration-500 ${show ? "translate-x-42 2xl:translate-x-11.67v" : "-translate-x-57 2xl:-translate-x-15.56v"}
                        border-r border-matterhorn bg-whiteSmoke z-30`}
        >
            <Logo align={"center"}/>
            <div className="flex flex-col items-center text-matterhorn font-medium uppercase space-y-8">
                {contacts.map(contact =>
                    <div key={contact.id} className="flex flex-col items-center">
                        {contact.name && <span className="text-sm 2xl:text-0.97v 2xl:leading-1.39v">{t(`${contact.name}`)}</span>}
                        {contact.phone && <span className="text-xl">{contact.phone}</span>}
                        {contact.email && <span className="text-sm 2xl:text-0.97v 2xl:leading-1.39v">{contact.email}</span>}
                    </div>)}
            </div>
        </div>
    );
};

export default Contacts;