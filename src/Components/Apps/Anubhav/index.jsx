import { Fragment, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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

import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

// import InstaIcon from '../../../assets/socials/instagram.svg';
// import TwitterIcon from '../../../assets/socials/twitter.svg';
// import LinkedinIcon from '../../../assets/socials/linkedin.svg';
// import GithubIcon from '../../../assets/socials/github.svg';

const Anubhav = () => {
  const { handleMinimize, handleClose } = useOpenAppContext();
  const router = useRouter();

  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  return (
    <Fragment>
      <div className="absolute z-50 h-[calc(100%-40px-33px)] w-[100%] bg-[#333333]">
        <div className="h-[33px] w-full bg-[#2D2D2D]">
          <div className="flex flex-row items-center justify-end">
            <div className="absolute left-1/2 mx-auto -translate-x-1/2 transform justify-center text-sm text-gray-400">
              About Anubhav
            </div>
            {showEducation && <Education setShowEducation={setShowEducation} />}
            {showExperience && (
              <Experience setShowExperience={setShowExperience} />
            )}
            {showSkills && <Skills setShowSkills={setShowSkills} />}
            <div className="flex flex-row">
              <Image
                onClick={() => handleMinimize('Anubhav')}
                src={MinimizeIcon}
                alt="icon"
                className="m-1 mx-3 w-6"
              />
              <Image src={RestoreIcon} alt="icon" className="m-1 mx-3 w-3" />
              <Image
                onClick={() => handleClose('Anubhav')}
                src={CrossIcon}
                alt="icon"
                className="m-1 mx-3 w-6 hover:bg-red-700"
              />
            </div>
          </div>
        </div>
        <div className="h-full bg-[#333333]">
          <Header />
          <div className="mt-3 flex flex-row justify-center">
            <AboutCard
              onClick={() => setShowEducation(true)}
              title={'Education'}
              icon={EducationGif}
              content={'All my education, from school to college.'}
            />
            <AboutCard
              onClick={() => setShowExperience(true)}
              title={'Experience'}
              icon={ExperienceGif}
              content={'All my industry level experience.'}
            />
            <AboutCard
              onClick={() => setShowSkills(true)}
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
              onClick={() => router.push('https://blog.anubhavsingh.dev')}
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
