// HeaderContent.tsx
import React, { useContext } from "react";
import HeaderContentProps from "../../interface/headerInterface/headerContentProps";
import { AuthContext } from "../../context/AuthContext/authContext";

const HeaderContent: React.FC<HeaderContentProps> = ({title}) => {
  const { isLogined, login, logout } = useContext(AuthContext);

  return (
    <div className="flex flex-row items-center justify-between bg-orange-400 w-screen h-[7vh]">
      <div className="text-base ml-4">
        <span>{title}</span>
      </div>
      <div className="text-[16px] mr-4">
        <button onClick={isLogined ? logout : login}>
          {isLogined ? "로그아웃" : "로그인"}
        </button>
      </div>
    </div>
  );
};

export default HeaderContent;
