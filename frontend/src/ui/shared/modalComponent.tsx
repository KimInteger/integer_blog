// src/components/Modal.tsx

import React, { useState } from "react";
import ModalProps from "../../interface/modalInterface/modalInterfaceProps";

const Modal: React.FC<ModalProps> = ({ onClose, onLogin }) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    const password = parseInt(inputValue, 10);
    
    // 비밀번호 체크 후 에러 메시지 설정
    if (isNaN(password)) {
      setErrorMessage("비밀번호는 숫자여야 합니다.");
      return; // 비밀번호가 숫자가 아닌 경우 함수 종료
    }

    const isValid : boolean = onLogin(password);
    if (!isValid) {
      setErrorMessage("비밀번호가 틀렸습니다. 문의해주세요.");
    } else {
      setErrorMessage(""); // 성공적으로 로그인 시 에러 메시지 초기화
      onClose(); // 모달 닫기
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-10">
      <div className="bg-white p-6 rounded shadow-lg w-[20vw] h-[25vh]">
        <div className="h-[80%] flex flex-col items-center justify-center">
          <h2 className="text-xl mb-4">로그인</h2>
          <input
            type="input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            placeholder="비밀번호 입력"
          />
          {/* 에러 메시지 조건부 렌더링 */}
          {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
        </div>
        <div className="flex items-center justify-around h-[20%]">
          <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">
            확인
          </button>
          <button onClick={onClose} className="bg-blue-500 text-white p-2 rounded">취소</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
