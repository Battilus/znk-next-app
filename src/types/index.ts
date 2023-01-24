export type PageMeta = {
    title: string
    description: string
}

export type CertificateCardType = {
    id: string | number,
    title: string,
    logo: {
        img: string,
        width?: number | string,
        height?: number | string,
        scaleWidth?: number | string,
        scaleHeight?: number | string,
    },
    certificateHref: string,
}