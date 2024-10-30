import React from "react";
import { StoryModalProps } from "../../interface/modalInterface/storyModalProps";

const StoryModalComponent: React.FC<StoryModalProps> = ({
  children,
  onClose,
  closeText,
}) => {
  return (
    <>
      {/* 모달 전체를 감싸는 배경 레이어 */}
      <div className="fixed inset-0 flex justify-center items-center z-50">
        {/* 모달 박스 */}
        <div className="w-[50vw] h-[70vh] font-extrabold bg-orange-100 flex flex-col items-center border-r-amber-400 rounded-xl z-60">
          <div className="scrollable flex-1 w-[50vw] h-[50vh] flex flex-col justify-center items-center">
            {children}
          </div>
          <div className="h-[10vh] text-white rounded font-semibold flex items-center">
            <button className="bg-orange-500 px-4 py-2 text-[20px] rounded" onClick={onClose}>
              {closeText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryModalComponent;
