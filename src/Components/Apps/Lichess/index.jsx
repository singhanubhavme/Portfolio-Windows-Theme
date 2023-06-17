import { Fragment, useEffect } from 'react';
import './index.module.css';
import Image from 'next/image';
import CrossIcon from '../../../assets/icons/cross.svg';
import MinimizeIcon from '../../../assets/icons/minimize.svg';
import RestoreIcon from '../../../assets/icons/restore.svg';
import useOpenAppContext from '@/hooks/use-open-app-hook';

const Lichess = () => {
  const { handleMinimize, handleClose } = useOpenAppContext();

  return (
    <Fragment>
      <div className="absolute z-50 w-[50%] h-[100%] left-1/2 transform -translate-x-1/2">
        <div className="bg-[#2D2D2D] h-[33px] w-full">
          <div className="flex flex-row items-center justify-end">
            <div className="text-gray-400 text-sm mx-auto absolute left-1/2 transform -translate-x-1/2 justify-center">
              Lichess
            </div>
            <div className="flex flex-row">
              <Image
                onClick={() => handleMinimize('Lichess TV')}
                src={MinimizeIcon}
                alt="icon"
                className="w-6 m-1 mx-3"
              />
              <Image src={RestoreIcon} alt="icon" className="w-3 m-1 mx-3" />
              <Image
                onClick={() => handleClose('Lichess TV')}
                src={CrossIcon}
                alt="icon"
                className="w-6 m-1 mx-3 hover:bg-red-700"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-[#121212]">
          <iframe
            src="https://lichess.org/tv/frame?theme=brown&bg=dark"
            className="min-h-[90vh] min-w-[40vw] pb-10 mx-auto"
            allowtransparency="true"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </Fragment>
  );
};

export default Lichess;
