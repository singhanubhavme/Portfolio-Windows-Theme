import { Fragment } from 'react';
import Image from 'next/image';
import Header from './Header';
import CrossIcon from '../../../assets/icons/cross.svg';
import MinimizeIcon from '../../../assets/icons/minimize.svg';
import RestoreIcon from '../../../assets/icons/restore.svg';
import useOpenAppContext from '@/hooks/use-open-app-hook';
import AboutCard from './AboutCard';
import EducationGif from '../../../assets/gif/education.json';
import ExperienceGif from '../../../assets/gif/experience.json';
import SkillsGif from '../../../assets/gif/skills.json';
import ContactGif from '../../../assets/gif/contact.json';
import BlogGif from '../../../assets/gif/blog.json';
import ResumeGif from '../../../assets/gif/resume.json';
import ProjectsGif from '../../../assets/gif/projects.json';
import SocialsGif from '../../../assets/gif/socials.json';

import InstaIcon from '../../../assets/socials/instagram.svg';
import TwitterIcon from '../../../assets/socials/twitter.svg';
import LinkedinIcon from '../../../assets/socials/linkedin.svg';
import GithubIcon from '../../../assets/socials/github.svg';

const Anubhav = () => {
  const { handleMinimize, handleClose } = useOpenAppContext();

  return (
    <Fragment>
      <div className="absolute z-50 w-[100%] h-[calc(100%-40px-33px)] bg-[#333333]">
        <div className="bg-[#2D2D2D] h-[33px] w-full">
          <div className="flex flex-row items-center justify-end">
            <div className="text-gray-400 text-sm mx-auto absolute left-1/2 transform -translate-x-1/2 justify-center">
              About Anubhav
            </div>
            <div className="flex flex-row">
              <Image
                onClick={() => handleMinimize('Anubhav')}
                src={MinimizeIcon}
                alt="icon"
                className="w-6 m-1 mx-3"
              />
              <Image src={RestoreIcon} alt="icon" className="w-3 m-1 mx-3" />
              <Image
                onClick={() => handleClose('Anubhav')}
                src={CrossIcon}
                alt="icon"
                className="w-6 m-1 mx-3 hover:bg-red-700"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#333333] h-full">
          <Header />
          <div className="flex flex-row justify-center mt-3">
            <AboutCard
              title={'Education'}
              icon={EducationGif}
              content={'All my education, from school to college.'}
            />
            <AboutCard
              title={'Experience'}
              icon={ExperienceGif}
              content={'All my industry level experience.'}
            />
            <AboutCard
              title={'Skills'}
              icon={SkillsGif}
              content={'The tech stacks and languages.'}
            />
            <AboutCard
              title={'Contact'}
              icon={ContactGif}
              content={'Contact Me'}
            />
          </div>
          <div className="flex flex-row justify-center">
            <AboutCard
              title={'Projects'}
              icon={ProjectsGif}
              content={'Here are some of my projects.'}
            />
            <AboutCard
              title={'Blog'}
              icon={BlogGif}
              content={'I write sometimes.'}
            />
            <AboutCard title={'Resume'} icon={ResumeGif} content={'Resume'} />
            <AboutCard
              title={'Socials'}
              icon={SocialsGif}
              content={'Keep Up with me'}
            />
          </div>
          {/* <div className="flex flex-row justify-center bg-[#333333]">
            <Image className="w-8 mx-2 m-1" src={InstaIcon} alt="socials" />
            <Image className="w-8 mx-2 m-1" src={LinkedinIcon} alt="socials" />
            <Image className="w-8 mx-2 m-1" src={TwitterIcon} alt="socials" />
            <Image className="w-8 mx-2 m-1" src={GithubIcon} alt="socials" />
          </div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Anubhav;
