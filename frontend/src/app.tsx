import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext/authProvider";
import HeaderContent from "./ui/headerContent/headerSection";
import { headerLiteral } from "./static/headerStatic/headerStatic";
import NavigateSection from "./ui/naviContent/naviSection";
import MainHomeSection from "./ui/mainContent/mainHome";
import MainAboutSection from "./ui/mainContent/mainAbout";
import MainProjectSection from "./ui/mainContent/mainProject";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <header>
          <HeaderContent title={headerLiteral.title} />
        </header>
        <main className="flex flex-row w-full">
          <div className="w-[20vw]">
            <NavigateSection />
          </div>
          <div className="w-[60vw]">
            <Routes>
              <Route index element={<MainHomeSection />} />
              <Route path="/" element={<MainHomeSection />} />
              <Route path="/about" element={<MainAboutSection />} />
              <Route path="/project" element={<MainProjectSection />} />
            </Routes>
          </div>
          <div className="w-[20vw]"></div>
        </main>
      </Router>
    </AuthProvider>
  );
};

export default App;