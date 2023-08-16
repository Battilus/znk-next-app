import {Contact} from "../components/shared/SideBars/Contacts";
import {LinkButtonType} from "../components/shared/Button/Button";
import {PartnerCardType} from "../types";
import { Locale } from '../api/types/locales';

export const SIDEBAR_LINKS: LinkButtonType[] = [
    {
        className: 'outline-0 w-full uppercase text-sm font-medium 2xl:text-0.97v 2xl:leading-1.39v',
        description: 'sideBarLinks.burro',
        type: 'link',
        href: '/about-us',
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
                href: '/about-us/#philosophy',
                styleType: 'transparent',
                childrenClassName: 'pt-1.7 pb-1.3 uppercase text-sl leading-24.4p font-light',
            },
            {
                className: 'outline-0 w-full',
                description: 'sideBarLinks.team',
                type: 'link',
                href: '/about-us/#team',
                styleType: 'transparent',
                childrenClassName: 'pt-1.7 pb-1.3 uppercase text-sl leading-24.4p font-light',
            },
            {
                className: 'outline-0 w-full',
                description: 'sideBarLinks.partners',
                type: 'link',
                href: '/about-us/#partners',
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
        email: 'info@znakproject.com'
    }
];

export const SOCIAL_NETS = [
    { id: '1', name: 'vk', contact: '@znak.project', href: 'https://vk.com/znak.project' },
    { id: '2', name: 'instagram', contact: '@znak.project', href: 'https://www.instagram.com/znak.project/' },
    { id: '3', name: 'youtube', contact: '@znak.project', href: '/' },
];

export const ADDRESS_AND_DETAILS = {
    companyName: 'contacts.addressAndDetails.companyName',
    inn: '7802929417',
    ogrn: '1227800113122',
    companyAddress: 'contacts.addressAndDetails.companyAddress',
}

export const PAGE_TITLE_META = {
    [Locale.RU]: 'ЗНАК ПРОЕКТ | Архитектурное бюро',
    [Locale.EN]: 'ZNAK PROJECT | Architectural firm',
}

export const CERTIFICATES: PartnerCardType[] = [
    {
        id: 1,
        logo: {
            img: '/svg/partners/Gazprom.svg',
            width: 44,
            height: 73,
            scaleWidth: '3.06vw',
            scaleHeight: '5.07vw',
        },
        descriptionKey: 'gazprom',
    },
    {
        id: 2,
        logo: {
            img: '/svg/partners/korus.svg',
            width: 56,
            height: 56,
            scaleWidth: '3.89vw',
            scaleHeight: '3.89vw',
        },
        descriptionKey: 'korus',
    },
    {
        id: 3,
        logo: {
            img: '/svg/partners/boxing_fed.svg',
            width: 66,
            height: 68,
            scaleWidth: '4.58vw',
            scaleHeight: '4.72vw',
        },
        descriptionKey: 'boxing_fed',
    },
    {
        id: 4,
        logo: {
            img: '/svg/partners/izmeron.svg',
            width: 74,
            height: 64,
            scaleWidth: '5.14vw',
            scaleHeight: '4.44vw',
        },
        descriptionKey: 'izmeron',
    },
    {
        id: 5,
        logo: {
            img: '/svg/partners/electroprof.svg',
            width: 62,
            height: 62,
            scaleWidth: '4.31vw',
            scaleHeight: '4.31vw',
        },
        descriptionKey: 'electroprof',
    },
    {
        id: 6,
        logo: {
            img: '/svg/partners/ig_s3.svg',
            width: 66,
            height: 76,
            scaleWidth: '4.58vw',
            scaleHeight: '5.28vw',
        },
        descriptionKey: 'ig_s3',
    },
    {
        id: 7,
        logo: {
            img: '/svg/partners/rus_tech.svg',
            width: 74,
            height: 70,
            scaleWidth: '5.14vw',
            scaleHeight: '4.86vw',
        },
        descriptionKey: 'rus_tech',
    },
    {
        id: 8,
        logo: {
            img: '/svg/partners/niipg.svg',
            width: 66,
            height: 36,
            scaleWidth: '4.58vw',
            scaleHeight: '2.5vw',
        },
        descriptionKey: 'niipg',
    },
    {
        id: 9,
        logo: {
            img: '/svg/partners/g_dynamic.svg',
            width: 100,
            height: 96,
            scaleWidth: '6.94vw',
            scaleHeight: '6.67vw',
        },
        descriptionKey: 'g_dynamic',
    },
    {
        id: 10,
        logo: {
            img: '/svg/partners/atenastudio.svg',
            width: 54,
            height: 52,
            scaleWidth: '3.75vw',
            scaleHeight: '3.61vw',
        },
        descriptionKey: 'atenastudio',
    },
]

export const VACANCIES_LINK = 'https://hh.ru/employer/9324937';

export const PRESENTATION_LINK = 'https://disk.yandex.ru/i/OZW_Yel47ZNXew';
