import {useRouter} from "next/router";
import Link from "next/link";
import React, {FC} from "react";

const LocaleSwitcher: FC = () => {
    const router = useRouter();

    const {locales, locale: activeLocale} = router;

    return (
        <div className="flex flex-row items-center justify-center space-x-1 cursor-pointer">
            {locales?.map((localeItem, index) => {
                const {pathname, query, asPath} = router;
                return (
                    <React.Fragment key={"locale-" + localeItem}>
                        <span>
                            <Link href={{pathname, query}} as={asPath} locale={localeItem}>
                                <a className={`text-center uppercase text-sm 2xl:text-0.97v 2xl:leading-1.39v ${localeItem === activeLocale ? "font-medium" : "font-normal"}`}>
                                    {localeItem}
                                </a>
                            </Link>
                        </span>
                        {locales?.length - 1 !== index && <span className="font-medium">/</span>}
                    </React.Fragment>
                );
            })}
        </div>
    );
}

export default LocaleSwitcher;