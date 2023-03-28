import { Fragment, useState } from "react";
import TaskbarIcon from '../../assets/icons/taskbar-icon.svg';
import Image from "next/image";
import Search from "./Search";
import PinnedIcons from "./PinnedIcons";
import NotificationIcon from "../../assets/icons/notification-icon.svg";
import Calender from "./Calender";
import TaskIcons from "./TaskIcons";
import { Menu } from '@headlessui/react'
import StartMenu from "../StartMenu";

const Taskbar = () => {

    return (
        <Fragment>
            <div className="absolute bottom-0 bg-[#1e1e1e] w-full flex flex-row h-12">
                <div className="start flex flex-row">
                    <Image src={TaskbarIcon} className="w-5 ml-4 mt-4" alt="taskbar icon" aria-hidden="true" />
                    <Search />
                    <PinnedIcons />
                </div>

                <div className="end flex flex-row ml-auto">
                    <TaskIcons />
                    <Calender />
                    <Image src={NotificationIcon} className="w-5 mr-3" alt="notification icon" />
                </div>
            </div>
        </Fragment>
    );
}

export default Taskbar;