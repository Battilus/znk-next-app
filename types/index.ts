export type CertificateCardType = {
    id: string | number,
    title: string,
    logo: {
        img: string,
        width: number,
        height: number,
    },
    certificateHref: string,
}