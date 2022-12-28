import {Contact} from "../components/shared/SideBars/Contacts";
import {LinkButton} from "../components/shared/Button/Button";
import {CertificateCardType} from "../types";

export const SIDEBAR_LINKS: LinkButton[] = [
    {
        className: "outline-0 w-full uppercase text-sm font-medium 2xl:text-0.97v 2xl:leading-1.39v",
        description: "sideBarLinks.burro",
        type: "link",
        href: "/burro",
        styleType: "inverse",
    },
    {
        className: "outline-0 w-full uppercase text-sm font-medium 2xl:text-0.97v 2xl:leading-1.39v",
        description: "sideBarLinks.allProjects",
        type: "link",
        href: "/projects",
        styleType: "inverse",
    },
    {
        className: "outline-0 w-full uppercase text-sm font-medium 2xl:text-0.97v 2xl:leading-1.39v",
        description: "sideBarLinks.contacts",
        type: "button",
        styleType: "inverse",
        onClickEn: true
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
