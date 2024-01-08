import React, { FC, memo } from 'react';
import Image from "next/image";
import { PartnerCardType } from '../../types';
import { useWindowSize } from '../../features/hooks/useWindowSize';
import { TFunction } from 'i18next';

const HIGH_SCREEN_MIN_SIZE = 1536;

type Props = PartnerCardType & {
  t: TFunction<'translation', undefined>;
  isMobileScreen?: boolean;
}

const PartnersCard: FC<Props> = ({ logo, descriptionKey, t, isMobileScreen }) => {

  const { width: screenWidth = 0 } = useWindowSize();

  return (
    <div className={`h-full w-full flex items-center ${isMobileScreen ? 'grayscale-0' : 'grayscale hover:grayscale-0'} transition delay-100 ease-linear cursor-pointer`}>
      <div
        className="w-[6.25rem] 2xl:w-[6.94vw] h-[6rem] 2xl:h-[6.67vw] flex items-center justify-center"
      >
        <div
          style={
          {
            width: screenWidth >= HIGH_SCREEN_MIN_SIZE ? logo.scaleWidth : logo.width,
            height: screenWidth >= HIGH_SCREEN_MIN_SIZE ? logo.scaleHeight : logo.height,
          }}
          className=""
        >
          <div className="relative w-full h-full">
            <Image
              className="w-full h-full object-contain"
              alt="test"
              src={logo.img}
              priority={true}
              fill={true}
              sizes="100vw" />
          </div>
        </div>
      </div>

      <div className={`flex flex-col gap-1.5 2xl:gap-[0.42vw] ${isMobileScreen ? 'text-white' : 'text-matterhorn'}`}>
        <div className="text-justify text-sm 2xl:text-0.97v font-medium uppercase leading-18p 2xl:leading-1.25v">
          {t(`pages.burro.partners.list.${descriptionKey}.title`)}
        </div>
        <div className="text-justify text-xs font-normal leading-3 2xl:text-0.83v 2xl:leading-[0.83vw]">
          {t(`pages.burro.partners.list.${descriptionKey}.description`)}
        </div>
      </div>
    </div>
  );
};

export default memo(PartnersCard);