import React, {DetailedHTMLProps, FC, MetaHTMLAttributes} from 'react';
import Head from "next/head";

export type MetaTag = {
    name: string
    content: string
}

interface IMetaProps {
    title: string
    description?: string
    favicon?: boolean
    tagsList?: MetaTag[]
    keywords?: DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement> | string
}

const Meta: FC<IMetaProps> = ({title, description, favicon, tagsList, keywords}) => {
    return (
        <Head>
            {description && <meta name="description" content={description}/>}
            {tagsList && tagsList.length ?
                tagsList.map((metaTag, index) =>
                    <meta key={`meta_${metaTag.name}_${index}`} name={metaTag.name} content={metaTag.content}/>)
                : null}
            {/*@ts-ignore*/}
            {keywords && <meta keywords={keywords}/>}
            {favicon && <link rel="icon" href="/public/favicon.ico"/>}
            <title>{title}</title>
        </Head>
    );
};

export default Meta;