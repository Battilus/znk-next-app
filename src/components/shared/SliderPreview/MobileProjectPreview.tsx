import React, { FC, useMemo } from 'react';
import Image from "next/image";
import LogoLink from '../Logo/LogoLink';
import { useRouter } from 'next/router';
import { Project } from '../../../api/entities/project/types/client';
import * as apiRoutes from '../../../api/endpoints';

interface IProps {
  previewProject: Project;
}

const MobileProjectPreview: FC<IProps> = ({ previewProject }) => {
  const router = useRouter();

  const imgSrc = useMemo(() => previewProject.images[0].src, [previewProject]);
  const name = useMemo(() => previewProject.title, [previewProject]);

  const navigateTo = () => {
    router.push(`/${apiRoutes.project()}/${previewProject.slug}`);
  }

  return (
    <div className="h-dvh w-full" onClick={navigateTo}>
      <div className="relative w-full h-full overflow-x-hidden object-center">
        <div className="w-full z-10 fixed top-0 left-0 px-[40px] pt-[4px]">
          <LogoLink href="/" align="start" isWhite={true}/>
        </div>

        {imgSrc &&
          <Image
            className="object-cover brightness-75"
            src={imgSrc}
            alt="test"
            quality={100}
            priority={true}
            fill={true}
            sizes="100vw"/>}

        <div className="absolute top-0 left-0 w-full h-full z-1 px-[32px] pb-[42px] flex flex-col items-center justify-end">
          <div className="w-full uppercase text-white text-lg font-medium">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProjectPreview;