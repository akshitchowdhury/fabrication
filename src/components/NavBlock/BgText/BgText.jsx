import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const texts = [
  { id: 1, text: 'hello John', animation: 'slide-top' },
  { id: 2, text: 'Text 2', animation: 'slide-right' },
  { id: 3, text: 'Word 3', animation: 'slide-left' },
  { id: 4, text: 'Line 4', animation: 'slide-bottom' },
  { id: 5, text: 'Final 5', animation: 'bounce' },
];

const BgText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      {texts.map((item, idx) => (
        <Transition
          as="div"
          key={item.id}
          show={idx === index}
          enter={`transition-${item.animation} ease-out duration-1000`}
          enterFrom="opacity-0 transform scale-90"
          enterTo="opacity-100 transform scale-100"
          leave={`transition-${item.animation} ease-in duration-1000`}
          leaveFrom="opacity-100 transform scale-100"
          leaveTo="opacity-0 transform scale-90"
        >
          <div className="absolute text-3xl font-bold text-center">{item.text}</div>
        </Transition>
      ))}
    </div>
  );
};

export default BgText;
