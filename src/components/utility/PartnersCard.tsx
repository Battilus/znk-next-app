import React, { FC, memo } from 'react';
import Image from 'next/image';
import { CertificateCardType } from '../../types';
import { useWindowSize } from '../../features/hooks/useWindowSize';

const HIGH_SCREEN_MIN_SIZE = 1536;

const PartnersCard: FC<CertificateCardType> = ({ logo }) => {

  const { width: screenWidth } = useWindowSize();

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div style={
        {
          width: screenWidth && screenWidth >= HIGH_SCREEN_MIN_SIZE ? logo.scaleWidth : logo.width,
          height: screenWidth && screenWidth >= HIGH_SCREEN_MIN_SIZE ? logo.scaleHeight : logo.height,
        }
      }>
        <div className="relative w-full h-full">
          <Image
            className="w-full h-full object-contain"
            src={logo.img}
            layout="fill"
            // quality={100}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(PartnersCard);