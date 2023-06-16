import { Fragment } from 'react';
import Image from 'next/image';

const Icon = ({ icon, title }) => {
  return (
    <Fragment>
      <div className="p-3 text-center w-fit h-fit flex flex-col mx-auto hover:bg-[#0386f955] active:bg-[#0386f9a3]">
        <Image src={icon} alt="icon" className="w-12 mx-auto" />
        <p className="text-center text-sm mx-auto pt-1">{title}</p>
      </div>
    </Fragment>
  );
};

export default Icon;
