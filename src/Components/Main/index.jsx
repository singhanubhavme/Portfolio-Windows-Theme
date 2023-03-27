const { Fragment, useState } = require("react")
import Image from "next/image";
import Taskbar from "../Taskbar";
import DefaultWallpaper from '../../assets/default-wallpaper.jpg';
import Icons from "../Icon";
import LockScreen from "../Lock";

const Main = () => {
    const [lock, setLock] = useState(true);

    const handleClick = (e) => {
        e.preventDefault();
        setLock(false);
    }

    return (
        <Fragment>

            <div onClick={(e) => handleClick(e)} className={(lock ? `block` : 'slidedown absolute -z-20')} >
                <LockScreen />
            </div>


            <div className={'flex flex-col ' + (lock ? 'hidden' : 'block slideup')}>
                <div className="overflow-clip">
                    <Image
                        src={DefaultWallpaper}
                        alt="windows wallpaper"
                        className="absolute w-screen h-screen -z-10"
                    />
                </div>
                <Icons />
                <Taskbar />
            </div>


        </Fragment>
    )
}

export default Main;