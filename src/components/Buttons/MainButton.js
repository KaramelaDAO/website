import React from "react";

const MainButton = ({ text }) => {
  return (
    <button className="m-1 md:m-3 w-full md:w-auto flex items-center justify-center bg-[#6E3FA3] py-3 px-6 rounded-lg capitalize shadow-sm hover:bg-[#592d8a]">
      {text}
    </button>
  );
};

export default MainButton;
