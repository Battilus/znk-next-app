import React, {FC, MouseEventHandler, ReactNode} from 'react';
import Link from "next/link";

interface IAProps {
    children: ReactNode | ReactNode[] | string | string[]
    href: string
    className?: string
    onMouseEnter?: MouseEventHandler<HTMLAnchorElement>
    onMouseLeave?: MouseEventHandler<HTMLAnchorElement>
}

const A: FC<IAProps> = ({children, href, className, onMouseEnter, onMouseLeave}) => {
    return (
        <Link
            href={href}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <a className={`decoration-0 ${className}`}>{children}</a>
        </Link>
    );
};

export default A;