import React from "react";
import MainHomeSection from "./mainHome";
import MainAboutSection from "./mainAbout";
import MainProjectSection from "./mainProject";


const MainContent = () => {
  return(
    <>
      <div id="home">
        <MainHomeSection />
      </div>
      <div id="about">
        <MainAboutSection />
      </div>
      <div id="project">
        <MainProjectSection />
      </div>
    </>
    
  )
}

export default MainContent