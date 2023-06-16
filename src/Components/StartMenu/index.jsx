import { useEffect } from 'react';
import Fade from 'react-reveal/Fade';

const StartMenu = ({ openStartMenu, setOpenStartMenu }) => {
  return (
    <Fade bottom duration={500} easing={'cubic-bezier(0, 0, 0.58, 1)'}>
      <div className="absolute z-20 bottom-[45px] h-[85vh] w-[24vw] bg-[#232323] text-white">
        <div>Start</div>
      </div>
    </Fade>
  );
};

export default StartMenu;
