import {Contact} from "../components/shared/SideBars/Contacts";
import {LinkButtonType} from "../components/shared/Button/Button";
import {CertificateCardType} from "../types";

export const SIDEBAR_LINKS: LinkButtonType[] = [
    {
        className: "outline-0 w-full uppercase text-sm font-medium 2xl:text-0.97v 2xl:leading-1.39v",
        description: "sideBarLinks.burro",
        type: "link",
        href: "/burro",
        styleType: "inverse",
        childrenClassName: "pt-1.7 2xl:pt-0.49v pb-1.3 2xl:pb-0.35v",
    },
    {
        className: "outline-0 w-full uppercase text-sm font-medium 2xl:text-0.97v 2xl:leading-1.39v",
        description: "sideBarLinks.allProjects",
        type: "link",
        href: "/projects",
        styleType: "inverse",
        childrenClassName: "pt-1.7 2xl:pt-0.49v pb-1.3 2xl:pb-0.35v",
    },
    {
        className: "outline-0 w-full uppercase text-sm font-medium 2xl:text-0.97v 2xl:leading-1.39v",
        description: "sideBarLinks.contacts",
        type: "button",
        styleType: "inverse",
        childrenClassName: "pt-1.7 2xl:pt-0.49v pb-1.3 2xl:pb-0.35v",
        onClickEn: true
    }
]

export const SIDEBAR_LINKS_MOBILE: LinkButtonType[] = [
    {
        className: "outline-0 w-full",
        description: "sideBarLinks.burro",
        type: "dropdown",
        styleType: "transparent",
        childrenClassName: "pt-1.7 pb-1.3 uppercase text-sl leading-24.4p font-medium",
        suggestions: [
            {
                className: "outline-0 w-full",
                description: "sideBarLinks.philosophy",
                type: "link",
                href: "/burro/#philosophy",
                styleType: "transparent",
                childrenClassName: "pt-1.7 pb-1.3 uppercase text-sl leading-24.4p font-light",
                // childrenStyle: {fontWeight: 300}
            },
            {
                className: "outline-0 w-full",
                description: "sideBarLinks.command",
                type: "link",
                href: "/burro/#command",
                styleType: "transparent",
                childrenClassName: "pt-1.7 pb-1.3 uppercase text-sl leading-24.4p font-light",
                // childrenStyle: {fontWeight: 300}
            },
            {
                className: "outline-0 w-full",
                description: "sideBarLinks.achievements",
                type: "link",
                href: "/burro/#achievements",
                styleType: "transparent",
                childrenClassName: "pt-1.7 pb-1.3 uppercase text-sl leading-24.4p font-light",
                // childrenStyle: {fontWeight: 300}
            }
        ]
    },
    {
        className: "outline-0 w-full uppercase text-sl leading-24.4p font-medium",
        description: "sideBarLinks.allProjects",
        type: "link",
        href: "/projects",
        styleType: "transparent",
        childrenClassName: "pt-1.7 pb-1.3",
    },
    {
        className: "outline-0 w-full uppercase text-sl leading-24.4p font-medium",
        description: "sideBarLinks.contacts",
        type: "button",
        styleType: "transparent",
        childrenClassName: "pt-1.7 pb-1.3",
        onClickEn: true,
        onClickHandlerKey: "openContacts"
    }
]

export const CONTACTS: Contact[] = [
    {
        id: "1",
        name: "contacts.ekaterina.name",
        phone: "+7 965 053 33 37",
    },
    {
        id: "2",
        name: "contacts.ilya.name",
        phone: "+7 995 606 90 50",
    },
    {
        id: "3",
        email: "mail@znakproject.com"
    }
]

export const CERTIFICATES: CertificateCardType[] = [
    {
        id: 1,
        title: "certificates.pega.title",
        logo: {
            img: "/achievements/pega.png",
            width: 66,
            height: 53,
            scaleWidth: "4.58vw",
            scaleHeight: "3.68vw",
        },
        certificateHref: "/",
    },
    {
        id: 2,
        title: "certificates.pega.title",
        logo: {
            img: "/achievements/pega.png",
            width: 66,
            height: 53,
            scaleWidth: "4.58vw",
            scaleHeight: "3.68vw",
        },
        certificateHref: "/",
    },
    {
        id: 3,
        title: "certificates.lifecycle.title",
        logo: {
            img: "/achievements/lifecycle.png",
            width: 66,
            height: 65,
            scaleWidth: "4.58vw",
            scaleHeight: "4.51vw",
        },
        certificateHref: "/",
    },
    {
        id: 4,
        title: "certificates.lifecycle.title",
        logo: {
            img: "/achievements/lifecycle.png",
            width: 66,
            height: 65,
            scaleWidth: "4.58vw",
            scaleHeight: "4.51vw",
        },
        certificateHref: "/",
    },
    {
        id: 5,
        title: "certificates.build.title",
        logo: {
            img: "/achievements/build_architecture.png",
            width: 66,
            height: 46,
            scaleWidth: "4.58vw",
            scaleHeight: "3.19vw",
        },
        certificateHref: "/",
    },
    {
        id: 6,
        title: "certificates.build.title",
        logo: {
            img: "/achievements/build_architecture.png",
            width: 66,
            height: 46,
            scaleWidth: "4.58vw",
            scaleHeight: "3.19vw",
        },
        certificateHref: "/",
    },
    {
        id: 7,
        title: "certificates.architecture.title",
        logo: {
            img: "/achievements/architecture.png",
            width: 66,
            height: 74.33,
            scaleWidth: "4.58vw",
            scaleHeight: "5.16vw",
        },
        certificateHref: "/",
    },
    {
        id: 8,
        title: "certificates.architecture.title",
        logo: {
            img: "/achievements/architecture.png",
            width: 66,
            height: 74.33,
            scaleWidth: "4.58vw",
            scaleHeight: "5.16vw",
        },
        certificateHref: "/",
    },
]
