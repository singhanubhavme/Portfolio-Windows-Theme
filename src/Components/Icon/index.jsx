import { Fragment } from 'react';
import ThisPCIcon from '../../assets/icons/this-pc.ico';
import CalcIcon from '../../assets/icons/calc.png';
import MyDocumentsIcon from '../../assets/icons/my-documents.ico';
import VSCodeIcon from '../../assets/icons/vscode-icon.svg';
import SpotifyIcon from '../../assets/icons/spotify.svg';
import TerminalIcon from '../../assets/icons/terminal.svg';
import ChromeIcon from '../../assets/icons/chrome-icon.svg';
import RecycleBinIcon from '../../assets/icons/recycle-bin.ico';
import ControlPanelIcon from '../../assets/icons/control-panel.ico';
import NotepadIcon from '../../assets/icons/notepad.ico';
import LichessIcon from '../../assets/icons/lichess-icon.svg';
import Icon from './Icon';
import useOpenAppContext from '@/hooks/use-open-app-hook';

const Icons = () => {
  const { open, setOpen } = useOpenAppContext();
  const updateOpenStatus = (title) => {
    setOpen((open) => {
      return open.map((app) => {
        if (app.name === title) {
          return { ...app, open: true };
        }
        return app;
      });
    });
  };
  return (
    <Fragment>
      <div className="icon-col flex flex-row">
        <div className="desktop-icons text-white">
          <div onDoubleClick={() => updateOpenStatus('Anubhav')}>
            <Icon icon={MyDocumentsIcon} title={'Anubhav'} />
          </div>
          <div /* onDoubleClick={() => updateOpenStatus('This PC')} */>
            <Icon icon={ThisPCIcon} title={'This PC'} />
          </div>
          <div /* onDoubleClick={() => updateOpenStatus('Recycle Bin')} */>
            <Icon icon={RecycleBinIcon} title={'Recycle Bin'} />
          </div>
          <div /* onDoubleClick={() => updateOpenStatus('Control Panel')} */>
            <Icon icon={ControlPanelIcon} title={'Control Panel'} />
          </div>
          <div onDoubleClick={() => updateOpenStatus('Code')}>
            <Icon icon={VSCodeIcon} title={'Code'} />
          </div>
          <div onDoubleClick={() => updateOpenStatus('Spotify')}>
            <Icon icon={SpotifyIcon} title={'Spotify'} />
          </div>
          <div onDoubleClick={() => updateOpenStatus('Calculator')}>
            <Icon icon={CalcIcon} title={'Calculator'} />
          </div>
        </div>
        <div className="desktop-icons text-white">
          <div /* onDoubleClick={() => updateOpenStatus('Terminal')} */>
            <Icon icon={TerminalIcon} title={'Terminal'} />
          </div>
          <div onDoubleClick={() => updateOpenStatus('Chrome')}>
            <Icon icon={ChromeIcon} title={'Chrome'} />
          </div>
          <div onDoubleClick={() => updateOpenStatus('Notepad')}>
            <Icon icon={NotepadIcon} title={'Notepad'} />
          </div>
          <div onDoubleClick={() => updateOpenStatus('Lichess TV')}>
            <Icon icon={LichessIcon} title={'Lichess TV'} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Icons;
