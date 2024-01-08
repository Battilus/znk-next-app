import React, { FC } from 'react';
import Button from '../../../shared/Button/Button';
import { useTranslation } from 'next-i18next';

const ShowProjectSlider: FC = () => {
  const { t } = useTranslation();

  return (
    <div
      className="fixed top-0 right-0 h-dvh w-8 2xl:w-2.22v bg-whiteSmoke uppercase flex items-center justify-center -rotate-180">
      <Button.Link
        styleType="inverse"
        className="h-full w-8 2xl:w-2.22v border-r border-matterhorn"
        href="/projects"
      >
        <div className="vertical-rl pr-1.7 2xl:pr-0.49v pl-1.3 2xl:pl-0.35v text-base 2xl:text-1.11v 2xl:leading-1.67v">
          {t('all_projects')}
        </div>
      </Button.Link>
    </div>
  );
};

export default ShowProjectSlider;