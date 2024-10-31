import '../../../style/aboutReport.css'; // CSS 파일 임포트


const AboutWhatIWish = () => {
  return (
    <div className="report-container mt-4"> 
      <h1 className="report-title">개발자 김정수의 목표</h1>
      <div className="report-divider" /> 
      <div>
        <p className="report-text">
          저를 소개할 때, 목표에 대해 살짝 언급했지만, 왜 그러고 싶은가에 대한 이유는 설명하지 않았었습니다. <br />
          <b className='report-highlight'>왜?</b> 개발자 김정수는 사람들을 소비시키게 하고싶은가! <br />
          그게 멋지기 때문입니다. 소비를 하는 것은 매력적이지만, 그런 매력적인 소비를 시키는 사람은 멋집니다. <br />
          무슨 멋을 따지냐고 할 수 있겠지만, 전 '낭만'이라는 두 글자, 또 '멋'이라는 한 글자가 주는 그 느낌이 사람의 원동력이라고 생각합니다. <br />
          이것은 어디까지나 큰 단위의 추상적인 목표이고, 구체적으로 제가 앞으로 할 예정인, 또 하고싶은 것들을 작성하겠습니다.
        </p>
      </div>
      <div>
        <h2 className="report-section-title">1. 단어장 공부 게임 앱</h2>
        <div className='flex flex-col justify-start items-start bg-orange-100 px-8 py-8 rounded'>
          <div>
            <p className="report-text">
              API를 구축하고, 그 API를 활용하는 연습을 하는데 효과적일 것 같습니다. 또한 부가적으로 공부도 할 수 있습니다. <br />
              퀴즈는 주관식으로 준비하고, 단어에 대한 데이터만 있다면 난이도를 정하여 단계별로 사용할 수 있을 것 입니다.
            </p>
            <p>
              <a className='bg-orange-200 border-b-orange-300-2' target='_blank' rel="noopener noreferrer" href="https://battle-fountain-dbc.notion.site/12319c78080580d6be5dc198eadfbe19?pvs=4">기획안 노션</a>
            </p>
          </div>
          <br />
          <div className='flex flex-col justify-start items-start'>
            <p className='mb-4'>사용 예정 스택</p>
            <div className='flex flex-row'>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>Next.js</p>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>Nest.js(API서버)</p>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>TypeScript</p>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>AWS</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="report-section-title">2. 스토리 게임</h2>
        <div className='flex flex-col justify-start items-start bg-orange-100 px-8 py-8 rounded'>
          <div>
            <p className="report-text">
              게임은 유희를 목적으로 만들어진 것이고, 사람들은 늘 유희를 찾습니다. <br />
              어렸을적부터 게임과 가까운 삶을 살았던 사람으로서, 게임은 저라는 사람을 형성하는데 큰 기여를 했다고 말할 수 있습니다. <br />
              저 또한, 게임을 통해서, 글을 통해서, 사람들에게 즐거움을 선사하고 싶습니다.
            </p>
          </div>
          <br />
          <div className='flex flex-col justify-start items-start'>
            <p className='mb-4'>사용 예정 스택</p>
            <div className='flex flex-row'>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>React.native</p>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>React</p>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>TypeScript</p>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>AWS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutWhatIWish