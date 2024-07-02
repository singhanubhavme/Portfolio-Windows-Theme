import Image from 'next/image';
import CrossIcon from '@/assets/icons/cross.svg';
import MinimizeIcon from '@/assets/icons/minimize.svg';
import TerminalIcon from '@/assets/icons/terminal.svg';
import useOpenAppContext from '@/hooks/use-open-app-hook';
import Draggable from 'react-draggable';
import { ReactTerminal } from 'react-terminal';

const Terminal = () => {
  const { handleMinimize, handleClose } = useOpenAppContext();

  const theme = {
    themeBGColor: '#333333',
    themeToolbarColor: '#333333',
    themeColor: '#FFFEFC',
    themePromptColor: 'white',
  };
  const commands = {
    whoami: 'Hey There, I am Anubhav Singh',
    whatido:
      'MERN developer | Java, JavaScript | Coding aficionado | Chess enthusiast',
    cd: (directory) => `changed path to ${directory}`,
    help: (
      <span>
        <strong>clear</strong> - clears the console. <br />
        <strong>whoami</strong> - about me. <br />
        <strong>whatido</strong> - also about me. <br />
        <strong>mini</strong> - minimize the terminal. <br />
        <strong>exit</strong> - close the terminal. <br />
      </span>
    ),
    exit: () => {
      handleClose('Terminal');
    },
    mini: () => {
      handleMinimize('Terminal');
    },
  };
  const welcomeMessage = (
    <span>
      Type &apos;help&apos; for all available commands. <br />
    </span>
  );

  return (
    <Draggable handle=".handleDrag" bounds="body">
      <div className="absolute left-[20%] z-50 flex items-center justify-center px-5 py-5">
        <div className="relative mx-auto overflow-hidden rounded-xl bg-gray-100 text-gray-800 shadow-xl">
          <div className="handleDrag h-[33px] w-full bg-[#2D2D2D]">
            <div className="flex flex-row items-center justify-between">
              <div className="ml-4 flex flex-row justify-between text-sm text-gray-400">
                <Image src={TerminalIcon} alt="icon" className="mr-4" />
                <span className="">Terminal</span>
              </div>
              <div className="flex flex-row">
                <Image
                  onClick={() => handleMinimize('Terminal')}
                  src={MinimizeIcon}
                  alt="icon"
                  className="m-1 mx-3 w-6"
                />
                <Image
                  onClick={() => handleClose('Terminal')}
                  src={CrossIcon}
                  alt="icon"
                  className="m-1 mx-3 w-6 hover:bg-red-700"
                />
              </div>
            </div>
          </div>
          <div className="terminal h-[50vh] w-[50vw]">
            <ReactTerminal
              commands={commands}
              showControlBar={false}
              welcomeMessage={welcomeMessage}
              themes={{
                theme,
              }}
              theme="theme"
            />
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Terminal;
