import React, { FC, memo } from 'react';
import Image from 'next/image';
import A from '../shared/Link/A';
import { useTranslation } from 'next-i18next';
import { CertificateCardType } from '../../types';
import { useWindowSize } from '../../features/hooks/useWindowSize';

const CertificateCard: FC<CertificateCardType> = ({ logo, title, certificateHref }) => {
  const { t } = useTranslation();

  const { width: screenWidth } = useWindowSize();

  return (
    <div className="flex items-center gap-3.5 2xl:gap-0.97v">
      <div style={
        {
          width: screenWidth && screenWidth >= 1536 ? logo.scaleWidth : logo.width,
          height: screenWidth && screenWidth >= 1536 ? logo.scaleHeight : logo.height,
        }
      }>
        <div className="relative w-full h-full">
          <Image
            className="w-full h-full object-contain"
            src={logo.img}
            layout="fill"
            quality={100}
            priority={true}
          />
        </div>
      </div>
      <div
        className="flex flex-col items-start text-sm 2xl:text-0.97v leading-18p 2xl:leading-1.25v gap-1.5 2xl:gap-0.42v">
        <div className="uppercase font-medium">{t(title)}</div>
        <A href={certificateHref} className="capitalize">{t('show')}</A>
      </div>
    </div>
  );
};

export default memo(CertificateCard);