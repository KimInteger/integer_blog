import '../../../style/aboutReport.css'; // CSS 파일 임포트

const SadSentence = () => {
  return (
    <div className="report-container mt-[10vh]"> 
        <p className="report-text">
          너무 슬픈 일입니다.
        </p><br />
        <p className="report-text">
        그래도 찾아와 주셔서 감사합니다.
        </p><br />
        <p className="report-text">
        이왕 오신김에 제 깃허브와 이메일을 정보로 가져가주세요.
        </p><br />
        <div className="text-3xl">
          <p>깃허브 : https://github.com/KimInteger</p>
          <div className="report-divider" /> 
          <p>이메일 : kjs20151240@gmail.com</p>
      </div>
    </div>
  );
}

export default SadSentence