import { createContext, useEffect, useState } from 'react';
const OpenAppContext = createContext();
import ThisPCIcon from '../assets/icons/this-pc.ico';
import CalcIcon from '../assets/icons/calc.png';
import MyDocumentsIcon from '../assets/icons/my-documents.ico';
import VSCodeIcon from '../assets/icons/vscode-icon.svg';
import SpotifyIcon from '../assets/icons/spotify.svg';
import TerminalIcon from '../assets/icons/terminal.svg';
import ChromeIcon from '../assets/icons/chrome-icon.svg';
import RecycleBinIcon from '../assets/icons/recycle-bin.ico';
import ControlPanelIcon from '../assets/icons/control-panel.ico';
import NotepadIcon from '../assets/icons/notepad.ico';
import LichessIcon from '../assets/icons/lichess-icon.svg';

const apps = [
  {
    name: 'Anubhav',
    open: false,
    minimized: false,
    img: MyDocumentsIcon,
  },
  {
    name: 'This PC',
    open: false,
    minimized: false,
    img: ThisPCIcon,
  },
  {
    name: 'Recycle Bin',
    open: false,
    minimized: false,
    img: RecycleBinIcon,
  },
  {
    name: 'Control Panel',
    open: false,
    minimized: false,
    img: ControlPanelIcon,
  },
  {
    name: 'Code',
    open: false,
    minimized: false,
    img: VSCodeIcon,
  },
  {
    name: 'Spotify',
    open: false,
    minimized: false,
    img: SpotifyIcon,
  },
  {
    name: 'Calculator',
    open: false,
    minimized: false,
    img: CalcIcon,
  },
  {
    name: 'Terminal',
    open: false,
    minimized: false,
    img: TerminalIcon,
  },
  {
    name: 'Chrome',
    open: false,
    minimized: false,
    img: ChromeIcon,
  },
  {
    name: 'Notepad',
    open: false,
    minimized: false,
    img: NotepadIcon,
  },
  {
    name: 'Lichess TV',
    open: false,
    minimized: false,
    img: LichessIcon,
  },
];

function OpenAppProvider({ children }) {
  const [open, setOpen] = useState(apps);
  const handleClose = (name) => {
    setOpen((open) => {
      return open.map((app) => {
        if (app.name === name) {
          return { ...app, open: false, minimized: false };
        }
        return app;
      });
    });
  };

  const handleMinimize = (name) => {
    setOpen((open) => {
      return open.map((app) => {
        if (app.name === name) {
          return { ...app, minimized: true };
        }
        return app;
      });
    });
  };

  const value = {
    open,
    setOpen,
    handleMinimize,
    handleClose,
  };
  return (
    <OpenAppContext.Provider value={value}>{children}</OpenAppContext.Provider>
  );
}

export { OpenAppContext, OpenAppProvider };
