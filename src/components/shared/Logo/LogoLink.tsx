import React, { FC } from 'react';
import LogoIconRu from '../../../../public/svg/logo-description-ru.svg';
import LogoIconEn from '../../../../public/svg/logo-description-en.svg';
import LogoIconRuWhite from '../../../../public/svg/logo-description-ru-white.svg';
import LogoIconEnWhite from '../../../../public/svg/logo-description-en-white.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface IProps {
  align: 'start' | 'end' | 'center';
  href: string;
  className?: string;
  isWhite?: boolean;
}

const ALIGN_STYLES = {
  start: 'items-start mt-4 2xl:mt-1.11v',
  end: '',
  center: 'items-center justify-center mt-4 2xl:mt-1.11v',
};

const LogoLink: FC<IProps> = ({ align, href, className, isWhite }) => {
  const { locale } = useRouter();

  const renderLogo = () => {
    if (isWhite) {
      return locale === 'ru' ?
        <LogoIconRuWhite className="w-[8.1875rem] 2xl:w-[9.1vw] h-[3.8125rem] 2xl:h-[4.24vw]"/> :
        <LogoIconEnWhite className="w-[8.1875rem] 2xl:w-[9.1vw] h-[3.8125rem] 2xl:h-[4.24vw]"/>;
    }

    return locale === 'ru' ?
      <LogoIconRu className="w-[8.1875rem] 2xl:w-[9.1vw] h-[3.8125rem] 2xl:h-[4.24vw]"/> :
      <LogoIconEn className="w-[8.1875rem] 2xl:w-[9.1vw] h-[3.8125rem] 2xl:h-[4.24vw]"/>
  }

  return (
    <Link href={href}>
      <div className={`w-full mb-8 2xl:mb-2.22v flex flex-row transition-all duration-200 cursor-pointer 
                      ${ALIGN_STYLES[align]} 
                      ${className}`}
      >
        {renderLogo()}
      </div>
    </Link>
  );
};

export default LogoLink;
