import { Fragment, useEffect } from "react"
import moment from 'moment';

const Calender = () => {
    moment().format();

    return (
        <Fragment>
            <div className="text-white text-sm text-center mr-5 ml-4">
                <div className="">
                    {moment().format('hh:mm A')}
                </div>
                <div className="">
                    {moment().format('L')}
                </div>
            </div>
        </Fragment>
    );
}

export default Calender;