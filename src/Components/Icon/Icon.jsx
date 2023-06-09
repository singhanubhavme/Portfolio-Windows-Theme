import { Fragment } from 'react';
import Image from 'next/image';

const Icon = ({ icon, title }) => {
  return (
    <Fragment>
      <div className="mx-auto flex h-fit w-fit flex-col p-3 text-center hover:bg-[#0386f955] active:bg-[#0386f9a3]">
        <Image src={icon} alt="icon" className="mx-auto w-12" />
        <p className="mx-auto pt-1 text-center text-sm">{title}</p>
      </div>
    </Fragment>
  );
};

export default Icon;
