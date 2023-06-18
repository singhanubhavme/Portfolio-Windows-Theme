import { Fragment, useEffect, useState } from 'react';
import moment from 'moment';
import Image from 'next/image';
import LockScreenWallpaper from '../../assets/lock-screen-wallpaper.png';
import WifiIcon from '../../assets/icons/wifi-icon.svg';
import BatteryIcon from '../../assets/icons/battery-icon.svg';

const LockScreen = () => {
  const [t1, setT1] = useState('');
  const [t2, setT2] = useState('');

  useEffect(() => {
    moment().format();
  }, []);

  useEffect(() => {
    setT1(moment().format('HH:mm'));
    setT2(moment().format('dddd Mo MMMM'));
    const id = setInterval(() => {
      setT1(moment().format('HH:mm'));
      setT2(moment().format('dddd Mo MMMM'));
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Fragment>
      <div className="overflow-clip">
        <Image
          src={LockScreenWallpaper}
          alt="lock screen wallpaper"
          className="absolute -z-10 h-screen w-screen"
        />
        <div className="absolute bottom-20 pl-5 text-white">
          <div className="text-9xl">{t1}</div>
          <div className="text-5xl">{t2}</div>
        </div>

        <Image
          src={WifiIcon}
          className="absolute bottom-0 right-0 mb-8 mr-20 w-8"
          alt="wifi icon"
        />
        <Image
          src={BatteryIcon}
          className="absolute bottom-0 right-0 mb-10 mr-6 w-8"
          style={{ filter: 'invert(100%)' }}
          alt="battery icon"
        />
      </div>
    </Fragment>
  );
};

export default LockScreen;
