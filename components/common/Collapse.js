import React, { useState } from 'react';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <div className="relative mb-3 w-full" onClick={onToggleAccordion}>
        <h6 className="mb-0">
          <button
            className="text-[#000] text-[16px] md:text-[20px] lg:text-[25px] pt-[25px] border-slate-100 text-slate-700 md:font-bold rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
            data-collapse-target="collapse-1"
          >
            <span className="w-[90%] lg:w-full inline-block">{title}</span>
            {isOpen ? (
              <i
                className="fa fa-minus absolute right-[10px]  text-xs group-open:opacity-0 flex justify-center items-center w-[25px] h-[25px]"
                style={{ borderRadius: '50%', border: '2px solid black' }}
              ></i>
            ) : (
              <i
                className="fa fa-plus absolute right-[10px]  text-xs group-open:opacity-0 flex justify-center items-center w-[25px] h-[25px]"
                style={{ borderRadius: '50%', border: '2px solid black' }}
              />
            )}
          </button>
        </h6>
        <div
          className={`text-[#000] overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? ' h-auto' : 'h-[0]'
            } `}
        >
          <div className="p-4 lg:text-[18px] text-[15px] leading-normal text-blue-gray-500/80">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
