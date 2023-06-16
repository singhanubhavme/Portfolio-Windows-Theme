import { Fragment, useState } from 'react';
import TaskbarIcon from '../../assets/icons/taskbar-icon.svg';
import Image from 'next/image';
import Search from './Search';
import PinnedIcons from './PinnedIcons';
import NotificationIcon from '../../assets/icons/notification-icon.svg';
import Calender from './Calender';
import TaskIcons from './TaskIcons';
import { Menu } from '@headlessui/react';

const Taskbar = ({ openStartMenu, setOpenStartMenu }) => {
  return (
    <Fragment>
      <div className="absolute bottom-0 bg-[#1e1e1e] w-full flex flex-row h-12">
        <div className="start flex flex-row">
          <div onClick={() => setOpenStartMenu(!openStartMenu)}>
            <Image
              src={TaskbarIcon}
              className="w-7 m-3"
              alt="taskbar icon"
              aria-hidden="true"
            />
          </div>
          <Search />
          <PinnedIcons />
        </div>

        <div className="end flex flex-row ml-auto">
          <TaskIcons />
          <Calender />
          <Image
            src={NotificationIcon}
            className="w-5 mr-3 my-auto"
            alt="notification icon"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Taskbar;
