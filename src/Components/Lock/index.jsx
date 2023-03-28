import { Fragment, useEffect } from "react";
import moment from 'moment';
import Image from "next/image";
import LockScreenWallpaper from '../../assets/lock-screen-wallpaper.png';
import WifiIcon from '../../assets/icons/wifi-icon.svg';
import BatteryIcon from '../../assets/icons/battery-icon.svg';

const LockScreen = () => {

    useEffect(() => {
        moment().format();
    }, []);

    return (
        <Fragment>
            <div className="overflow-clip">
                <Image
                    src={LockScreenWallpaper}
                    alt="lock screen wallpaper"
                    className="absolute w-screen h-screen -z-10"
                />
                <div className="pl-5 absolute bottom-20 text-white">
                    <div className="text-9xl">
                        {moment().format('HH:mm')}
                    </div>
                    <div className="text-5xl">
                        {moment().format('dddd Mo MMMM')}
                    </div>
                </div>

                <Image src={WifiIcon} className="w-8 absolute bottom-0 right-0 mr-20 mb-8" alt="wifi icon" />
                <Image src={BatteryIcon} className="w-8 absolute bottom-0 right-0 mr-6 mb-10" style={{ filter: 'invert(100%)' }} alt="battery icon" />
            </div>
        </Fragment>
    );
}

export default LockScreen;