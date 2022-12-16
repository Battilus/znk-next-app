import React, {FC} from 'react';
import LogoIcon from "../../../public/svg/logo-description.svg"
import Logo from "../Logo/Logo";

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
                        transform transition-all duration-500 ${show ? "translate-x-42" : "-translate-x-57"}
                        border-r border-matterhorn bg-whiteSmoke z-30`}
        >
            <Logo align={"center"}/>
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