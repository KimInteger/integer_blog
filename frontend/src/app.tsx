import React from "react";
import AuthProvider from "./context/AuthContext/authProvider";
import HeaderContent from "./ui/headerContent/headerSection";
import { headerLiteral } from "./static/headerStatic/headerStatic";
import NavigateSection from "./ui/naviContent/naviSection";

const App = ()=>{
  return (
    <AuthProvider>
      <header>
        <HeaderContent title={headerLiteral.title} />
      </header>
      <main className="flex flex-row w-full">
        <div className="w-[5vw]">
          <NavigateSection />
        </div>
        <div className="w-[95vw]">메인 컨텐츠80vw</div>
      </main>
    </AuthProvider>
  )
}

export default App