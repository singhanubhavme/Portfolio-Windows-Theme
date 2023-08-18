import { Fragment, useEffect, useState } from 'react';
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

import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Resume from './Resume';
import Contact from './Contact';
import Social from './Social';
import Projects from './Projects';

const Anubhav = () => {
  const { handleMinimize, handleClose } = useOpenAppContext();

  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Fragment>
      {!loading && (
        <div className="absolute z-50 h-[calc(100%-40px-33px)] w-[100%] bg-[#333333]">
          <div className="h-[33px] w-full bg-[#2D2D2D]">
            <div className="flex flex-row items-center justify-end">
              <div className="absolute left-1/2 mx-auto -translate-x-1/2 transform justify-center text-sm text-gray-400">
                About Anubhav
              </div>
              {showEducation && (
                <Education setShowEducation={setShowEducation} />
              )}
              {showExperience && (
                <Experience setShowExperience={setShowExperience} />
              )}
              {showSkills && <Skills setShowSkills={setShowSkills} />}
              {showResume && <Resume setShowResume={setShowResume} />}
              {showContact && <Contact setShowContact={setShowContact} />}
              {showSocial && <Social setShowSocial={setShowSocial} />}
              {showProjects && <Projects setShowProjects={setShowProjects} />}
              <div className="flex flex-row">
                <Image
                  priority={true}
                  onClick={() => handleMinimize('Anubhav')}
                  src={MinimizeIcon}
                  alt="icon"
                  className="m-1 mx-3 w-6"
                />
                <Image
                  priority={true}
                  src={RestoreIcon}
                  alt="icon"
                  className="m-1 mx-3 w-3"
                />
                <Image
                  onClick={() => handleClose('Anubhav')}
                  priority={true}
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
                onClick={() => setShowContact(true)}
                title={'Contact'}
                icon={ContactGif}
                content={'Contact Me'}
              />
            </div>
            <div className="flex flex-row justify-center">
              <AboutCard
                onClick={() => setShowProjects(true)}
                title={'Projects'}
                icon={ProjectsGif}
                content={'Here are some of my projects.'}
              />

              <AboutCard
                onClick={() =>
                  window.open('https://blog.anubhavsingh.dev', '_blank')
                }
                title={'Blog'}
                icon={BlogGif}
                content={'I write sometimes.'}
              />

              <AboutCard
                onClick={() => setShowResume(true)}
                title={'Resume'}
                icon={ResumeGif}
                content={'Resume'}
              />
              <AboutCard
                onClick={() => setShowSocial(true)}
                title={'Socials'}
                icon={SocialsGif}
                content={'Keep Up with me'}
              />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Anubhav;
