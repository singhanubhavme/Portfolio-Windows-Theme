import { Fragment, useEffect } from 'react';
import moment from 'moment';

const Calender = () => {
  moment().format();

  return (
    <Fragment>
      <div className="ml-4 mr-5 text-center text-sm text-white">
        <div className="">{moment().format('hh:mm A')}</div>
        <div className="">{moment().format('L')}</div>
      </div>
    </Fragment>
  );
};

export default Calender;
