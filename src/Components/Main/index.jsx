const { Fragment, useState, useEffect } = require('react');
import Image from 'next/image';
import Taskbar from '../Taskbar';
import DefaultWallpaper from '../../assets/default-wallpaper.jpg';
import Icons from '../Icon';
import LockScreen from '../Lock';
import StartMenu from '../StartMenu';
import Code from '../Apps/Code';
import useOpenAppContext from '@/hooks/use-open-app-hook';

const Main = () => {
  const { open, setOpen } = useOpenAppContext();

  const [lock, setLock] = useState(true);
  const [openStartMenu, setOpenStartMenu] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setLock(false);
  };

  // useEffect(() => {
  //     const handleContextmenu = e => {
  //         e.preventDefault();
  //     }
  //     document.addEventListener('contextmenu', handleContextmenu);
  //     return () => {
  //         document.removeEventListener('contextmenu', handleContextmenu);
  //     }
  // }, []);

  useEffect(() => {
    const onEnterOrSpace = (e) => {
      if (e.code === 'Enter' || e.code === 'Space') {
        setLock(false);
      }
    };
    document.addEventListener('keypress', onEnterOrSpace);
    return () => {
      document.removeEventListener('enter', onEnterOrSpace);
    };
  }, []);

  return (
    <Fragment>
      <div
        onClick={(e) => handleClick(e)}
        className={
          'select-none ' + (lock ? `block` : 'slidedown absolute -z-20')
        }
      >
        <LockScreen />
      </div>

      <div
        className={
          'flex flex-col select-none ' + (lock ? 'hidden' : 'block slideup')
        }
      >
        <div className="overflow-clip">
          <Image
            src={DefaultWallpaper}
            alt="windows wallpaper"
            className="absolute w-screen h-screen -z-10"
          />
        </div>
        {openStartMenu && (
          <StartMenu
            openStartMenu={openStartMenu}
            setOpenStartMenu={setOpenStartMenu}
          />
        )}
        <Code />
        <Icons />
        <Taskbar
          openStartMenu={openStartMenu}
          setOpenStartMenu={setOpenStartMenu}
        />
      </div>
    </Fragment>
  );
};

export default Main;
