import React, { FC } from 'react';
import Head from 'next/head';

export type MetaTag = {
  name: string
  content: string
}

interface IMetaProps {
  title: string;
  description?: string;
  tagsList?: MetaTag[];
}

const Meta: FC<IMetaProps> = ({ title, description, tagsList }) => {
  return (
    <Head>
      {description && <meta name="description" content={description}/>}
      {tagsList && tagsList.length ?
        tagsList.map((metaTag, index) =>
          <meta key={`meta_${metaTag.name}_${index}`} name={metaTag.name} content={metaTag.content}/>)
        : null}
      <link rel="icon" href="/public/favicon.ico"/>
      <title>{title}</title>
    </Head>
  );
};

export default Meta;