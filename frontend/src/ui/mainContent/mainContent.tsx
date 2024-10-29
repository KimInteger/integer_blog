import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import MainHomeSection from "./mainHome";
import MainAboutSection from "./mainAbout";
import MainProjectSection from "./mainProject";


const MainContent = () => {
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainHomeSection />} />
        <Route path="/tutoZeroOne" element={<MainAboutSection />} />
        <Route path="/tutoZeroTwo" element={<MainProjectSection />} />
      </Routes>
    </Router>
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