import { Fragment, useEffect } from 'react';
import Image from 'next/image';
import CrossIcon from '../../../assets/icons/cross.svg';
import MinimizeIcon from '../../../assets/icons/minimize.svg';
import RestoreIcon from '../../../assets/icons/restore.svg';
import useOpenAppContext from '@/hooks/use-open-app-hook';

const Code = () => {
  const { handleMinimize, handleClose } = useOpenAppContext();

  return (
    <Fragment>
      <div className="absolute z-50 w-[100%] h-[calc(100%-40px-33px)]">
        <div className="bg-[#2D2D2D] h-[33px] w-full">
          <div className="flex flex-row items-center justify-end">
            <div className="text-gray-400 text-sm mx-auto absolute left-1/2 transform -translate-x-1/2 justify-center">
              Portfolio-Windows-Theme - Visual Studio Code
            </div>
            <div className="flex flex-row">
              <Image
                onClick={() => handleMinimize('Code')}
                src={MinimizeIcon}
                alt="icon"
                className="w-6 m-1 mx-3"
              />
              <Image src={RestoreIcon} alt="icon" className="w-3 m-1 mx-3" />
              <Image
                onClick={() => handleClose('Code')}
                src={CrossIcon}
                alt="icon"
                className="w-6 m-1 mx-3 hover:bg-red-700"
              />
            </div>
          </div>
        </div>
        <iframe
          src="https://github1s.com/singhanubhavme/Portfolio-Windows-Theme/blob/main/src/pages/index.js"
          title="Portfolio-Windows-Theme - Visual Studio Code"
          className="h-full w-full"
        ></iframe>
      </div>
    </Fragment>
  );
};

export default Code;
