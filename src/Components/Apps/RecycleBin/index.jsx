import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import PastProjects from './PastProjects';
import Icon from './Icon';
import CrossIcon from '@/assets/icons/cross.svg';
import MinimizeIcon from '@/assets/icons/minimize.svg';
import RestoreIcon from '@/assets/icons/restore.svg';
import ProjectsIcon from '@/assets/icons/projects.svg';
import useOpenAppContext from '@/hooks/use-open-app-hook';

const RecycleBin = () => {
  const { handleMinimize, handleClose } = useOpenAppContext();

  const [loading, setLoading] = useState(true);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Fragment>
      {!loading && (
        <div className="absolute z-50 h-[calc(100vh-33px)] w-[100%] bg-[#333333]">
          <div className="h-[33px] w-full bg-[#2D2D2D]">
            <div className="flex flex-row items-center justify-end">
              <div className="absolute left-1/2 mx-auto -translate-x-1/2 transform justify-center text-sm text-gray-400">
                Recycle Bin
              </div>
              <div className="flex flex-row">
                <Image
                  onClick={() => handleMinimize('Recycle Bin')}
                  src={MinimizeIcon}
                  alt="icon"
                  className="m-1 mx-3 w-6"
                />
                <Image src={RestoreIcon} alt="icon" className="m-1 mx-3 w-3" />
                <Image
                  onClick={() => handleClose('Recycle Bin')}
                  src={CrossIcon}
                  alt="icon"
                  className="m-1 mx-3 w-6 hover:bg-red-700"
                />
              </div>
            </div>
            <div className="flex text-white">
              <div onClick={() => setShowProjects(true)}>
                <Icon icon={ProjectsIcon} title={'Past Projects'} />
              </div>
              {showProjects && (
                <PastProjects setShowProjects={setShowProjects} />
              )}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default RecycleBin;
