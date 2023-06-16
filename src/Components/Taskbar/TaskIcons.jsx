import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import SoundIcon from '../../assets/icons/sound-icon.svg';
import WifiIcon from '../../assets/icons/wifi-icon.svg';
import BatteryIcon from '../../assets/icons/battery-icon.svg';
import ArrowIcon from '../../assets/icons/arrow-icon.svg';
import Image from 'next/image';

const TaskIcons = () => {
  return (
    <Fragment>
      <div className="icons flex flex-row justify-center items-center text-center">
        <Fragment>
          <Menu as="div" className="relative inline-block text-center">
            <div>
              <Menu.Button>
                <Image
                  src={ArrowIcon}
                  className="w-4 m-1.5"
                  alt="arrow icon"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute bottom-0 w-[105px] mb-10 origin-center rounded-md opacity-80 bg-[#1e1e1e] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={
                          (active ? 'text-white' : 'text-white') +
                          ' block px-4 py-2 text-sm'
                        }
                      >
                        Hey There!!
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </Fragment>

        <Image src={WifiIcon} className="w-5 m-1.5" alt="wifi icon" />
        <Image
          src={BatteryIcon}
          className="w-6 m-1.5"
          style={{ filter: 'invert(100%)' }}
          alt="battery icon"
        />
        <Image
          src={SoundIcon}
          className="w-6 h-6 m-1.5"
          alt="sound icon"
          style={{ filter: 'invert(100%)' }}
        />
      </div>
    </Fragment>
  );
};

export default TaskIcons;
