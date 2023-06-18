import { Fragment, useEffect } from 'react';
import Image from 'next/image';
import CrossIcon from '../../../assets/icons/cross.svg';
import MinimizeIcon from '../../../assets/icons/minimize.svg';
import RestoreIcon from '../../../assets/icons/restore.svg';
import useOpenAppContext from '@/hooks/use-open-app-hook';

// .dark.highlight.brown {
//   text-align: center;
// }

const Lichess = () => {
  const { handleMinimize, handleClose } = useOpenAppContext();

  return (
    <Fragment>
      <div className="absolute left-1/2 z-50 h-[100%] w-[50%] -translate-x-1/2 transform">
        <div className="h-[33px] w-full bg-[#2D2D2D]">
          <div className="flex flex-row items-center justify-end">
            <div className="absolute left-1/2 mx-auto -translate-x-1/2 transform justify-center text-sm text-gray-400">
              Lichess
            </div>
            <div className="flex flex-row">
              <Image
                onClick={() => handleMinimize('Lichess TV')}
                src={MinimizeIcon}
                alt="icon"
                className="m-1 mx-3 w-6"
              />
              <Image src={RestoreIcon} alt="icon" className="m-1 mx-3 w-3" />
              <Image
                onClick={() => handleClose('Lichess TV')}
                src={CrossIcon}
                alt="icon"
                className="m-1 mx-3 w-6 hover:bg-red-700"
              />
            </div>
          </div>
        </div>
        <div className="h-full w-full bg-[#121212]">
          <iframe
            src="https://lichess.org/tv/frame?theme=brown&bg=dark"
            className="mx-auto min-h-[90vh] min-w-[40vw] pb-10"
            allowtransparency="true"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </Fragment>
  );
};

export default Lichess;
