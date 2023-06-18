import Zoom from 'react-reveal/Zoom';
import ResumePDF from '../../../assets/resume.pdf';
import { AiOutlineClose } from 'react-icons/ai';

function Resume({ setShowResume }) {
  return (
    <div className="absolute z-[999]">
      <div className="animated fadeIn faster fixed inset-0 z-50 flex h-full w-full bg-[rgba(0,0,0,.7)]">
        <Zoom duration={500}>
          <div className="flex flex-col">
            <AiOutlineClose
              onClick={() => setShowResume(false)}
              className="absolute -right-2 top-2 m-2 h-6 w-6 rounded-full text-white hover:cursor-pointer hover:bg-red-500"
            />
            <embed
              className="h-full w-[100vw]"
              src={ResumePDF}
              type="application/pdf"
            />
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Resume;
