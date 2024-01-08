import React, { FC } from 'react';
import Image from "next/image";
import Button from '../Button/Button';
import { Transition } from '@headlessui/react';
import { TFunction } from 'i18next';

interface IProps {
  name?: string;
  imgSrc?: string;
  href: string;
  openSlide?: boolean;
  t: TFunction<'translation', 'string'>;
  isPhone?: boolean;
}

const MobileProjectPreview: FC<IProps> = ({ name, imgSrc, href, openSlide, t, isPhone }) => {
  return (
    <div className="h-dvh w-full">
      <div className="relative w-full h-full overflow-x-hidden object-center">
        {imgSrc &&
          <Image
            className="object-cover"
            src={imgSrc}
            alt="test"
            quality={100}
            priority={true}
            fill={true}
            sizes="100vw" />}
        <Transition
          show={openSlide}
          enter="transform transition-opacity duration-500"
          enterFrom="opacity-0 w-full h-full"
          enterTo="opacity-100 w-full h-full"
          leave="transform transition-opacity duration-10"
          leaveFrom="opacity-100 w-full h-full"
          leaveTo="opacity-0 w-full h-full"
        >
          <div className="absolute top-0 left-0 w-full h-full z-1 p-5 flex flex-col items-center justify-end">
            <div className="w-full flex items-center justify-between
                                    pb-5 pt-[21px] px-[26px] uppercase
                                    rounded-[22px] border border-matterhorn bg-white">
              <div className="max-w-[284px]">{name}</div>
              <Button.Link
                href={href}
                styleType={isPhone ? 'transparent' : 'rounded'}
                className="w-full border border-matterhorn max-w-[262px]"
                childrenClassName="w-full flex items-center justify-center"
              >
                <div className="text-sl font-medium text-center leading-21.5">
                  {t('learn_more')}
                </div>
              </Button.Link>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default MobileProjectPreview;