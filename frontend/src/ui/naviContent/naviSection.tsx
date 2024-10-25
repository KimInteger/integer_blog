import React from "react";

const NavigateSection = () => {
  return (
    <div className="fixed top-[45%] left-0 w-[7vw] bg-white shadow-md z-50 p-4">
      <div className="flex flex-col gap-4">
        <a href="#home" className="hover:text-blue-500">home</a>
        <a href="#about" className="hover:text-blue-500">about</a>
        <a href="#project" className="hover:text-blue-500">project</a>
      </div>
    </div>
  );
}

export default NavigateSection;
