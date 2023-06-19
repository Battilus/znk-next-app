import React, { FC } from 'react';
import LogoMainIcon from '../../../../public/svg/logo-icon.svg';
import { useTranslation } from 'next-i18next';

type Props = {
  noFilters?: boolean;
  onlyLogo?: boolean;
}

const ThereIsNoProjects = ({ noFilters, onlyLogo }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="mx-2.5 flex flex-col items-center gap-5">
        <LogoMainIcon className="w-24 md:w-[161px] 2xl:w-[11.18vw] h-24 md:h-[161px] 2xl:h-[11.18vw]"/>
        {!onlyLogo &&
          <div className="text-matterhorn uppercase text-sl 2xl:text-1.18v text-center">
            {t(noFilters ? 'thereIsNoFilter' : 'empty_projects')}
          </div>}
      </div>
    </div>
  );
};

export default ThereIsNoProjects;