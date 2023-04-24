import React, { FC } from 'react';
import ProjectSections from '../ProjectSections/ProjectSections';
import ThereIsNoProjects from '../../shared/Logo/ThereIsNoProjects';
import { TFunction } from 'i18next';

interface IProps {
  isPhone?: boolean;
  t: TFunction<'translation', undefined, 'translation'>;
}

const NoProjectsWrapper: FC<IProps> = ({ isPhone, t }) => {
  if (isPhone) {
    return (
      <div className="flex">
        <div className="flex">
          <ProjectSections.LogoInf
            staticWidth={true}
            mobile={true}
            alignLogo="center"
            onLeaveChildren={
              <ProjectSections.BurroDescriptionMobile
                descriptionText={
                  <>
                    <p>
                      {t('pages.main.burroDescription.phone.text_p1')}
                    </p>
                    <p>
                      {t('pages.main.burroDescription.phone.text_p2')}
                    </p>
                  </>
                }
              />
            }
          />
        </div>
        <ThereIsNoProjects/>
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="flex">
        <ProjectSections.LogoInf/>
        <ProjectSections.BurroDescription
          descriptionText={
            <>
              <p>{t('pages.main.burroDescription.desktop.text_p1')}</p>
              <p>{t('pages.main.burroDescription.desktop.text_p2')}</p>
            </>
          }
        />
      </div>

      <ThereIsNoProjects/>
    </div>
  );
};

export default NoProjectsWrapper;