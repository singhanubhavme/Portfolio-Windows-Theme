import { Fragment, useState } from 'react';
import TaskbarIcon from '../../assets/icons/taskbar-icon.svg';
import Image from 'next/image';
import Search from './Search';
import PinnedIcons from './PinnedIcons';
import NotificationIcon from '../../assets/icons/notification-icon.svg';
import Calender from './Calender';
import TaskIcons from './TaskIcons';
import useOpenAppContext from '@/hooks/use-open-app-hook';

const Taskbar = ({ openStartMenu, setOpenStartMenu }) => {
  const { open, setOpen } = useOpenAppContext();

  const updateOpenStatus = (title) => {
    setOpen((open) => {
      return open.map((app) => {
        if (app.name === title) {
          return { ...app, open: true, minimized: false };
        }
        return app;
      });
    });
  };

  return (
    <Fragment>
      <div className="absolute bottom-0 bg-[#1e1e1e] w-full flex flex-row h-10">
        <div className="start flex flex-row">
          <div onClick={() => setOpenStartMenu(!openStartMenu)}>
            <Image
              src={TaskbarIcon}
              className="w-5 m-3"
              alt="taskbar icon"
              aria-hidden="true"
            />
          </div>
          <Search />
          <PinnedIcons />
          <Fragment>
            {open.map((app, index) => {
              if (app.minimized || app.open) {
                return (
                  <Image
                    onClick={() => updateOpenStatus(`${app.name}`)}
                    key={index}
                    src={app.img}
                    className={`w-7 py-1.5 box-content px-3 mx-0.5 border-b-4 ${
                      app.open && !app.minimized && 'bg-[#272626]'
                    } `}
                    alt={app.name}
                  />
                );
              }
            })}
          </Fragment>
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
