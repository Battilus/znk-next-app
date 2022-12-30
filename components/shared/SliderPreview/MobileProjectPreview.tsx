import React, {FC} from 'react';
import Image from "next/image";

interface IProps {
    name?: string
    imgSrc?: string
    href: string
    description?: string
}

const MobileProjectPreview: FC<IProps> = ({name, imgSrc, href}) => {
    return (
        <div
            className={`h-screen w-full`}
        >
            <div
                className={`relative w-full h-full overflow-x-hidden object-center`}
            >
                {imgSrc &&
                    <Image className="object-cover" src={imgSrc} alt={name} layout="fill" quality={100}/>}
            </div>
        </div>
    );
};

export default MobileProjectPreview;