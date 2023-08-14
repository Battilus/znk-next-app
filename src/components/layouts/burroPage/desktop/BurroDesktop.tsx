import React, { FC } from 'react';
import ProjectSections from '../../ProjectSections/ProjectSections';
import PhilosophySection from './PhilosophySection';
import TeamSection from './TeamSection';
import PartnersSection from './PartnersSection';
import { TFunction } from 'i18next';
import { PartnerCardType } from '../../../../types';

interface IProps {
  certificates: PartnerCardType[];
  t: TFunction<'translation', undefined, 'translation'>;
  hover: boolean;
  setHover: (val: boolean) => void;
}

const BurroDesktop: FC<IProps> = ({ certificates, hover, setHover, t }) => {
  return (
    <div className="flex">
      <div className="flex">
        <ProjectSections.LogoInf/>
      </div>

      <div className="w-full h-full flex">
        <PhilosophySection
          hover={hover}
          setHover={setHover}
          t={t}
        />

        <TeamSection
          hover={hover}
          setHover={setHover}
          t={t}
        />

        <PartnersSection
          certificates={certificates}
          hover={hover}
          setHover={setHover}
          t={t}
        />
      </div>
    </div>
  );
};

export default BurroDesktop;