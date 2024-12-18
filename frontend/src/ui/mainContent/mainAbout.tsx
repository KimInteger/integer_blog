import React, { useState, useEffect } from "react";
import { aboutTexts } from "../../static/mainContentStatic/mainAboutStatic";
import AboutStoryModalComponent from "./AboutContent/combineAboutContentModal";

const MainAboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showOptions, setShowOptions] = useState(false); // 선택지 표시 여부

  useEffect(() => {
    const fullText = aboutTexts[currentIndex];
    let charIndex = 0;
    setDisplayText(""); // Reset display text

    const interval = setInterval(() => {
      if (charIndex < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(interval);
        // "무엇이 궁금하십니까??" 질문이 다 나타나면 선택지 표시
        if (currentIndex === 3) {
          setShowOptions(true);
        }
      }
    }, 60);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < aboutTexts.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setShowOptions(false); // 다음으로 넘어갈 때 선택지 숨기기
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setShowOptions(false); // 이전으로 돌아갈 때 선택지 숨기기
    }
  };

  return (
    <div className="scrollable flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-14 mt-[20vh]">About Me!</h1>
      <div>
        <div className="w-[20vw] h-[38vh] font-extrabold bg-orange-100 flex flex-col items-center border-r-amber-400 rounded-xl">
          <p className="p-4">{displayText}</p>
          {/* 선택지가 표시되는 부분 */}
          {currentIndex === 3 && showOptions && (
            <div className="mt-4 w-[15vw]">
              <AboutStoryModalComponent/>
            </div>
          )}
        </div>
        <div className="mt-4 flex flex-row justify-between">
          <button
            className="mr-2 bg-orange-500 text-white font-semibold px-4 py-2 rounded"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            이전
          </button>
          <button
            className="bg-orange-500 text-white font-semibold px-4 py-2 rounded"
            onClick={handleNext}
            disabled={currentIndex === aboutTexts.length - 1}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainAboutSection;
