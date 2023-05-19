import React from "react";

const NextArrowButton = () => {
  return (
    <button className=" flex h-[3.5rem] w-[3.5rem] cursor-pointer flex-col items-center justify-center self-stretch rounded-full bg-primary-blue text-white">
      <img
        className="h-[37.5%] w-[37.5%]"
        alt="next button"
        src="/images/forward-arrow.svg"
      />
    </button>
  );
};

export default NextArrowButton;
