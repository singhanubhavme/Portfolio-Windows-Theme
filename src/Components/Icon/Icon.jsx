import { Fragment } from 'react';
import Image from 'next/image';

const Icon = ({ icon, title }) => {
  return (
    <Fragment>
      <div className="mx-auto flex h-fit w-fit flex-col p-3 text-center underline-offset-1 hover:cursor-pointer hover:bg-[#0386f955] hover:underline active:bg-[#0386f9a3]">
        <Image priority={true} src={icon} alt="icon" className="mx-auto w-12" />
        <p className="mx-auto pt-1 text-center text-sm">{title}</p>
      </div>
    </Fragment>
  );
};

export default Icon;
