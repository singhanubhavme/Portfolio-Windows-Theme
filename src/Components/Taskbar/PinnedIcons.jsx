import { Fragment } from 'react';
import ChromeIcon from '../../assets/icons/chrome-icon.svg';
import VSCodeIcon from '../../assets/icons/vscode-icon.svg';
import LichessIcon from '../../assets/icons/lichess-icon.svg';
import Image from 'next/image';

const PinnedIcons = () => {
  return (
    <Fragment>
      <div className="flex flex-row ml-4">
        <Image
          src={ChromeIcon}
          className="w-6 ml-2.5 mr-2.5"
          alt="chrome icon"
        />
        <Image
          src={VSCodeIcon}
          className="w-6 ml-2.5 mr-2.5"
          alt="vs code icon"
        />
        <Image
          src={LichessIcon}
          className="w-6 ml-2.5 mr-2.5"
          alt="lichess icon"
        />
      </div>
    </Fragment>
  );
};

export default PinnedIcons;
