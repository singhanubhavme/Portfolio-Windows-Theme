import Image from 'next/image';
import { useState } from 'react';
import CrossIcon from '../../../assets/icons/cross.svg';
import MinimizeIcon from '../../../assets/icons/minimize.svg';
import CalcIcon from '../../../assets/icons/calc.png';
import useOpenAppContext from '@/hooks/use-open-app-hook';
const Calculator = () => {
  const { handleMinimize, handleClose } = useOpenAppContext();
  const [result, setResult] = useState('');

  const handleClick = (e) => setResult(result.concat(e.target.id));

  const clear = () => setResult('');

  const deleteEl = () => setResult(result.slice(0, -1));

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };
  return (
    <div className="absolute z-50 flex left-[20%] items-center justify-center px-5 py-5">
      <div className="mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden">
        <div className="bg-[#2D2D2D] h-[33px] w-full">
          <div className="flex flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mx-auto flex flex-row justify-between">
              <Image src={CalcIcon} alt="icon" className="w-4 mr-12" />
              <span className="absolute left-1/2 transform -translate-x-1/2 justify-center">
                Calculator
              </span>
            </div>
            <div className="flex flex-row">
              <Image
                onClick={() => handleMinimize('Calculator')}
                src={MinimizeIcon}
                alt="icon"
                className="w-6 m-1 mx-3"
              />
              <Image
                onClick={() => handleClose('Calculator')}
                src={CrossIcon}
                alt="icon"
                className="w-6 m-1 mx-3 hover:bg-red-700"
              />
            </div>
          </div>
        </div>
        <div className="h-40 min-w-[20vw] max-w-[20vw] bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
          <div
            className={`w-full py-5 px-6 ${
              result.length > 9 ? 'text-5xl' : 'text-6xl'
            } text-white font-thin`}
          >
            {result === '' ? '0' : result}
          </div>
        </div>
        <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light"
                onClick={clear}
              >
                C
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light"
                onClick={() => setResult((-parseFloat(result)).toString())}
              >
                +/-
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light"
                onClick={deleteEl}
              >
                Delete
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-2xl font-light"
                id="/"
                onClick={handleClick}
              >
                ÷
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                id="7"
                onClick={handleClick}
              >
                7
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                id="8"
                onClick={handleClick}
              >
                8
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                id="9"
                onClick={handleClick}
              >
                9
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
                id="*"
                onClick={handleClick}
              >
                ⨉
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                id="4"
                onClick={handleClick}
              >
                4
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                id="5"
                onClick={handleClick}
              >
                5
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                id="6"
                onClick={handleClick}
              >
                6
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
                id="-"
                onClick={handleClick}
              >
                -
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                id="1"
                onClick={handleClick}
              >
                1
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                id="2"
                onClick={handleClick}
              >
                2
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                id="3"
                onClick={handleClick}
              >
                3
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
                id="+"
                onClick={handleClick}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                id="0"
                onClick={handleClick}
              >
                0
              </button>
            </div>
            <div className="w-1/4 border-r border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                id="."
                onClick={handleClick}
              >
                .
              </button>
            </div>
            <div className="w-2/4 border-r border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-30 hover:bg-opacity-40 text-white text-xl font-light"
                onClick={calculate}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
