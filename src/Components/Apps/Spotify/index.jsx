import { Fragment } from 'react';
import Image from 'next/image';
import CrossIcon from '../../../assets/icons/cross.svg';
import MinimizeIcon from '../../../assets/icons/minimize.svg';
import RestoreIcon from '../../../assets/icons/restore.svg';
import useOpenAppContext from '@/hooks/use-open-app-hook';

const Spotify = () => {
  const { handleMinimize, handleClose } = useOpenAppContext();

  return (
    <Fragment>
      <div className="absolute z-50 h-[calc(100%-40px-33px)] w-[100%]">
        <div className="h-[33px] w-full bg-[#2D2D2D]">
          <div className="flex flex-row items-center justify-end">
            <div className="absolute left-1/2 mx-auto -translate-x-1/2 transform justify-center text-sm text-gray-400">
              Spotify
            </div>
            <div className="flex flex-row">
              <Image
                onClick={() => handleMinimize('Spotify')}
                placeholder="blur"
                src={MinimizeIcon}
                alt="icon"
                className="m-1 mx-3 w-6"
              />
              <Image
                placeholder="blur"
                src={RestoreIcon}
                alt="icon"
                className="m-1 mx-3 w-3"
              />
              <Image
                onClick={() => handleClose('Spotify')}
                placeholder="blur"
                src={CrossIcon}
                alt="icon"
                className="m-1 mx-3 w-6 hover:bg-red-700"
              />
            </div>
          </div>
        </div>
        <iframe
          className="h-full w-full rounded-none"
          src="https://open.spotify.com/embed/artist/2ijWbN5KykTYiBoVmhzCTU?utm_source=generator"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </Fragment>
  );
};

export default Spotify;
