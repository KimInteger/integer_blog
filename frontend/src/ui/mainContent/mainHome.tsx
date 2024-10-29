import React from "react";
import routePush from "../../lib/routeFunc";

const MainHomeSection = () => {
  return(
    <>
      <h1>안녕하세요?</h1>
      <h1>저는 개발자 김정수입니다.</h1>
      <h1>제 개인 패치노트에 오신것을 환영합니다.</h1>
      <div>
      <button className="bg-orange-500 text-white font-semibold text-base px-4 py-2 rounded-md hover:bg-orange-600" onClick={routePush("/about")}>
        Knock Knock!
      </button>
      </div>
    </>

  )
}

export default MainHomeSection