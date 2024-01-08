import React, { FC } from 'react';
import LogoMainIcon from '../../../../public/svg/logo-icon.svg';
import { useTranslation } from 'next-i18next';

type Props = Partial<{
  noFilters: boolean;
  onlyLogo: boolean;
  withoutLogo: boolean;
}>

const ThereIsNoProjects = ({ noFilters, onlyLogo, withoutLogo }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <div className="mx-2.5 flex flex-col items-center gap-5">
        {!withoutLogo && <LogoMainIcon className="w-24 md:w-[161px] 2xl:w-[11.18vw] h-24 md:h-[161px] 2xl:h-[11.18vw]"/>}
        {!onlyLogo &&
          <div className="text-matterhorn uppercase text-sl 2xl:text-1.18v text-center">
            {!noFilters ? t('empty_projects') :
              <span><span className="font-semibold">{t('znak')} </span><span>{t('project')}</span></span>
            }
          </div>}
      </div>
    </div>
  );
};

export default ThereIsNoProjects;