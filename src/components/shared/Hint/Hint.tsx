import React, { FC, Fragment, ReactNode, useRef } from 'react';
import { Popover, Transition } from '@headlessui/react';

const timeoutDuration = 120;

type Props = {
  children: ReactNode;
  positionClassName: string;
  placement?: 'LB' | 'RB';
}

const Hint: FC<Props> = ({ children, positionClassName, placement='RB' }) => {
  const triggerRef = useRef();
  const timeOutRef = useRef();

  const handleEnter = (isOpen: boolean) => {
    clearTimeout(timeOutRef.current);
    if (!isOpen) {
      triggerRef.current?.click();
    }
  };

  const handleLeave = (isOpen: boolean) => {
    timeOutRef.current = setTimeout(() => {
      if (isOpen) {
        triggerRef.current?.click();
      }
    }, timeoutDuration);
  };

  const getPlacement = () => {
    return {
      'LB': '-translate-x-[20rem] 2xl:-translate-x-[22.22vw]', // 320px;
      'RB': 'translate-x-[1.125rem] 2xl:translate-x-[1.25vw]', // 18px;
    }[placement];
  }


  return (
    <Popover className={positionClassName}>
      {({ open }) => (
        <div
          onMouseEnter={() => handleEnter(open)}
          onMouseLeave={() => handleLeave(open)}
        >
          <Popover.Button
            ref={triggerRef}
            className="w-[1.125rem] 2xl:w-[1.25vw] h-[1.125rem] 2xl:h-[1.25vw] bg-whiteSmoke rounded-full
                       border 2xl:border-[0.07vw] border-whiteSmoke hover:border-matterhorn outline-0 transition duration-200"
          />
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className={`absolute z-10 w-[20rem] 2xl:w-[22.22vw] transform ${getPlacement()}`}
            >
              <div className="overflow-hidden rounded-lg 2xl:rounded-[0.56vw] shadow-lg border 2xl:border-[0.07vw] border-matterhorn">
                <div className="relative bg-white p-3.5 2xl:p-[0.97vw] text-xs 2xl:text-0.83v leading-[0.7875rem] 2xl:leading-[0.88vw]
                                text-justify flex flex-col gap-y-3.5 2xl:gap-y-0.97v">
                  {children}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
};

export default Hint;