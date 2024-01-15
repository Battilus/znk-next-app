import React, { FC } from 'react';
import { TFunction } from 'i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import LogoLink from '../../shared/Logo/LogoLink';
import { Project } from '../../../api/entities/project/types/client';
import { useWindowSize } from '../../../features/hooks/useWindowSize';
import MobileProjectPreview from '../../shared/SliderPreview/MobileProjectPreview';
import { MIN_MOBILE_SCREEN_HEIGHT } from '../../../assets/constants';

interface IProps {
  previewProjects: Project[];
  t: TFunction<'translation', 'string'>;
}

const MobileWrapper: FC<IProps> = ({ previewProjects, t }) => {
  const { height: screenHeight = 0 } = useWindowSize();

  const renderPreviewProjects = () => {
    return previewProjects.map((project) => {
      return (
        <SwiperSlide key={project.id}>
          <MobileProjectPreview previewProject={project} />
        </SwiperSlide>
      )
    })
  }

  const renderMainScreen = () => {
    const renderDescriptionText = () => {
      const extraDirection = t('pages.main.burroDescription.desktop.mainDirections.d7');

      return (
        <div className="w-full text-white">
          <div className="flex flex-col gap-4">
            <div>{t('pages.main.burroDescription.desktop.text_p1')}</div>
            <div>{t('pages.main.burroDescription.desktop.text_p2')}</div>
            <div>{t('pages.main.burroDescription.desktop.text_p3')}</div>
          </div>

          {screenHeight >= MIN_MOBILE_SCREEN_HEIGHT && (
            <div className="mt-8">
              <div>{t('pages.main.burroDescription.desktop.mainDirections.title')}</div>
              <ul className="font-medium mt-3">
                <li>- {t('pages.main.burroDescription.desktop.mainDirections.d1')}</li>
                <li>- {t('pages.main.burroDescription.desktop.mainDirections.d2')}</li>
                <li>- {t('pages.main.burroDescription.desktop.mainDirections.d3')}</li>
                <li>- {t('pages.main.burroDescription.desktop.mainDirections.d4')}</li>
                <li>- {t('pages.main.burroDescription.desktop.mainDirections.d5')}</li>
                <li>- {t('pages.main.burroDescription.desktop.mainDirections.d6')}</li>
                {extraDirection && <li>- {extraDirection}</li>}
              </ul>
            </div>
          )}
        </div>
      )
    }

    return (
      <SwiperSlide>
        <div className="h-dvh px-[40px] pt-[4px] bg-neonGray">
          <LogoLink href="/" align="start" isWhite={true}/>

          {renderDescriptionText()}
        </div>
      </SwiperSlide>
    );
  }

  return (
    <Swiper
      pagination={{
        clickable: true,
        dynamicMainBullets: 3,
        dynamicBullets: true,
        verticalClass: '!top-[92vh] !right-[1.5rem]',
      }}
      modules={[ Autoplay, Pagination ]}
      className="absolute top-0 left-0 w-full h-dvh z-10"
      direction="vertical"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {renderPreviewProjects()}
      {renderMainScreen()}
    </Swiper>
  );
};

export default MobileWrapper;