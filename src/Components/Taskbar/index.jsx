import { Fragment } from "react";
import TaskbarIcon from '../../assets/icons/taskbar-icon.svg';
import Image from "next/image";
import Search from "./Search";
import PinnedIcons from "./PinnedIcons";

const Taskbar = () => {
    return (
        <Fragment>
            <div className="absolute bottom-0 bg-[#1e1e1e] w-full flex flex-row h-12">
                <Image src={TaskbarIcon} className="w-5 ml-4" alt="taskbar icon" />
                <Search />
                <PinnedIcons />
            </div>
        </Fragment>
    );
}

export default Taskbar;