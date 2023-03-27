const { Fragment } = require("react")
import Image from "next/image";
import Taskbar from "../Taskbar";
import DefaultWallpaper from '../../assets/default-wallpaper.jpg';

const Main = () => {
    return (
        <Fragment>
            <div className="container overflow-clip">
                <Image src={DefaultWallpaper} alt="windows wallpaper" className="absolute w-screen h-screen -z-10" />
                <Taskbar />
            </div>
        </Fragment>
    )
}

export default Main;