import { Fragment } from 'react';
import Image from 'next/image';

const Icon = ({ icon, title }) => {
  return (
    <Fragment>
      <div className="p-3 text-center w-fit h-fit flex flex-col">
        <Image src={icon} alt="desktop icon" className="w-12" />
        <p className="text-center text-sm m-auto">{title}</p>
      </div>
    </Fragment>
  );
};

export default Icon;
