import Zoom from 'react-reveal/Zoom';
import { AiOutlineClose } from 'react-icons/ai';

function Resume({ setShowResume }) {
  return (
    <div className="absolute h-screen z-[999]">
      <div className="animated fadeIn faster fixed inset-0 z-50 flex h-screen w-full bg-[rgba(0,0,0,.7)]">
        <Zoom duration={500}>
          <div className="flex flex-col">
            <AiOutlineClose
              onClick={() => setShowResume(false)}
              className="absolute right-[130px] top-2.5 m-2 h-5 w-5 rounded-full text-white hover:cursor-pointer hover:bg-red-500"
            />
            <embed
              className="h-full w-[100vw]"
              src="/resume.pdf"
              type="application/pdf"
            />
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Resume;
