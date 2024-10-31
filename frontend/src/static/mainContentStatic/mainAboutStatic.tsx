import AboutMe from "../../ui/mainContent/AboutContent/aboutWhoAmI";
import AboutWhatIWish from "../../ui/mainContent/AboutContent/aboutWhatIWant";
import AboutWhatIdo from "../../ui/mainContent/AboutContent/aboutWhatIdo";
import SadSentence from "../../ui/mainContent/AboutContent/justSadContent";

export const aboutTexts = [
  "  안녕하십니까! About Me!라고 적었지만, 사실 별거 없습니다.",
  " 다만, 제가 무엇을 할 줄 알고, 무엇을 했었는지, 또 무엇을 하고 싶은지에 대하여 소개하는 공간이라고 말하고 싶습니다.",
  " 염치없지만, 제 블로그를 방문하신 방문자님께서 선택해주시겠습니까?",
  " 무엇이 궁금하십니까??"
];

export const choiceQuestion = [
  "  당신은 누구입니까?",
  "  무엇을 했습니까?",
  "  무엇을 하고 싶습니까?",
  "  전 궁금한게 없습니다."
]

export const choiceQuestionAndAnswer: { [key: string]: React.ReactNode } = {
  "  당신은 누구입니까?": <AboutMe />,
  "  무엇을 했습니까?": <AboutWhatIdo />,
  "  무엇을 하고 싶습니까?": <AboutWhatIWish />,
  "  전 궁금한게 없습니다.": <SadSentence />,
};
