import React, { FC, useEffect, useRef } from 'react';
import { PartnerCardType } from '../../../../types';
import { TFunction } from 'i18next';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import DoubleSlashIcon from '../../../../../public/svg/double-slash.svg';
import BurroPreviewTablet from '../../../shared/SliderPreview/BurroPreviewTablet';
import { useRouter } from 'next/router';
import PartnersCard from '../../../utility/PartnersCard';

interface IProps {
  certificates: PartnerCardType[];
  t: TFunction<'translation', undefined>;
  isMobileScreen: boolean;
}

type SlidesPath = 'philosophy' | 'team' | 'partners'

enum SlideIndex {
  philosophy = 1,
  team = 2,
  partners = 4
}

const BurroMobile: FC<IProps> = ({ certificates, t, isMobileScreen }) => {

  const swiperExtRef = useRef<SwiperRef>(null);
  const router = useRouter();

  const slideTo = (index: number) => {
    swiperExtRef?.current?.swiper.slideTo(index - 1, 300);
  };

  useEffect(() => {
    const slideFromPath = router.asPath.split('#')[1];

    if (slideFromPath) {
      slideTo(SlideIndex[slideFromPath as SlidesPath]);
    }

  }, [ router ]);

  const renderPhilosophySection = () => {
    return (
      <SwiperSlide>
        <BurroPreviewTablet
          title={t('pages.burro.philosophy.title')}
          bgImage="bg-burro_philosophy_mobile"
        >
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <DoubleSlashIcon className="w-[27px] h-[33px]"/>
            <div
              className="w-full sm:w-3/4 md:w-2/4 flex flex-col items-center gap-10 font-medium uppercase text-white
                           text-sm leading-18p text-justify">
              <div>{t('pages.burro.philosophy.description.p1')}</div>
              <div>{t('pages.burro.philosophy.description.p2')}</div>
            </div>
            <DoubleSlashIcon className="w-[27px] h-[33px]"/>
          </div>
        </BurroPreviewTablet>
      </SwiperSlide>
    );
  }

  const renderTeamSection = () => {
    return (
      <>
        <SwiperSlide>
          <BurroPreviewTablet
            title={t('pages.burro.command.title')}
            bgImage="bg-burro_team_mobile_ekaterina"
            contentAlign="end"
            isDarkenedBg={true}
          >
            <div
              className="flex flex-col gap-1.5 font-medium uppercase text-white
                         text-sm leading-18p text-justify w-full sm:w-3/4 md:w-2/4">
              <p className="text-sl">
                {t('pages.burro.command.employees.e2.title')}
              </p>
              <p>{t('pages.burro.command.employees.e2.p1')}</p>
              <p>{t('pages.burro.command.employees.e2.p2')}</p>
            </div>
          </BurroPreviewTablet>
        </SwiperSlide>

        <SwiperSlide>
        <BurroPreviewTablet
            title={t('pages.burro.command.title')}
            bgImage="bg-burro_team_mobile_ilya"
            contentAlign="end"
            isDarkenedBg={true}
          >
          <div
            className="flex flex-col gap-1.5 font-medium uppercase text-white
                         text-sm leading-18p text-justify w-full sm:w-3/4 md:w-2/4">
            <p className="text-sl">
              {t('pages.burro.command.employees.e1.title')}
            </p>
            <p>{t('pages.burro.command.employees.e1.p1')}</p>
            <p>{t('pages.burro.command.employees.e1.p2')}</p>
          </div>
        </BurroPreviewTablet>
        </SwiperSlide>
      </>
    );
  }

  const renderPartnersSection = () => {
    return (
      <SwiperSlide>
        <BurroPreviewTablet
          title={t('pages.burro.partners.title')}
          bgImage={!isMobileScreen ? 'bg-burro_partners_mobile' : 'bg-neonGray'}
        >
          <div className={`w-full max-w-[38.56rem] h-full max-h-[76vh] grid grid-cols-2 gap-4 text-white`}>
            {certificates.map(certificate =>
              <PartnersCard
                {...certificate}
                key={certificate.id}
                t={t}
                isMobileScreen={isMobileScreen}
              />)}
          </div>
        </BurroPreviewTablet>
      </SwiperSlide>
    )
  }

  return (
    <div className="w-full">
      <Swiper
        ref={swiperExtRef}
        slidesPerView={1}
        pagination={{
          clickable: true,
          verticalClass: '!top-[94vh] !right-[1.5rem]',
        }}
        modules={[ Pagination ]}
        className="h-dvh"
        direction="vertical"
      >
        {renderPhilosophySection()}
        {renderTeamSection()}
        {renderPartnersSection()}
      </Swiper>
    </div>
  );
};

export default BurroMobile;