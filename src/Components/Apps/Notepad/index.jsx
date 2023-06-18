import { Fragment } from 'react';
import Image from 'next/image';
import CrossIcon from '../../../assets/icons/cross.svg';
import MinimizeIcon from '../../../assets/icons/minimize.svg';
import RestoreIcon from '../../../assets/icons/restore.svg';
import useOpenAppContext from '@/hooks/use-open-app-hook';

const Notepad = () => {
  const { handleMinimize, handleClose } = useOpenAppContext();

  return (
    <Fragment>
      <div className="absolute z-50 h-[calc(100%-40px-33px)] w-[100%]">
        <div className="h-[33px] w-full bg-[#2D2D2D]">
          <div className="flex flex-row items-center justify-end">
            <div className="absolute left-1/2 mx-auto -translate-x-1/2 transform justify-center text-sm text-gray-400">
              Notepad
            </div>
            <div className="flex flex-row">
              <Image
                onClick={() => handleMinimize('Notepad')}
                src={MinimizeIcon}
                alt="icon"
                className="m-1 mx-3 w-6"
              />
              <Image src={RestoreIcon} alt="icon" className="m-1 mx-3 w-3" />
              <Image
                onClick={() => handleClose('Notepad')}
                src={CrossIcon}
                alt="icon"
                className="m-1 mx-3 w-6 hover:bg-red-700"
              />
            </div>
          </div>
        </div>
        <div className="hover:cursor-text">
          <textarea
            autoFocus
            className="h-[calc(100vh-48px)] w-full p-1 text-xl focus:caret-black focus:outline-none"
            type="text"
            name="notepad"
            id="notepad"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Notepad;
