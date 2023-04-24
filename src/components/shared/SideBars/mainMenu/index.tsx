import React, { FC, useCallback, useState } from 'react';
import { useScreen } from '../../../../features/hooks/useScreen';
import MainMenuDesktop from './MainMenuDesktop';
import MainMenuTablet from './MainMenuTablet';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';
import MainMenuMobile from './MainMenuMobile';

interface IProps {
  isHomeLocation?: boolean;
  hideHomeButton?: boolean;
  menuButtonColor?: string;
}

const MainMenu: FC<IProps> = ({ isHomeLocation, hideHomeButton, menuButtonColor }) => {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  const [ isContactsOpen, setIsContactsOpen ] = useState<boolean>(false);

  const { t } = useTranslation();
  const router = useRouter();
  const { breakpoints: { tabletLg, mobileMd, mobileSm }, screens: { desktop } } = useScreen({});

  const closeMenu = () => {
    setIsOpen(false);
    setIsContactsOpen(false);
  };

  const menuButtonHandler = useCallback(() => {
    setIsOpen(!isOpen);
    setIsContactsOpen(false);
  }, [ isOpen ]);

  const openContacts = useCallback(() => {
    setIsContactsOpen(!isContactsOpen);
  }, [ isContactsOpen ]);

  return (
    <>
      {desktop &&
        <MainMenuDesktop
          isHomeLocation={isHomeLocation}
          hide={hideHomeButton}
          isOpen={isOpen}
          isContactsOpen={isContactsOpen}
          setIsContactsOpen={setIsContactsOpen}
          router={router}
          t={t}
          menuButtonHandler={menuButtonHandler}
        />}

      {(tabletLg || mobileMd) &&
        <MainMenuTablet
          isHomeLocation={isHomeLocation}
          hide={hideHomeButton}
          isOpen={isOpen}
          isContactsOpen={isContactsOpen}
          openContacts={openContacts}
          t={t}
          menuButtonHandler={menuButtonHandler}
          menuButtonColor={menuButtonColor}
        />}

      {mobileSm &&
        <MainMenuMobile
          isHomeLocation={isHomeLocation}
          hide={hideHomeButton}
          isOpen={isOpen}
          isContactsOpen={isContactsOpen}
          openContacts={openContacts}
          t={t}
          menuButtonHandler={menuButtonHandler}
          menuButtonColor={menuButtonColor}
        />}

      <div className="fixed top-0 left-0 z-99">
        <Transition
          show={isOpen}
          enter="transform transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-40"
          leave="transform transition-opacity duration-500"
          leaveFrom="opacity-40"
          leaveTo="opacity-0"
        >
          <div
            className="w-screen h-screen bg-matterhorn"
            onClick={closeMenu}
          />
        </Transition>
      </div>
    </>
  );
};

export default MainMenu;