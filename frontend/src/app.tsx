import React from "react";
import AuthProvider from "./context/AuthContext/authProvider";
import HeaderContent from "./ui/headerContent/headerSection";
import { headerLiteral } from "./static/headerStatic/headerStatic";
import NavigateSection from "./ui/naviContent/naviSection";
import MainContent from "./ui/mainContent/mainContent";

const App = ()=>{
  return (
    <AuthProvider>
      <header>
        <HeaderContent title={headerLiteral.title} />
      </header>
      <main className="flex flex-row w-full">
        <div className="w-[10vw]">
          <NavigateSection />
        </div>
        <div className="w-[90vw]">
          <MainContent />
        </div>
      </main>
    </AuthProvider>
  )
}

export default App