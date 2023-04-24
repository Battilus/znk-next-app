import React, { FC, MouseEventHandler, useEffect, useRef, useState } from 'react';
import ArrowDown from '../../../../public/svg/arrow-down.svg';
import Button, { LinkButtonType } from './Button';
import { useTranslation } from 'next-i18next';
import { Transition } from '@headlessui/react';

interface IProps {
  className?: string;
  suggestions?: LinkButtonType[];
  handlers?: { [key: string]: (value: any) => void };
  dropdownHandler?: (val?: boolean) => void;
}

const DropdownMenuButton: FC<IProps> = (props) => {
  const { className, suggestions, handlers, dropdownHandler } = props;

  const [ show, setShow ] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const showHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setShow(!show);
  };

  useEffect(() => {
    if (dropdownHandler) {
      dropdownHandler(show);
    }
  }, [ show, dropdownHandler ]);

  const renderSuggestions = (suggestion: LinkButtonType) => {
    if (suggestion.type === 'dropdown') {
      return (
        <Button
          styleType={suggestion.styleType}
          className={suggestion.className}
          childrenClassName={suggestion.childrenClassName}
          onClick={showHandler}
        >
          <div className="flex items-center justify-center gap-2.5">
            {t(`${suggestion.description}`)}
            <ArrowDown
              className={`w-3.2 h-2 -mt-1 transition-transform duration-500 ${show ? 'rotate-180' : ''}`}/>
          </div>
        </Button>
      );
    }

    if (suggestion.type === 'link') {
      return (
        <Button.Link
          key={suggestion.description}
          styleType={suggestion.styleType}
          className={suggestion.className}
          href={suggestion.href}
          childrenClassName={suggestion.childrenClassName}
          childrenStyle={suggestion.childrenStyle}
        >
          {t(`${suggestion.description}`)}
        </Button.Link>
      );
    }

    if (suggestion.type === 'button') {
      return (
        <Button
          styleType={suggestion.styleType}
          className={suggestion.className}
          childrenClassName={suggestion.childrenClassName}
          onClick={
            (suggestion.onClickEn &&
              suggestion.onClickHandlerKey &&
              handlers) &&
            handlers[suggestion.onClickHandlerKey] || undefined
          }
        >
          {t(`${suggestion.description}`)}
        </Button>
      );
    }

    return null;
  };

  return (
    <div className={className} ref={dropdownRef}>
      {suggestions?.map((buttonItem) =>
        <div key={buttonItem.description} className={className}>
          {renderSuggestions(buttonItem)}

          {buttonItem.suggestions &&
            <Transition
              show={show}
              enter="transition-opacity duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <DropdownMenuButton
                className={className}
                suggestions={buttonItem.suggestions}
                handlers={handlers}
              />
            </Transition>
          }
        </div>,
      )}
    </div>
  );
};

export default DropdownMenuButton;