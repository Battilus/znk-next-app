import {LinkButton} from "../components/shared/SideBars/SideButtons";
import {Contact} from "../components/shared/SideBars/Contacts";

export const SIDEBAR_LINKS: LinkButton[] = [
    {
        className: "outline-0 w-full uppercase text-sm font-medium",
        description: "Бюро",
        type: "link",
        href: "/burro",
        styleType: "inverse",
    },
    {
        className: "outline-0 w-full uppercase text-sm font-medium",
        description: "Все проекты",
        type: "link",
        href: "/projects",
        styleType: "inverse",
    },
    {
        className: "outline-0 w-full uppercase text-sm font-medium",
        description: "Контакты",
        type: "button",
        styleType: "inverse",
    }
]

export const CONTACTS: Contact[] = [
    {
        id: "1",
        name: "екатерина холуянова",
        phone: "+7 965 053 33 37",
    },
    {
        id: "2",
        name: "илья колесников",
        phone: "+7 995 606 90 50",
    },
    {
        id: "3",
        email: "mail@znakproject.com"
    }
]
