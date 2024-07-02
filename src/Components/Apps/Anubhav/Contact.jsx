import Zoom from 'react-reveal/Zoom';
import { AiOutlineClose } from 'react-icons/ai';
function Contact({ setShowContact }) {
  return (
    <div className="fixed z-[999] inset-0 h-screen flex items-center justify-center overflow-hidden bg-[rgba(0,0,0,.7)]">
      <Zoom duration={500}>
        <div className="relative h-[90%] w-[70%]">
          <AiOutlineClose
            onClick={() => setShowContact(false)}
            className="absolute right-0 m-2 h-6 w-6 rounded-full text-white hover:cursor-pointer hover:bg-red-500"
          />
          <div>
            <div className="w-full rounded-lg bg-gray-800">
              <div className="w-full rounded bg-gray-900 p-8 shadow">
                <p className="text-center text-3xl font-bold leading-7 text-white">
                  Contact me
                </p>
                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLSfowaRdHWcjUGPnXpjq34ayNUxeRLpaokP57rBLLuNoZoZTbQ/formResponse"
                  target="_self"
                  method="post"
                >
                  <div className="mt-12 items-center md:flex">
                    <div className="flex w-full flex-col md:w-1/2">
                      <label className="font-semibold leading-none text-gray-300">
                        Name
                      </label>
                      <input
                        type="text"
                        name="entry.2005620554"
                        className="mt-4 rounded border-0 bg-gray-800 p-3 leading-none text-gray-50 focus:border-blue-700 focus:outline-none"
                      />
                    </div>
                    <div className="mt-4 flex w-full flex-col md:ml-6 md:mt-0 md:w-1/2">
                      <label className="font-semibold leading-none text-gray-300">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="entry.1166974658"
                        className="mt-4 rounded border-0 bg-gray-800 p-3 leading-none text-gray-50 focus:border-blue-700 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="mt-8 items-center md:flex">
                    <div className="flex w-full flex-col">
                      <label className="font-semibold leading-none text-gray-300">
                        Email
                      </label>
                      <input
                        type="email"
                        name="entry.1045781291"
                        className="mt-4 rounded border-0 bg-gray-800 p-3 leading-none text-gray-50 focus:border-blue-700 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-8 flex w-full flex-col">
                      <label className="font-semibold leading-none text-gray-300">
                        Message
                      </label>
                      <textarea
                        type="text"
                        name="entry.839337160"
                        className="mt-4 h-40 resize-none rounded border-0 bg-gray-800 p-3 text-base leading-none text-gray-50 focus:border-blue-700 focus:outline-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center">
                    <button className="mt-9 rounded bg-blue-700 px-10 py-4 font-semibold leading-none text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2">
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default Contact;
