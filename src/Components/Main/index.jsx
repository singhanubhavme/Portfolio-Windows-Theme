const { Fragment, useState, useEffect } = require('react');
import Image from 'next/image';
import Taskbar from '../Taskbar';
import DefaultWallpaper from '../../assets/default-wallpaper.jpg';
import Icons from '../Icon';
import LockScreen from '../Lock';
import StartMenu from '../StartMenu';
import Code from '../Apps/Code';
import useOpenAppContext from '@/hooks/use-open-app-hook';
import Fade from 'react-reveal/Fade';
import Anubhav from '../Apps/Anubhav';
import ThisPC from '../Apps/ThisPC';
import RecycleBin from '../Apps/RecycleBin';
import ControlPanel from '../Apps/ControlPanel';
import Spotify from '../Apps/Spotify';
import Calculator from '../Apps/Calculator';
import Terminal from '../Apps/Terminal';
import Chrome from '../Apps/Chrome';
import Notepad from '../Apps/Notepad';
import Lichess from '../Apps/Lichess';

const Main = () => {
  const { open, setOpen } = useOpenAppContext();

  const [lock, setLock] = useState(false);
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

  const openedApps = open
    .filter((app) => app.open)
    .map((app) => {
      switch (app.name) {
        case 'Anubhav':
          return <Anubhav />;
        case 'This PC':
          return <ThisPC />;
        case 'Recycle Bin':
          return <RecycleBin />;
        case 'Control Panel':
          return <ControlPanel />;
        case 'Code':
          return <Code />;
        case 'Spotify':
          return <Spotify />;
        case 'Calculator':
          return <Calculator />;
        case 'Terminal':
          return <Terminal />;
        case 'Chrome':
          return <Chrome />;
        case 'Notepad':
          return <Notepad />;
        case 'Lichess TV':
          return <Lichess />;
        default:
          return null;
      }
    });

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

        {open.map((app) => (
          <div key={app.name}>
            {app.open && !app.minimized && (
              <Fade duration={500}>
                <Fragment>{openedApps}</Fragment>
              </Fade>
            )}
          </div>
        ))}

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
