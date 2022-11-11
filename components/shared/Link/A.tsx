import React, {FC, MouseEventHandler, ReactNode} from 'react';
import Link from "next/link";

interface IAProps {
    children: ReactNode | ReactNode[] | string | string[]
    href?: string
    className?: string
    onMouseEnter?: MouseEventHandler<HTMLAnchorElement | HTMLDivElement>
    onMouseLeave?: MouseEventHandler<HTMLAnchorElement | HTMLDivElement>
}

const A: FC<IAProps> = ({children, href, className, onMouseEnter, onMouseLeave}) => {
    return (
        <>
            {href ?
                <Link
                    href={href}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <a className={`decoration-0 ${className}`}>{children}</a>
                </Link>
                : <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <div className={`decoration-0 ${className}`}>{children}</div>
                </div>}
        </>
    );
};

export default A;