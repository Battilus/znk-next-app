import React, {FC, ReactNode} from 'react';
import Link from "next/link";

interface IAProps {
    children: ReactNode | ReactNode[] | string | string[]
    href: string
}

const A: FC<IAProps> = ({children, href}) => {
    return (
        <Link href={href}>
            <a className={`decoration-0`}>{children}</a>
        </Link>
    );
};

export default A;