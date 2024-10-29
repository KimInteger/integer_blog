// HeaderContent.tsx
import React, { useContext } from "react";
import HeaderContentProps from "../../interface/headerInterface/headerContentProps";
import { AuthContext } from "../../context/AuthContext/authContext";
import routePush from "../../lib/routeFunc";

const HeaderContent: React.FC<HeaderContentProps> = ({title}) => {
  const { isLogined, login, logout } = useContext(AuthContext);

  return (
    <div className="flex flex-row items-center justify-between bg-orange-400 w-screen h-[7vh] fixed top-0 left-0 z-10">
      <div className="text-base ml-4">
        <button className="bg-transparent" onClick={routePush('/')}>
          <span className="text-[2rem] font-extrabold">{title}</span>
        </button>
      </div>
      <div className="text-[16px] mr-4">
        <button onClick={isLogined ? logout : login}>
          {isLogined ? "로그아웃" : "관리자모드"}
        </button>
      </div>
    </div>
  );
};

export default HeaderContent;
