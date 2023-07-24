import React, { FC } from 'react';
import { TFunction } from 'i18next';
import PartnersCard from '../../../utility/PartnersCard';
import BurroPreview from '../../../shared/SliderPreview/BurroPreview';
import { PartnerCardType } from '../../../../types';

interface IProps {
  certificates: PartnerCardType[],
  hover: boolean,
  setHover: (v: boolean) => void,
  t: TFunction<'translation', undefined, 'translation'>,
}

const PartnersSection: FC<IProps> = ({ certificates, hover, setHover, t }) => {
  return (
    <BurroPreview
      title={t('pages.burro.partners.title')}
      bgImage="bg-burro_partners_hover"
      hover={hover}
      setHover={setHover}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div
          className="w-full h-full max-w-[39.25rem] 2xl:max-w-[43.61vw] max-h-[30.5rem] 2xl:max-h-[33.89vw]
                     grid grid-cols-2 gap-x-8 2xl:gap-x-2.22v">
          {certificates.map(certificate =>
            <PartnersCard
              {...certificate}
              key={certificate.id}
              t={t}
            />)}
        </div>
      </div>
    </BurroPreview>
  );
};

export default PartnersSection;