const { Fragment } = require("react")
import Image from "next/image";
import Taskbar from "../Taskbar";
import DefaultWallpaper from '../../assets/default-wallpaper.jpg';
import Icons from "./Icons";

const Main = () => {
    return (
        <Fragment>
            <div className="flex flex-col">
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