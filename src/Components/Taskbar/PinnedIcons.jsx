import { Fragment } from 'react';
import ChromeIcon from '../../assets/icons/chrome-icon.svg';
import VSCodeIcon from '../../assets/icons/vscode-icon.svg';
import LichessIcon from '../../assets/icons/lichess-icon.svg';
import Image from 'next/image';

const PinnedIcons = () => {
  return (
    <Fragment>
      <div className="ml-4 flex flex-row">
        <Image
          src={ChromeIcon}
          placeholder="blur"
          className="ml-2.5 mr-2.5 w-6"
          alt="chrome icon"
        />
        <Image
          src={VSCodeIcon}
          placeholder="blur"
          className="ml-2.5 mr-2.5 w-6"
          alt="vs code icon"
        />
        <Image
          src={LichessIcon}
          placeholder="blur"
          className="ml-2.5 mr-2.5 w-6"
          alt="lichess icon"
        />
      </div>
    </Fragment>
  );
};

export default PinnedIcons;
