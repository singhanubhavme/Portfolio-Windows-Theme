import { createContext, useEffect, useState } from 'react';
const OpenAppContext = createContext();

const apps = [
  {
    name: 'Anubhav',
    open: false,
    minimized: false,
  },
  {
    name: 'This PC',
    open: false,
    minimized: false,
  },
  {
    name: 'Recycle Bin',
    open: false,
    minimized: false,
  },
  {
    name: 'Control Panel',
    open: false,
    minimized: false,
  },
  {
    name: 'Code',
    open: false,
    minimized: false,
  },
  {
    name: 'Spotify',
    open: false,
    minimized: false,
  },
  {
    name: 'Calculator',
    open: false,
    minimized: false,
  },
  {
    name: 'Terminal',
    open: false,
    minimized: false,
  },
  {
    name: 'Chrome',
    open: false,
    minimized: false,
  },
  {
    name: 'Notepad',
    open: false,
    minimized: false,
  },
];

function OpenAppProvider({ children }) {
  const [open, setOpen] = useState(apps);
  const value = {
    open,
    setOpen,
  };
  return (
    <OpenAppContext.Provider value={value}>{children}</OpenAppContext.Provider>
  );
}

export { OpenAppContext, OpenAppProvider };
