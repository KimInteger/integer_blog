import React from "react";
import routePush from "../../lib/routeFunc";
import { mainHomeContent } from "../../static/mainContentStatic/mainHomeStatic";

const MainHomeSection = () => {
  return (
    <>
    {mainHomeContent.map((line, index) => (
      <div key={index} className="text-3xl font-bold mb-4">
        {line}
      </div>
    ))}
    <div>
      <button className="bg-orange-500 text-white font-semibold text-base px-4 py-2 rounded-md hover:bg-orange-600" onClick={routePush("/about")}>
        Knock Knock!
      </button>
    </div>
    </>
  );
};

export default MainHomeSection;
