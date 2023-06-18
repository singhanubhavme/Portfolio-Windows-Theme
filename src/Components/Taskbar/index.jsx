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
      <div className="absolute bottom-0 flex h-10 w-full flex-row bg-[#1e1e1e]">
        <div className="start flex flex-row">
          <div onClick={() => setOpenStartMenu(!openStartMenu)}>
            <Image
              src={TaskbarIcon}
              className="m-3 w-5"
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
                    className={`mx-0.5 box-content w-7 border-b-4 px-3 py-1.5 ${
                      app.open && !app.minimized && 'bg-[#272626]'
                    } `}
                    alt={app.name}
                  />
                );
              }
            })}
          </Fragment>
        </div>

        <div className="end ml-auto flex flex-row">
          <TaskIcons />
          <Calender />
          <Image
            src={NotificationIcon}
            className="my-auto mr-3 w-5"
            alt="notification icon"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Taskbar;
