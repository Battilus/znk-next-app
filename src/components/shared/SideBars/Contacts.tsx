import React, { FC, useMemo } from 'react';
import Logo from '../Logo/Logo';
import { useTranslation } from 'next-i18next';
import { ADDRESS_AND_DETAILS, SOCIAL_NETS, VACANCIES_LINK } from '../../../assets/constants';
import Button from '../Button/Button';

export type Contact = {
  id: string
  name?: string
  phone?: string
  email?: string
}

interface IContactProps {
  show: boolean;
  contacts: Contact[];
  translateWay: 'rtl' | 'ltr' | 'utd';
  dropdownMobile?: boolean;
  isHomeMobileLocation?: boolean;
}

const Contacts: FC<IContactProps> = ({ show, contacts, translateWay, dropdownMobile, isHomeMobileLocation }) => {
  const { t } = useTranslation();

  const translateWayStyle = useMemo(() => ({
      ltr: 'top-0 left-0 h-screen w-64 border-r duration-500',
      rtl: 'top-0 -right-64 h-screen w-64 border-r duration-500',
      utd: '-top-full left-0 w-full border-b duration-500 pt-4 pb-[2.73rem]',
    }[translateWay]) || '',
    [ translateWay ]);

  const selectTranslateAnimationWay = () => {
    switch (translateWay) {
      case 'ltr':
        return show ? 'translate-x-42 2xl:translate-x-11.67v' : '-translate-x-57 2xl:-translate-x-15.56v';
      case 'rtl':
        return show ? '-translate-x-[29.9rem]' : '';
      case 'utd':
        if (show) {
          if (isHomeMobileLocation) {
            return dropdownMobile ? 'translate-y-[104vh]' : 'translate-y-[99vh]';
          }

          return dropdownMobile ? 'translate-y-[105vh]' : 'translate-y-[105vh]';
        }

        return '';
      default:
        return '';
    }
  };

  return (
    <div
      className={`fixed flex flex-col items-center 2xl:w-17.78v transform transition-all
                 ${translateWayStyle} 
                 ${selectTranslateAnimationWay()}
                 border-matterhorn bg-whiteSmoke z-30 pb-4 2xl:pb-[0.97vw]`}
    >
      <Logo align="center"/>
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col items-center text-matterhorn font-medium uppercase gap-8.2 2xl:gap-2.36v">
          {contacts.map(contact =>
            <div key={contact.id} className="flex flex-col items-center">
              {contact.name && <span className="text-sm 2xl:text-0.97v 2xl:leading-1.39v">{t(`${contact.name}`)}</span>}
              {contact.phone && <span className="text-xl 2xl:text-1.39v 2xl:leading-1.94v">{contact.phone}</span>}
              {contact.email && <span className="text-sm 2xl:text-0.97v 2xl:leading-1.39v">{contact.email}</span>}
            </div>)}

          <Button.Link
            styleType="rounded"
            className="s:mt-3 2xl:mt-[0.28vw] border border-matterhorn font-medium w-full text-center"
            href={VACANCIES_LINK}
            isBlank={true}
          >
            {t('pages.burro.command.buttonLink.title')}
          </Button.Link>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between text-matterhorn font-medium uppercase">
          <div className="flex flex-col items-center gap-1 2xl:gap-0.28v text-sm 2xl:text-0.97v 2xl:leading-1.39v">
            {SOCIAL_NETS.map(socialNet => {
              return (
                <div key={socialNet.id} className="text-center flex gap-1 2xl:gap-0.28v">
                  <div className="font-semibold">{socialNet.name} </div>
                  <Button.Link
                    styleType="transparent"
                    className="border-0 text-sm 2xl:text-0.97v 2xl:leading-1.39v"
                    href={socialNet.href}
                    isBlank={true}
                  >
                    {socialNet.contact}
                  </Button.Link>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col items-center mt-10 s:mt-[4.75rem] 2xl:mt-[5.28vw] text-s leading-4 2xl:text-0.97v 2xl:leading-1.39v text-center px-4 2xl:px-[1.11vw]">
            <div className="px-2 2xl:px-[0.42vw]">
              <div className="font-semibold">{t(ADDRESS_AND_DETAILS.companyName)}</div>
              <div><span>{t('contacts.addressAndDetails.titles.inn')} </span>{ADDRESS_AND_DETAILS.inn}</div>
              <div><span>{t('contacts.addressAndDetails.titles.ogrn')} </span>{ADDRESS_AND_DETAILS.ogrn}</div>
            </div>

            <div className="mt-2 2xl:mt-[0.42vw]"><span>{t('contacts.addressAndDetails.titles.address')}: </span> {t(ADDRESS_AND_DETAILS.companyAddress)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;