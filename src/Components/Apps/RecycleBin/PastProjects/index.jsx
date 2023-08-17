import Zoom from 'react-reveal/Zoom';
import { AiOutlineClose } from 'react-icons/ai';
import Card from './Card';
import Project1Img from '../../../../assets/projects/project-1.png';
import Project2Img from '../../../../assets/projects/project-2.png';
import Project3Img from '../../../../assets/projects/project-3.png';
import Project4Img from '../../../../assets/projects/project-4.png';
import Project5Img from '../../../../assets/projects/project-5.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'NextJS and Tailwind-powered personal website showcasing projects, skills, and achievements with a visually Windows 10 design.',
    img: Project1Img,
    tech: 'NextJS, Tailwind',
  },
  {
    title: 'Imager',
    description:
      'An image sharing platform built on the MERN stack, allowing users to seamlessly share and explore a wide range of images.',
    img: Project2Img,
    tech: 'MERN',
  },
  {
    title: 'Covid Vaccine Finder',
    description:
      'Discover Covid vaccine information easily with this Express, EJS, and CSS-powered web application designed for user convenience.',
    img: Project3Img,
    tech: 'Express, EJS, CSS',
  },
  {
    title: 'Form Handler',
    description:
      'Simplify form submission handling using this Express, EJS, and Bootstrap-based application, ensuring efficient processing and management of user data.',
    img: Project4Img,
    tech: 'Express, EJS, BootStrap',
  },
  {
    title: 'Tetris Blockchain',
    description:
      'Experience a decentralized Tetris game on the blockchain, combining the power of Solidity and ReactJS for an innovative gaming experience.',
    img: Project5Img,
    tech: 'Solidity, ReactJS',
  },
];

const colors = [
  'text-red-600',
  'text-blue-600',
  'text-pink-600',
  'text-red-600',
  'text-blue-600',
  'text-pink-600',
  'text-red-600',
  'text-blue-600',
  'text-pink-600',
  'text-red-600',
  'text-blue-600',
  'text-pink-600',
];
function PastProjects({ setShowProjects }) {
  return (
    <div className="absolute z-[999]">
      <div className="h-100 animated fadeIn faster fixed inset-0 z-50 flex w-full items-center justify-center overflow-hidden bg-[rgba(0,0,0,.7)]">
        <Zoom duration={500}>
          <div className="relative h-[80%] w-[85%] rounded-md bg-gray-900">
            <AiOutlineClose
              onClick={() => setShowProjects(false)}
              className="absolute right-0 m-2 h-6 w-6 rounded-full text-white hover:cursor-pointer hover:bg-red-500"
            />
            <div className="my-8 text-center text-4xl font-[600] text-white">
              My Past Projects
            </div>
            <div className="mx-14 flex flex-row justify-center pt-8">
              <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                // spaceBetween={-50}
                navigation
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div>
                      <Card project={project} index={index} colors={colors} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default PastProjects;
