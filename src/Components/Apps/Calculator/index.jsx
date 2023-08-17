import Image from 'next/image';
import { useState } from 'react';
import CrossIcon from '../../../assets/icons/cross.svg';
import MinimizeIcon from '../../../assets/icons/minimize.svg';
import CalcIcon from '../../../assets/icons/calc.png';
import useOpenAppContext from '@/hooks/use-open-app-hook';
import Draggable from 'react-draggable';

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
    <Draggable handle=".handleDrag" bounds="body">
      <div className="absolute left-[20%] z-50 flex items-center justify-center px-5 py-5">
        <div className="relative mx-auto overflow-hidden rounded-xl bg-gray-100 text-gray-800 shadow-xl">
          <div className="handleDrag h-[33px] w-full bg-[#2D2D2D]">
            <div className="flex flex-row items-center justify-between">
              <div className="mx-auto flex flex-row justify-between text-sm text-gray-400">
                <Image src={CalcIcon} alt="icon" className="mr-12 w-4" />
                <span className="absolute left-1/2 -translate-x-1/2 transform justify-center">
                  Calculator
                </span>
              </div>
              <div className="flex flex-row">
                <Image
                  onClick={() => handleMinimize('Calculator')}
                  src={MinimizeIcon}
                  alt="icon"
                  className="m-1 mx-3 w-6"
                />
                <Image
                  onClick={() => handleClose('Calculator')}
                  src={CrossIcon}
                  alt="icon"
                  className="m-1 mx-3 w-6 hover:bg-red-700"
                />
              </div>
            </div>
          </div>
          <div className="flex h-40 min-w-[20vw] max-w-[20vw] items-end bg-gradient-to-b from-gray-800 to-gray-700 text-right">
            <div
              className={`w-full px-6 py-5 ${
                result.length > 9 ? 'text-5xl' : 'text-6xl'
              } font-thin text-white`}
            >
              {result === '' ? '0' : result}
            </div>
          </div>
          <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
            <div className="flex w-full">
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  className="h-16 w-full text-xl font-light text-white text-opacity-50 outline-none hover:bg-indigo-700 hover:bg-opacity-20 focus:outline-none"
                  onClick={clear}
                >
                  C
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  className="h-16 w-full text-xl font-light text-white text-opacity-50 outline-none hover:bg-indigo-700 hover:bg-opacity-20 focus:outline-none"
                  onClick={() => setResult((-parseFloat(result)).toString())}
                >
                  +/-
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  className="h-16 w-full text-xl font-light text-white text-opacity-50 outline-none hover:bg-indigo-700 hover:bg-opacity-20 focus:outline-none"
                  onClick={deleteEl}
                >
                  Delete
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  className="h-16 w-full bg-indigo-700 bg-opacity-10 text-2xl font-light text-white outline-none hover:bg-opacity-20 focus:outline-none"
                  id="/"
                  onClick={handleClick}
                >
                  ÷
                </button>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  className="h-16 w-full text-xl font-light text-white outline-none hover:bg-indigo-700 hover:bg-opacity-20 focus:outline-none"
                  id="7"
                  onClick={handleClick}
                >
                  7
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  className="h-16 w-full text-xl font-light text-white outline-none hover:bg-indigo-700 hover:bg-opacity-20 focus:outline-none"
                  id="8"
                  onClick={handleClick}
                >
                  8
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  className="h-16 w-full text-xl font-light text-white outline-none hover:bg-indigo-700 hover:bg-opacity-20 focus:outline-none"
                  id="9"
                  onClick={handleClick}
                >
                  9
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  className="h-16 w-full bg-indigo-700 bg-opacity-10 text-xl font-light text-white outline-none hover:bg-opacity-20 focus:outline-none"
                  id="*"
                  onClick={handleClick}
                >
                  ⨉
                </button>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  className="h-16 w-full text-xl font-light text-white outline-none hover:bg-indigo-700 hover:bg-opacity-20 focus:outline-none"
                  id="4"
                  onClick={handleClick}
                >
                  4
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  className="h-16 w-full text-xl font-light text-white outline-none hover:bg-indigo-700 hover:bg-opacity-20 focus:outline-none"
                  id="5"
                  onClick={handleClick}
                >
                  5
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  className="h-16 w-full text-xl font-light text-white outline-none hover:bg-indigo-700 hover:bg-opacity-20 focus:outline-none"
                  id="6"
                  onClick={handleClick}
                >
                  6
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  className="h-16 w-full bg-indigo-700 bg-opacity-10 text-xl font-light text-white outline-none hover:bg-opacity-20 focus:outline-none"
                  id="-"
                  onClick={handleClick}
                >
                  -
                </button>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  className="h-16 w-full text-xl font-light text-white outline-none hover:bg-indigo-700 hover:bg-opacity-20 focus:outline-none"
                  id="1"
                  onClick={handleClick}
                >
                  1
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  className="h-16 w-full text-xl font-light text-white outline-none hover:bg-indigo-700 hover:bg-opacity-20 focus:outline-none"
                  id="2"
                  onClick={handleClick}
                >
                  2
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  className="h-16 w-full text-xl font-light text-white outline-none hover:bg-indigo-700 hover:bg-opacity-20 focus:outline-none"
                  id="3"
                  onClick={handleClick}
                >
                  3
                </button>
              </div>
              <div className="w-1/4 border-b border-r border-indigo-400">
                <button
                  className="h-16 w-full bg-indigo-700 bg-opacity-10 text-xl font-light text-white outline-none hover:bg-opacity-20 focus:outline-none"
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
                  className="h-16 w-full text-xl font-light text-white outline-none hover:bg-indigo-700 hover:bg-opacity-20 focus:outline-none"
                  id="0"
                  onClick={handleClick}
                >
                  0
                </button>
              </div>
              <div className="w-1/4 border-r border-indigo-400">
                <button
                  className="h-16 w-full text-xl font-light text-white outline-none hover:bg-indigo-700 hover:bg-opacity-20 focus:outline-none"
                  id="."
                  onClick={handleClick}
                >
                  .
                </button>
              </div>
              <div className="w-2/4 border-r border-indigo-400">
                <button
                  className="h-16 w-full bg-indigo-700 bg-opacity-30 text-xl font-light text-white outline-none hover:bg-opacity-40 focus:outline-none"
                  onClick={calculate}
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Calculator;
