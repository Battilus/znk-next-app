import React, { FC } from 'react';
import { TFunction } from 'i18next';
import CertificateCard from '../../../utility/PartnersCard';
import BurroPreview from '../../../shared/SliderPreview/BurroPreview';
import { CertificateCardType } from '../../../../types';

interface IProps {
  certificates: CertificateCardType[],
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
      // hoverClassName="brightness-75"
    >
      <div className="w-full h-full flex items-center justify-center">
        <div
          className="w-full h-full max-w-[28.125rem] 2xl:max-w-[31.25vw] max-h-[33.375rem] 2xl:max-h-[37.08vw]
                     grid grid-cols-2 gap-8 2xl:gap-2.22v">
          {certificates.map(certificate =>
            <CertificateCard
              {...certificate}
              key={certificate.id}
            />)}
        </div>
      </div>
    </BurroPreview>
  );
};

export default PartnersSection;