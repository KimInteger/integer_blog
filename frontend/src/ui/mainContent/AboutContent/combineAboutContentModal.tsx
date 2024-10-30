import React, { useState } from "react";
import StoryModalComponent from "../../shared/storyModalComponent";
import { choiceQuestion } from "../../../static/mainContentStatic/mainAboutStatic";
import { choiceQuestionAndAnswer } from "../../../static/mainContentStatic/mainAboutStatic";

const AboutStoryModalComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  // 모달 열기 핸들러
  const openModal = (option: string) => {
    const content = choiceQuestionAndAnswer[option]; // 옵션의 키에 맞는 콘텐츠 가져오기
    setModalContent(content); // 가져온 콘텐츠를 modalContent로 설정
    setIsModalOpen(true);
  };

  // 모달 닫기 핸들러
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <>
      {choiceQuestion.map((option, index) => (
        <div
          key={index} // 각 요소의 고유 키로 인덱스 사용
          className="border p-4 rounded-md mb-2 border-orange-400 hover:text-white hover:bg-orange-300 cursor-pointer"
          onClick={() => openModal(option)} // 각 옵션 클릭 시 모달 열기
        >
          {option}
        </div>
      ))}

      {isModalOpen && (
        <StoryModalComponent onClose={closeModal} closeText="돌아가기">
          {modalContent}
        </StoryModalComponent>
      )}
    </>
  );
};

export default AboutStoryModalComponent;
