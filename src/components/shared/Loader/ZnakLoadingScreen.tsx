import React, { FC } from 'react';
import znakLoadBlack from '../../../../public/lottie/znakLoadBlack.json';
import Lottie from 'react-lottie-player';

type Props = {
  disablePageFallback?: boolean;
}

const ZnakLoadingScreen: FC<Props> = ({disablePageFallback}) => {
  return (
    <div id="loadingScreen" className={disablePageFallback ? '!flex' : 'hidden'}>
      <div className="fixed left-0 top-0 w-screen h-dvh bg-matterhorn opacity-30 z-[49]"/>
      <div className="fixed left-0 top-0 w-screen h-dvh flex flex-col items-center justify-center z-[60]">
        <Lottie
          loop={true}
          animationData={znakLoadBlack}
          play={true}
          style={{ width: 200, height: 200 }}
        />
      </div>
    </div>
  );
};

export default ZnakLoadingScreen;