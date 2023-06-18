import Image from 'next/image';
import Zoom from 'react-reveal/Zoom';
import Education1Img from '../../../assets/education-1.jpg';
import Education2Img from '../../../assets/education-2.png';
import { AiOutlineClose } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';

const Education = ({ setShowEducation }) => {
  return (
    <div className="absolute z-[999]">
      <div className="h-100 animated fadeIn faster fixed inset-0 z-50 flex w-full items-center justify-center overflow-hidden bg-[rgba(0,0,0,.7)]">
        <Zoom duration={500}>
          <div className="relative h-[70%] w-[70%] rounded-md bg-gray-900">
            <AiOutlineClose
              onClick={() => setShowEducation(false)}
              className="absolute right-0 m-2 h-6 w-6 rounded-full text-white hover:cursor-pointer hover:bg-red-500"
            />
            <div className="my-8 text-center text-4xl font-[600] text-white">
              Education
            </div>
            <div className="h-[10px] opacity-0"></div>

            <span className="absolute left-[25%] mt-2 h-[55%] w-[1.5px] bg-gray-600"></span>

            <div className="my-4 flex flex-row justify-evenly">
              <Image
                className="h-20 w-20 rounded-lg"
                src={Education2Img}
                alt="college"
              />
              <div className="w-1/2">
                <span className="text-sm font-bold text-gray-400">
                  Sep 2020 - July - 2024
                </span>
                <div className="font-3xl font-bold text-[#5540AF]">
                  <FaArrowRight className="absolute -ml-10 mt-0.5 h-[20px] w-[20px] text-[#5540AF]" />
                  <span className="absolute left-[25%] mt-1 h-4 w-4 -translate-x-1/2 transform rounded-full border-2 border-gray-400 bg-white"></span>
                  GRAPHIC ERA DEEMED TO BE UNIVERSITY
                </div>
                <div className="text-white">
                  Bachelor of Technology in Computer Science Engineering
                </div>
              </div>
            </div>

            <div className="my-4 flex flex-row justify-evenly">
              <Image
                className="h-20 w-20 rounded-full"
                src={Education1Img}
                alt="school"
              />
              <div className="w-1/2">
                <span className="text-sm font-bold text-gray-400">
                  Jan 2023 - Feb 2023
                </span>
                <div className="font-3xl font-bold text-[#5540AF]">
                  <FaArrowRight className="absolute -ml-10 mt-0.5 h-[20px] w-[20px] text-[#5540AF]" />
                  <span className="absolute left-[25%] mt-1 h-4 w-4 -translate-x-1/2 transform rounded-full border-2 border-gray-400 bg-white"></span>
                  HELIGER BORDEN EDUCATION CENTRE
                </div>
                <div className="text-white">Intermediate</div>
              </div>
            </div>

            <div className="my-4 flex flex-row justify-evenly">
              <Image
                className="h-20 w-20 rounded-full"
                src={Education1Img}
                alt="school"
              />
              <div className="w-1/2">
                <span className="text-sm font-bold text-gray-400">
                  Mar 2023 - May 2023
                </span>
                <div className="font-3xl font-bold text-[#5540AF]">
                  <FaArrowRight className="absolute -ml-10 mt-0.5 h-[20px] w-[20px] text-[#5540AF]" />
                  <span className="absolute left-[25%] mt-1 h-4 w-4 -translate-x-1/2 transform rounded-full border-2 border-gray-400 bg-white"></span>
                  HELIGER BORDEN EDUCATION CENTRE
                </div>
                <div className="text-white">High School</div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Education;
