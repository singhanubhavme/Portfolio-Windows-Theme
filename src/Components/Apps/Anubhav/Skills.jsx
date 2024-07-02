import Image from 'next/image';
import Zoom from 'react-reveal/Zoom';
import { AiOutlineClose } from 'react-icons/ai';
import BootstrapLogo from '@/assets/tech-stack/bootstrap.svg';
import CSSLogo from '@/assets/tech-stack/css.svg';
import EJSLogo from '@/assets/tech-stack/ejs.svg';
import ExpressLogo from '@/assets/tech-stack/expressjs.svg';
import GitLogo from '@/assets/tech-stack/git.svg';
import JavascriptLogo from '@/assets/tech-stack/javascript.svg';
import MaterialUILogo from '@/assets/tech-stack/materialui.svg';
import MongodbLogo from '@/assets/tech-stack/mongodb.svg';
import NodejsLogo from '@/assets/tech-stack/nodejs.svg';
import ReactLogo from '@/assets/tech-stack/react.png';
import JavaLogo from '@/assets/tech-stack/java.svg';
import PythonLogo from '@/assets/tech-stack/python.svg';
import TailwindLogo from '@/assets/tech-stack/tailwind.svg';
import NextLogo from '@/assets/tech-stack/next.svg';
import PptrLogo from '@/assets/tech-stack/pptr.svg';
import SolidityLogo from '@/assets/tech-stack/solidity.svg';
import PostmanLogo from '@/assets/tech-stack/postman.svg';
import HardhatLogo from '@/assets/tech-stack/hardhat.svg';

const itemData = [
  {
    img: MongodbLogo,
    title: 'Mongo DB',
  },
  {
    img: ExpressLogo,
    title: 'Express',
  },
  {
    img: ReactLogo,
    title: 'React JS',
  },
  {
    img: NodejsLogo,
    title: 'Node JS',
  },
  {
    img: NextLogo,
    title: 'Next JS',
  },
  {
    img: TailwindLogo,
    title: 'Tailwind',
  },
  {
    img: BootstrapLogo,
    title: 'BootStrap',
  },
  {
    img: CSSLogo,
    title: 'CSS',
  },

  {
    img: MaterialUILogo,
    title: 'Material UI',
  },
  {
    img: JavascriptLogo,
    title: 'JavaScript',
  },
  {
    img: JavaLogo,
    title: 'Java',
  },
  {
    img: PythonLogo,
    title: 'Python',
  },
  {
    img: SolidityLogo,
    title: 'Solidity',
  },
  {
    img: HardhatLogo,
    title: 'Hardhat',
  },
  {
    img: EJSLogo,
    title: 'EJS',
  },
  {
    img: PptrLogo,
    title: 'Puppeteer',
  },
  {
    img: GitLogo,
    title: 'GIT',
  },
  {
    img: PostmanLogo,
    title: 'Postman',
  },
];
function Skills({ setShowSkills }) {
  return (
    <div className="fixed z-[999] inset-0 h-screen flex items-center justify-center overflow-hidden bg-[rgba(0,0,0,.7)]">
      <Zoom duration={500}>
        <div className="relative h-[70%] w-[70%] rounded-md bg-gray-900">
          <AiOutlineClose
            onClick={() => setShowSkills(false)}
            className="absolute right-0 m-2 h-6 w-6 rounded-full text-white hover:cursor-pointer hover:bg-red-500"
          />
          <div className="my-8 text-center text-4xl font-[600] text-white">
            My Tech Stack
          </div>
          <div className="tech-stacks">
            <div className="flex flex-wrap items-center justify-center">
              {itemData.map((item, index) => (
                <div
                  className="text-center duration-200 ease-in hover:scale-75"
                  key={index}
                >
                  <Image
                    src={item.img}
                    className="mx-12 my-5 h-[55px] w-[60px]"
                    alt={item.title}
                  />
                  <span className="text-[#e1d6e1]">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default Skills;
