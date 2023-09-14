import React, { FC, MouseEventHandler, ReactNode } from 'react';
import Link from 'next/link';

interface IAProps {
  children: ReactNode | string;
  href: string;
  className?: string;
  isBlank?: boolean;
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement | HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement | HTMLDivElement>;
}

const A: FC<IAProps> = ({ children, href, className, isBlank, onMouseEnter, onMouseLeave }) => {
  return (
    <Link
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      passHref={true}
      legacyBehavior={true}
    >
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className={`decoration-0 ${className}`}
        target={isBlank ? '_blank' : undefined}
      >
        {children}
      </a>
    </Link>
  );
};

export default A;