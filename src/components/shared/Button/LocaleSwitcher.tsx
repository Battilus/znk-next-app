import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { FC } from 'react';
import { useScreen } from '../../../features/hooks/useScreen';

const LocaleSwitcher: FC = () => {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const { breakpoints: { mobileMd, mobileSm } } = useScreen({});

  return (
    <div className={`flex items-center justify-center gap-1 2xl:gap-0.28v cursor-pointer ${ mobileMd || mobileSm ? 'text-lg' : 'text-sl s:text-sm 2xl:text-0.97v 2xl:leading-1.39v'}`}>
      {locales?.map((localeItem, index) => {
        const { pathname, query, asPath } = router;

        return (
          <React.Fragment
            key={`locale-${localeItem}`}
          >
            <span>
              <Link
                href={{ pathname, query }}
                as={asPath}
                locale={localeItem}
                className={`text-center uppercase ${localeItem === activeLocale ? 'font-medium' : 'font-normal'}`}
              >
                {localeItem}
              </Link>
            </span>
            {locales && locales.length - 1 !== index &&
              <span className="font-medium">/</span>}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default LocaleSwitcher;