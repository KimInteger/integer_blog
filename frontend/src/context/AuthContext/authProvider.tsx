// src/context/AuthContext/authProvider.tsx

import React, { useState } from "react";
import { AuthContext } from "./authContext";
import Modal from "../../ui/shared/modalComponent";
import checkPassWord from "../../lib/checkPassword";

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLogined, setIsLogined] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const login = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const logout = () => {
    setIsLogined(false);
  };

  const handleLogin = (password: number) => {
      // 비밀번호 체크 후 로그인 상태 변경
      if (checkPassWord(password)) {
        setIsLogined(true);
        return true; // 로그인 성공
      }
      return false; // 로그인 실패
    };

  return (
    <AuthContext.Provider value={{ isLogined, login, logout }}>
      {children}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} onLogin={handleLogin} />
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
