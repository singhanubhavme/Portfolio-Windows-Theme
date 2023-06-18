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
      <div className="h-100 animated fadeIn faster fixed inset-0 z-50 flex w-full items-center justify-center overflow-hidden bg-[rgba(0,0,0,.7)]">
        <Zoom duration={500}>
          <div className="relative h-[70%] w-[70%] rounded-md bg-white">
            <AiOutlineClose
              onClick={() => setShowExperience(false)}
              className="absolute right-0 m-2 h-6 w-6 rounded-full hover:cursor-pointer hover:bg-red-500 hover:text-white"
            />
            <div className="my-8 text-center text-4xl font-[600] text-[#5540AF]">
              Here&apos;s what I have done
            </div>
            <div className="h-[10px] opacity-0"></div>

            <span className="absolute left-[25%] h-[68%] w-[1.5px] bg-gray-600"></span>

            <div className="my-4 flex flex-row justify-evenly">
              <Image
                className="h-20 w-20 rounded-lg"
                src={Intern1Img}
                alt="intern"
              />
              <div className="w-1/2">
                <span className="text-sm font-bold text-gray-400">
                  <FaArrowRight className="absolute -ml-10 mt-0.5 h-[20px] w-[20px] text-[#5540AF]" />
                  <span className="absolute left-[25%] mt-1 h-4 w-4 -translate-x-1/2 transform rounded-full border-2 border-gray-400 bg-white"></span>
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

            <div className="my-4 flex flex-row justify-evenly">
              <Image
                className="h-20 w-20 rounded-full"
                src={Intern2Img}
                alt="intern"
              />
              <div className="w-1/2">
                <span className="text-sm font-bold text-gray-400">
                  <FaArrowRight className="absolute -ml-10 mt-0.5 h-[20px] w-[20px] text-[#5540AF]" />
                  <span className="absolute left-[25%] mt-1 h-4 w-4 -translate-x-1/2 transform rounded-full border-2 border-gray-400 bg-white"></span>
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

            <div className="my-4 flex flex-row justify-evenly">
              <Image
                className="-ml-[40px] w-[120px] translate-x-[20px] transform rounded-lg"
                src={Intern3Img}
                alt="intern"
              />
              <div className="w-1/2">
                <span className="text-sm font-bold text-gray-400">
                  <FaArrowRight className="absolute -ml-10 mt-0.5 h-[20px] w-[20px] text-[#5540AF]" />
                  <span className="absolute left-[25%] mt-1 h-4 w-4 -translate-x-1/2 transform rounded-full border-2 border-gray-400 bg-white"></span>
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
