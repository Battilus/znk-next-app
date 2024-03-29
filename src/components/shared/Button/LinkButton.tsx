import React, { FC, ReactNode } from 'react';
import A from '../Link/A';
import { ButtonStyleType } from './Button';

interface ILinkButtonProps {
  children: ReactNode | string;
  styleType: 'inverse' | 'rounded' | 'transparent';
  className?: string;
  childrenClassName?: string;
  href?: string;
  isBlank?: boolean;
  childrenStyle?: { [key: string]: string | number };
  roundedPadding?: string;
}

const LinkButton: FC<ILinkButtonProps> = (
  {
    children,
    styleType = 'inverse',
    className = '',
    childrenClassName,
    href,
    isBlank,
    childrenStyle,
    roundedPadding,
  }) => {
  return (
    <A
      className={`${styleType === 'inverse' ? 'relative bg-whiteSmoke' : ''} 
                  ${styleType === 'rounded' ? roundedPadding || 'pt-2.5 2xl:pt-0.69v pb-2 2xl:pb-0.56v px-8 2xl:px-[2.22vw]' : ''}
                  ${className || 'border'} ${ButtonStyleType[styleType]}`}
      href={href || ''}
      isBlank={isBlank}
    >
      <div
        style={childrenStyle}
        className={`${styleType === 'inverse' ? 'rounded-full bg-whiteSmoke w-full h-full flex items-center justify-center z-10' : ''} ${childrenClassName}`}>
        {children}
      </div>
    </A>
  );
};

export default LinkButton;