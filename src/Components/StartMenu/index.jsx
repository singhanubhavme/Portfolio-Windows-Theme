import Fade from 'react-reveal/Fade';
import AnubhavImg from '../../assets/avatar.jpg';
import Image from 'next/image';

const StartMenu = () => {
  return (
    <Fade
      bottom
      duration={500}
      easing={'cubic-bezier(0, 0, 0.58, 1)'}
      exit={true}
    >
      <div className="absolute bottom-10 z-20 h-[85vh] w-[22vw] bg-gray-900 text-white">
        <div className="overflow-hidden rounded-t-lg bg-[#CF9EF5]">
          <Image
            className="mx-auto my-2 w-[70%] object-contain object-center"
            src={AnubhavImg}
            alt="avatar"
          />
          <div className="flex items-center bg-gray-900 px-6 py-3">
            <svg
              className="h-6 w-6 fill-current text-white"
              viewBox="0 0 512 512"
            >
              <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
            </svg>
            <h1 className="mx-3 text-2xl font-semibold text-white">Focusing</h1>
          </div>
          <div className="bg-gray-900 px-6 py-[calc(25%-20px)]">
            <h1 className="text-2xl font-semibold text-white">Anubhav Singh</h1>
            <p className="py-2 text-lg text-white">
              Unleashing the full-stack MERN powers, crafting web marvels with
              coding wizardry.
            </p>

            <div className="mt-4 flex items-center text-white">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
              </svg>
              <h1 className="px-2 text-sm">singhanubhav58@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default StartMenu;
