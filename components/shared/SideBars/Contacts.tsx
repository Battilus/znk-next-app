import React, {FC} from 'react';
import Image from "next/image";
import LogoIcon from "../../../public/svg/logo-description.svg"

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
    return (
        <div
            className={`fixed left-0 top-0 flex flex-col items-center h-screen w-64
                        transform transition-all duration-500 ${show ? "translate-x-42" : "-translate-x-58"}
                        border-r border-matterhorn border-opacity-40 bg-whiteSmoke z-30`}
        >
            <div className="mt-4 mb-16">
                <Image src={LogoIcon} width={130} height={61} alt="logo contacts"/>
            </div>
            <div className="flex flex-col items-center text-matterhorn font-medium uppercase space-y-8">
                {contacts.map(contact =>
                    <div key={contact.id} className="flex flex-col items-center">
                        {contact.name && <span className="text-sm">{contact.name}</span>}
                        {contact.phone && <span className="text-xl">{contact.phone}</span>}
                        {contact.email && <span className="text-sm">{contact.email}</span>}
                    </div>)}
            </div>
        </div>
    );
};

export default Contacts;