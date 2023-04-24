import { useEffect, useState } from 'react';

type WindowSize = Partial<{
  width: number,
  height: number,
}>

export const useWindowSize = () => {
  const [ windowSize, setWindowSize ] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};
