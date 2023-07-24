import { ReactNode } from 'react';

export type PageMeta = {
    title: string
    description: string
}

export type PartnerCardType = {
    id: string | number,
    // logoNode?: ReactNode | JSX.Element;
    logo: {
        img: string,
        width?: number | string,
        height?: number | string,
        scaleWidth?: number | string,
        scaleHeight?: number | string,
    },
    href?: string,
    descriptionKey: string,

}