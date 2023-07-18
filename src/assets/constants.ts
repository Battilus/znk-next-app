import {Contact} from "../components/shared/SideBars/Contacts";
import {LinkButtonType} from "../components/shared/Button/Button";
import {CertificateCardType} from "../types";

export const SIDEBAR_LINKS: LinkButtonType[] = [
    {
        className: 'outline-0 w-full uppercase text-sm font-medium 2xl:text-0.97v 2xl:leading-1.39v',
        description: 'sideBarLinks.burro',
        type: 'link',
        href: '/burro',
        styleType: 'inverse',
        childrenClassName: 'pt-1.7 2xl:pt-0.49v pb-1.3 2xl:pb-0.35v',
    },
    {
        className: 'outline-0 w-full uppercase text-sm font-medium 2xl:text-0.97v 2xl:leading-1.39v',
        description: 'sideBarLinks.allProjects',
        type: 'link',
        href: '/projects',
        styleType: 'inverse',
        childrenClassName: 'pt-1.7 2xl:pt-0.49v pb-1.3 2xl:pb-0.35v',
    },
    {
        className: 'outline-0 w-full uppercase text-sm font-medium 2xl:text-0.97v 2xl:leading-1.39v',
        description: 'sideBarLinks.contacts',
        type: 'button',
        styleType: 'inverse',
        childrenClassName: 'pt-1.7 2xl:pt-0.49v pb-1.3 2xl:pb-0.35v',
        onClickEn: true
    }
]

export const SIDEBAR_LINKS_MOBILE: LinkButtonType[] = [
    {
        className: 'outline-0 w-full',
        description: 'sideBarLinks.burro',
        type: 'dropdown',
        styleType: 'transparent',
        childrenClassName: 'pt-1.7 pb-1.3 uppercase text-sl leading-24.4p font-medium',
        suggestions: [
            {
                className: 'outline-0 w-full',
                description: 'sideBarLinks.philosophy',
                type: 'link',
                href: '/burro/#philosophy',
                styleType: 'transparent',
                childrenClassName: 'pt-1.7 pb-1.3 uppercase text-sl leading-24.4p font-light',
            },
            {
                className: 'outline-0 w-full',
                description: 'sideBarLinks.command',
                type: 'link',
                href: '/burro/#command',
                styleType: 'transparent',
                childrenClassName: 'pt-1.7 pb-1.3 uppercase text-sl leading-24.4p font-light',
            },
            {
                className: 'outline-0 w-full',
                description: 'sideBarLinks.achievements',
                type: 'link',
                href: '/burro/#achievements',
                styleType: 'transparent',
                childrenClassName: 'pt-1.7 pb-1.3 uppercase text-sl leading-24.4p font-light',
            }
        ]
    },
    {
        className: 'outline-0 w-full uppercase text-sl leading-24.4p font-medium',
        description: 'sideBarLinks.allProjects',
        type: 'link',
        href: '/projects',
        styleType: 'transparent',
        childrenClassName: 'pt-1.7 pb-1.3',
    },
    {
        className: 'outline-0 w-full uppercase text-sl leading-24.4p font-medium',
        description: 'sideBarLinks.contacts',
        type: 'button',
        styleType: 'transparent',
        childrenClassName: 'pt-1.7 pb-1.3',
        onClickEn: true,
        onClickHandlerKey: 'openContacts'
    }
]

export const CONTACTS: Contact[] = [
    {
        id: '1',
        name: 'contacts.ekaterina.name',
        phone: '+7 965 053 33 37',
    },
    {
        id: '2',
        name: 'contacts.ilya.name',
        phone: '+7 995 606 90 50',
    },
    {
        id: '3',
        email: 'mail@znakproject.com'
    }
]

export const CERTIFICATES: CertificateCardType[] = [
    {
        id: 1,
        logo: {
            img: '/png/achievements/gazprom.png',
            width: 152,
            height: 86,
            scaleWidth: '10.56vw',
            scaleHeight: '5.97vw',
        },
    },
    {
        id: 2,
        logo: {
            img: '/png/achievements/korus.png',
            width: 255,
            height: 112,
            scaleWidth: '17.71vw',
            scaleHeight: '7.78vw',
        },
    },
    {
        id: 3,
        logo: {
            img: '/png/achievements/izmeron.png',
            width: 131,
            height: 113,
            scaleWidth: '9.1vw',
            scaleHeight: '7.85vw',
        },
    },
    {
        id: 4,
        logo: {
            img: '/png/achievements/fed_box_ru.png',
            width: 128,
            height: 148,
            scaleWidth: '8.89vw',
            scaleHeight: '10.28vw',
        },
    },
    {
        id: 5,
        logo: {
            img: '/png/achievements/rus_tech.png',
            width: 194,
            height: 59,
            scaleWidth: '13.47vw',
            scaleHeight: '3.89vw',
        },
    },
    {
        id: 6,
        logo: {
            img: '/png/achievements/g_dynamic.png',
            width: 175,
            height: 68,
            scaleWidth: '12.15vw',
            scaleHeight: '4.72vw',
        },
    },
    {
        id: 7,
        logo: {
            img: '/png/achievements/niipg.png',
            width: 182,
            height: 39,
            scaleWidth: '12.64vw',
            scaleHeight: '2.71vw',
        },
    },
]

export const VACANCIES_LINK = 'https://hh.ru/employer/9324937';

export const PRESENTATION_LINK = 'https://disk.yandex.ru/i/OZW_Yel47ZNXew';
