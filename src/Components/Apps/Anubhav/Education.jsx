import Image from 'next/image';
import Zoom from 'react-reveal/Zoom';
import Education1Img from '../../../assets/education-1.jpg';
import Education2Img from '../../../assets/education-2.png';
import { AiOutlineClose } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';

const Education = ({ setShowEducation }) => {
  return (
    <div className="absolute z-[999]">
      <div className="fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster bg-[rgba(0,0,0,.7)]">
        <Zoom duration={500}>
          <div className="bg-white w-[70%] h-[70%] relative rounded-md">
            <AiOutlineClose
              onClick={() => setShowEducation(false)}
              className="absolute right-0 m-2 w-6 h-6 hover:cursor-pointer hover:bg-red-500 hover:text-white rounded-full"
            />
            <div className="my-8 text-4xl text-center text-[#5540AF] font-[600]">
              Education
            </div>
            <div className="h-[10px] opacity-0"></div>

            <span className="h-[55%] mt-2 w-[1.5px] bg-gray-600 absolute left-[25%]"></span>

            <div className="flex flex-row justify-evenly my-4">
              <Image
                className="rounded-lg w-20 h-20"
                src={Education2Img}
                alt="college"
              />
              <div className="w-1/2">
                <span className="text-sm text-gray-400 font-bold">
                  Sep 2020 - July - 2024
                </span>
                <div className="font-3xl font-bold text-[#5540AF]">
                  <FaArrowRight className="absolute text-[#5540AF] -ml-10 mt-0.5 w-[20px] h-[20px]" />
                  <span className="w-4 h-4 rounded-full absolute border-2 border-gray-400 left-[25%] transform -translate-x-1/2 bg-white mt-1"></span>
                  GRAPHIC ERA DEEMED TO BE UNIVERSITY
                </div>
                <div>
                  Bachelor of Technology in Computer Science Engineering
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-evenly my-4">
              <Image
                className="rounded-full w-20 h-20"
                src={Education1Img}
                alt="school"
              />
              <div className="w-1/2">
                <span className="text-sm text-gray-400 font-bold">
                  Jan 2023 - Feb 2023
                </span>
                <div className="font-3xl font-bold text-[#5540AF]">
                  <FaArrowRight className="absolute text-[#5540AF] -ml-10 mt-0.5 w-[20px] h-[20px]" />
                  <span className="w-4 h-4 rounded-full absolute border-2 border-gray-400 left-[25%] transform -translate-x-1/2 bg-white mt-1"></span>
                  HELIGER BORDEN EDUCATION CENTRE
                </div>
                <div>Intermediate</div>
              </div>
            </div>

            <div className="flex flex-row justify-evenly my-4">
              <Image
                className="rounded-full w-20 h-20"
                src={Education1Img}
                alt="school"
              />
              <div className="w-1/2">
                <span className="text-sm text-gray-400 font-bold">
                  Mar 2023 - May 2023
                </span>
                <div className="font-3xl font-bold text-[#5540AF]">
                  <FaArrowRight className="absolute text-[#5540AF] -ml-10 mt-0.5 w-[20px] h-[20px]" />
                  <span className="w-4 h-4 rounded-full absolute border-2 border-gray-400 left-[25%] transform -translate-x-1/2 bg-white mt-1"></span>
                  HELIGER BORDEN EDUCATION CENTRE
                </div>
                <div>High School</div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Education;
