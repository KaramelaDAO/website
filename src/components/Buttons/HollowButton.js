import React from "react";

const HollowButton = ({ text, icon }) => {
  return (
    <button className="m-1 md:m-3 w-full md:w-auto flex items-center justify-center bg-[#000000] py-3 px-6 rounded-lg capitalize shadow-sm gradient-border hover:bg-[#0d0d0d]">
      <span className="mr-2"> {icon}</span>
      {text}
    </button>
  );
};

export default HollowButton;
