import type { GetServerSideProps, NextPage } from 'next';
import PageWrapper from '../components/PageWrapper';
import React, { useState } from 'react';
import { ProjectDescriptionData } from '../types/Api/dataTypes';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { projectsList } from '../app/mock/fakeData';
import { useTranslation } from 'next-i18next';
import MobileWrapper from '../components/layouts/mainPage/MobileWrapper';
import DesktopWrapper from '../components/layouts/mainPage/DesktopWrapper';
import { PageMeta } from '../types';
import { Locale } from '../types/locales';

interface IProps {
  meta: PageMeta;
  previewProjects: ProjectDescriptionData[];
}

const Home: NextPage<IProps> = ({ meta, previewProjects }) => {
  const [ hover, setHover ] = useState<boolean>(false);

  const { t } = useTranslation();

  const renderWrapper = ({ previewProjects, tablet, iPhone }: {
    previewProjects: ProjectDescriptionData[],
    tablet: boolean,
    iPhone: boolean
  }) => {
    if (previewProjects.length === 0) {
      return null;
    }

    if (tablet) {
      return (
        <MobileWrapper
          previewProjects={previewProjects}
          t={t}
          alignLogo={iPhone ? 'center' : 'start'}
          isPhone={iPhone}
        />
      );
    }

    return (
      <DesktopWrapper
        previewProjects={previewProjects}
        t={t}
        hover={hover}
        setHover={setHover}
      />
    );
  };

  return (
    <PageWrapper
      meta={meta}
      isHomeLocation={true}
      hideHomeButton={hover}
      screenBreakpoints={true}
    >
      {({ breakpoints: { mobileSm: iPhone }, screens: { tablet } }) =>
        renderWrapper({ previewProjects, tablet, iPhone })
      }
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {

  const previewProjects = projectsList.filter(project => project?.mainPagePreview && project.mainPagePreview);

  return {
    props: {
      meta: { title: 'ZNK Project Burro', description: 'Main page' },
      previewProjects: previewProjects.length > 3 ? previewProjects.slice(0, 3) : previewProjects,
      ...(await serverSideTranslations(locale || Locale.RU, [ 'common' ])),
    },
  };
};

export default Home;
