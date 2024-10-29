import React from "react";
import routePush from "../../lib/routeFunc";

const NavigateSection = () => {
  return (
    <div className="fixed top-[45%] left-0 w-[7vw] bg-white shadow-md z-5 p-4">
      <div className="flex flex-col gap-4">
        <button className="hover:text-orange-500" onClick={routePush('/')}>home</button>
        <button className="hover:text-orange-500" onClick={routePush('/about')}>about</button>
        <button className="hover:text-orange-500" onClick={routePush('/project')}>project</button>
      </div>
    </div>
  );
}

export default NavigateSection;
