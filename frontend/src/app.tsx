import React from "react";
import AuthProvider from "./context/AuthContext/authProvider";

const App = ()=>{
  return (
    <AuthProvider>
      <header>
        <span>10vh</span>
      </header>
      <main>
        <p>여가 80vh받으면 된다 아입니까.</p>
        <div>고정 사이드 네비20vw</div>
        <div>메인 컨텐츠80vw</div>
      </main>
      <footer><span>10vh</span></footer>
    </AuthProvider>
  )
}

export default App