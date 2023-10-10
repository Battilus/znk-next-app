import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { FC } from 'react';

const LocaleSwitcher: FC = () => {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  return (
    <div className="flex items-center justify-center gap-1 2xl:gap-0.28v cursor-pointer">
      {locales?.map((localeItem, index) => {
        const { pathname, query, asPath } = router;

        return (
          <React.Fragment key={`locale-${localeItem}`}>
                        <span>
                            <Link
                              href={{ pathname, query }}
                              as={asPath}
                              locale={localeItem}
                              passHref={true}
                              legacyBehavior={true}
                            >
                              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                              <a className={`text-center uppercase text-sl s:text-sm 2xl:text-0.97v 2xl:leading-1.39v 
                                            ${localeItem === activeLocale ? 'font-medium' : 'font-normal'}`}>
                                    {localeItem}
                                </a>
                            </Link>
                        </span>
            {locales && locales.length - 1 !== index &&
              <span className="font-medium text-sl s:text-sm 2xl:text-0.97v 2xl:leading-1.39v">/</span>}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default LocaleSwitcher;