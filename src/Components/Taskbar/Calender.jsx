import { Fragment, useEffect, useState } from 'react';
import moment from 'moment';

const Calender = () => {
  const [t1, setT1] = useState(moment().format('hh:mm A'));
  const [t2, setT2] = useState(moment().format('DD-MM-YYYY'));

  useEffect(() => {
    setT1(moment().format('hh:mm A'));
    setT2(moment().format('DD-MM-YYYY'));
    const id = setInterval(() => {
      setT1(moment().format('hh:mm A'));
      setT2(moment().format('DD-MM-YYYY'));
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Fragment>
      <div className="ml-4 mr-5 text-center text-sm text-white">
        <div className="">{t1}</div>
        <div className="">{t2}</div>
      </div>
    </Fragment>
  );
};

export default Calender;
