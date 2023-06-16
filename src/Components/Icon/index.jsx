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
import Icon from './Icon';

const Icons = () => {
  return (
    <Fragment>
      <div className="icon-col flex flex-row">
        <div className="desktop-icons text-white">
          <Icon icon={MyDocumentsIcon} title={'Anubhav'} />
          <Icon icon={ThisPCIcon} title={'This PC'} />
          <Icon icon={RecycleBinIcon} title={'Recycle Bin'} />
          <Icon icon={ControlPanelIcon} title={'Control Panel'} />
          <Icon icon={VSCodeIcon} title={'Code'} />
          <Icon icon={SpotifyIcon} title={'Spotify'} />
          <Icon icon={CalcIcon} title={'Calculator'} />
          <Icon icon={TerminalIcon} title={'Terminal'} />
        </div>
        <div className="desktop-icons text-white">
          <Icon icon={ChromeIcon} title={'Chrome'} />
          <Icon icon={NotepadIcon} title={'Notepad'} />
        </div>
      </div>
    </Fragment>
  );
};

export default Icons;
