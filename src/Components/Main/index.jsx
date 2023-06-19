import { Fragment, useState, useEffect } from 'react';
// import { ContextMenuTrigger, ContextMenu, MenuItem } from 'react-contextmenu';
import Image from 'next/image';
import Taskbar from '../Taskbar';
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
import CustomContextMenu from './CustomContextMenu';
import { useContextMenu } from 'react-contexify';
import 'react-contexify/ReactContexify.css';

import Wallpaper1 from '../../assets/walls/w1.jpg';
import Wallpaper2 from '../../assets/walls/w2.jpg';
import Wallpaper3 from '../../assets/walls/w3.jpg';
import Wallpaper4 from '../../assets/walls/w4.jpg';
import Wallpaper5 from '../../assets/walls/w5.jpg';
import Wallpaper6 from '../../assets/walls/w6.jpg';
import Wallpaper7 from '../../assets/walls/w7.jpg';
import Wallpaper8 from '../../assets/walls/w8.jpg';

const walls = [
  Wallpaper1,
  Wallpaper2,
  Wallpaper3,
  Wallpaper4,
  Wallpaper5,
  Wallpaper6,
  Wallpaper7,
  Wallpaper8,
];

const Main = () => {
  const { open, setOpen } = useOpenAppContext();
  const [currentBg, setCurrentBg] = useState(0);

  const [lock, setLock] = useState(false);
  const [openStartMenu, setOpenStartMenu] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setLock(false);
  };

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

  const { show } = useContextMenu({
    id: 'main-context',
  });

  function handleContextMenu(event) {
    show({
      event,
      props: {
        key: 'value',
      },
    });
  }

  const handleItemClick = ({ id, event, props }) => {
    switch (id) {
      case 'change-bg':
        currentBg === walls.length - 1
          ? setCurrentBg(0)
          : setCurrentBg(currentBg + 1);
        break;
      case 'reload':
        window.location.reload();
        break;
      default:
        console.log(event, props);
    }
  };

  return (
    <div onContextMenu={handleContextMenu}>
      <CustomContextMenu handleItemClick={handleItemClick} />

      <div
        onClick={(e) => handleClick(e)}
        className={
          'mx-auto select-none md:w-full' +
          (lock ? `block` : 'slidedown absolute -z-20')
        }
      >
        <LockScreen />
      </div>

      <div
        className={
          'flex select-none flex-col ' + (lock ? 'hidden' : 'slideup block')
        }
      >
        <div className="overflow-clip">
          <Image
            src={walls[currentBg]}
            alt="windows wallpaper"
            className="absolute -z-10 h-screen w-screen"
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
    </div>
  );
};

export default Main;
