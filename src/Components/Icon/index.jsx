import { Fragment } from 'react';
import ThisPCIcon from '../../assets/icons/this-pc.ico';
import CalcIcon from '../../assets/icons/calc.png';
import MyDocumentsIcon from '../../assets/icons/my-documents.ico';
import VSCodeIcon from '../../assets/icons/vscode-icon.svg';
import SpotifyIcon from '../../assets/icons/spotify.svg';
import TerminalIcon from '../../assets/icons/terminal.svg';
import ChromeIcon from '../../assets/icons/chrome-icon.svg';
import RecycleBinIcon from '../../assets/icons/recycle-bin-full.ico';
import NotepadIcon from '../../assets/icons/notepad.ico';
import LichessIcon from '../../assets/icons/lichess-icon.svg';
import Icon from './Icon';
import useOpenAppContext from '@/hooks/use-open-app-hook';
import toast, { Toaster } from 'react-hot-toast';

const Icons = () => {
  const notify = () =>
    toast(
      "Unfortunately, my computer's hospitality skills are quite limited, and it's refusing to let anyone in, including me!!",
      {
        duration: 5000,
        position: 'top-center',
        style: {
          minWidth: '50%',
          fontSize: '1.1em',
          textAlign: 'center',
          background: '#333333',
          color: 'white',
        },
        icon: '😔',
      }
    );

  const { setOpen } = useOpenAppContext();
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
      <Toaster />
      <div className="icon-col flex flex-row">
        <div className="desktop-icons text-white">
          <div onClick={() => updateOpenStatus('Anubhav')}>
            <Icon icon={MyDocumentsIcon} title={'Anubhav'} />
          </div>
          <div
            onClick={notify}
            // onClick={() => updateOpenStatus('This PC')}
          >
            <Icon icon={ThisPCIcon} title={'This PC'} />
          </div>
          <div onClick={() => updateOpenStatus('Recycle Bin')}>
            <Icon icon={RecycleBinIcon} title={'Recycle Bin'} />
          </div>
          <div onClick={() => updateOpenStatus('Code')}>
            <Icon icon={VSCodeIcon} title={'Code'} />
          </div>
          <div onClick={() => updateOpenStatus('Spotify')}>
            <Icon icon={SpotifyIcon} title={'Spotify'} />
          </div>
          <div onClick={() => updateOpenStatus('Calculator')}>
            <Icon icon={CalcIcon} title={'Calculator'} />
          </div>
          <div onClick={() => updateOpenStatus('Terminal')}>
            <Icon icon={TerminalIcon} title={'Terminal'} />
          </div>
        </div>
        <div className="desktop-icons text-white">
          <div onClick={() => updateOpenStatus('Chrome')}>
            <Icon icon={ChromeIcon} title={'Chrome'} />
          </div>
          <div onClick={() => updateOpenStatus('Notepad')}>
            <Icon icon={NotepadIcon} title={'Notepad'} />
          </div>
          <div onClick={() => updateOpenStatus('Lichess TV')}>
            <Icon icon={LichessIcon} title={'Lichess TV'} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Icons;
