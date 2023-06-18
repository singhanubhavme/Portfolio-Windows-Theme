import Image from 'next/image';
import Zoom from 'react-reveal/Zoom';
import Intern1Img from '../../../assets/intern-1.png';
import Intern3Img from '../../../assets/intern-3.png';
import Intern2Img from '../../../assets/intern-2.jpg';
import { AiOutlineClose } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';

function Experience({ setShowExperience }) {
  return (
    <div className="absolute z-[999]">
      <div className="fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster bg-[rgba(0,0,0,.7)]">
        <Zoom duration={500}>
          <div className="bg-white w-[70%] h-[70%] relative rounded-md">
            <AiOutlineClose
              onClick={() => setShowExperience(false)}
              className="absolute right-0 m-2 w-6 h-6 hover:cursor-pointer hover:bg-red-500 hover:text-white rounded-full"
            />
            <div className="my-8 text-4xl text-center text-[#5540AF] font-[600]">
              Here&apos;s what I have done
            </div>
            <div className="h-[10px] opacity-0"></div>

            <span className="h-[68%] w-[1.5px] bg-gray-600 absolute left-[25%]"></span>

            <div className="flex flex-row justify-evenly my-4">
              <Image
                className="rounded-lg w-20 h-20"
                src={Intern1Img}
                alt="intern"
              />
              <div className="w-1/2">
                <span className="text-sm text-gray-400 font-bold">
                  <FaArrowRight className="absolute text-[#5540AF] -ml-10 mt-0.5 w-[20px] h-[20px]" />
                  <span className="w-4 h-4 rounded-full absolute border-2 border-gray-400 left-[25%] transform -translate-x-1/2 bg-white mt-1"></span>
                  Sep 2022 - Dec 2022
                </span>
                <div className="font-3xl font-bold text-[#5540AF]">
                  WEB3 DEVELOPER
                </div>
                <div>
                  At Tecksteck Solutions, I worked as a WEB3 DEVELOPER,
                  developing cutting-edge blockchain solutions.
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-evenly my-4">
              <Image
                className="rounded-full w-20 h-20"
                src={Intern2Img}
                alt="intern"
              />
              <div className="w-1/2">
                <span className="text-sm text-gray-400 font-bold">
                  <FaArrowRight className="absolute text-[#5540AF] -ml-10 mt-0.5 w-[20px] h-[20px]" />
                  <span className="w-4 h-4 rounded-full absolute border-2 border-gray-400 left-[25%] transform -translate-x-1/2 bg-white mt-1"></span>
                  Jan 2023 - Feb 2023
                </span>
                <div className="font-3xl font-bold text-[#5540AF]">
                  FRONTEND DEVELOPER
                </div>
                <div>
                  At Jooz Online, I worked as a FRONTEND DEVELOPER, developing
                  Food Delivery Mobile based website using ReactJS.
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-evenly my-4">
              <Image
                className="rounded-lg w-[120px] transform translate-x-[20px] -ml-[40px]"
                src={Intern3Img}
                alt="intern"
              />
              <div className="w-1/2">
                <span className="text-sm text-gray-400 font-bold">
                  <FaArrowRight className="absolute text-[#5540AF] -ml-10 mt-0.5 w-[20px] h-[20px]" />
                  <span className="w-4 h-4 rounded-full absolute border-2 border-gray-400 left-[25%] transform -translate-x-1/2 bg-white mt-1"></span>
                  Mar 2023 - May 2023
                </span>
                <div className="font-3xl font-bold text-[#5540AF]">
                  FULL STACK DEVELOPER
                </div>
                <div>
                  At CraftIndika, I worked as a FULL STACK MERN DEVELOPER, where
                  I was working on the E-Commerce solution for the company,
                  creating seamless experiences for users.
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Experience;
