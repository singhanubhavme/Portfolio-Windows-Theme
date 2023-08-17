/* eslint-disable no-fallthrough */
import { Fragment, useState, useEffect } from 'react';
import useOpenAppContext from '@/hooks/use-open-app-hook';
import Image from 'next/image';
import Taskbar from '../Taskbar';
import Icons from '../Icon';
import LockScreen from '../Lock';
import StartMenu from '../StartMenu';
import Code from '../Apps/Code';
import Fade from 'react-reveal/Fade';
import Anubhav from '../Apps/Anubhav';
import ThisPC from '../Apps/ThisPC';
import RecycleBin from '../Apps/RecycleBin';
import Spotify from '../Apps/Spotify';
import Calculator from '../Apps/Calculator';
import Terminal from '../Apps/Terminal';
import Chrome from '../Apps/Chrome';
import Notepad from '../Apps/Notepad';
import Lichess from '../Apps/Lichess';
import CustomContextMenu from './CustomContextMenu';
import { useContextMenu } from 'react-contexify';
import 'react-contexify/ReactContexify.css';
import { Fireworks } from '@fireworks-js/react';

import Wallpaper1 from '../../assets/walls/w1.jpg';
import Wallpaper2 from '../../assets/walls/w2.jpg';
import Wallpaper3 from '../../assets/walls/w3.jpg';
import Wallpaper4 from '../../assets/walls/w4.jpg';
import Wallpaper5 from '../../assets/walls/w5.jpg';
import Wallpaper6 from '../../assets/walls/w6.jpg';
import Wallpaper7 from '../../assets/walls/w7.jpg';
import Wallpaper8 from '../../assets/walls/w8.jpg';
import SmallScreenSize from './SmallScreenSize';

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
  const { open } = useOpenAppContext();
  const [currentBg, setCurrentBg] = useState(0);

  const [lock, setLock] = useState(true);
  const [openStartMenu, setOpenStartMenu] = useState(false);

  const fireworkStyle = {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    position: 'fixed',
    background: 'rgba(0,0,0,.9)',
  };

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
          if (!app.minimized) return <Anubhav key={app.name} />;
        case 'This PC':
          if (!app.minimized) return <ThisPC key={app.name} />;
        case 'Recycle Bin':
          if (!app.minimized) return <RecycleBin key={app.name} />;
        case 'Code':
          if (!app.minimized) return <Code key={app.name} />;
        case 'Spotify':
          if (!app.minimized) return <Spotify key={app.name} />;
        case 'Calculator':
          if (!app.minimized) return <Calculator key={app.name} />;
        case 'Terminal':
          if (!app.minimized) return <Terminal key={app.name} />;
        case 'Chrome':
          if (!app.minimized) return <Chrome key={app.name} />;
        case 'Notepad':
          if (!app.minimized) return <Notepad key={app.name} />;
        case 'Lichess TV':
          if (!app.minimized) return <Lichess key={app.name} />;
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
      case 'lock':
        setLock(true);
        break;
      default:
        console.log(event, props);
    }
  };

  return (
    <Fragment>
      <SmallScreenSize />
      <div className="hidden md:block">
        <div
          onContextMenu={(e) => e.preventDefault()}
          onClick={(e) => handleClick(e)}
          className={
            'mx-auto select-none md:w-full' +
            (lock ? `block` : 'slidedown absolute -z-20')
          }
        >
          <LockScreen />
        </div>

        <div onContextMenu={handleContextMenu}>
          <CustomContextMenu handleItemClick={handleItemClick} />

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
              <Fragment>
                <StartMenu
                  openStartMenu={openStartMenu}
                  setOpenStartMenu={setOpenStartMenu}
                />
                <Fireworks
                  options={{
                    speed: 3,
                    mouse: { click: true, move: false, max: 3 },
                    intensity: 50,
                  }}
                  style={fireworkStyle}
                />
              </Fragment>
            )}
            {open.map((app, index) => (
              <div key={index}>
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
      </div>
    </Fragment>
  );
};

export default Main;
