import '../../../style/aboutReport.css'; // CSS 파일 임포트


const AboutWhatIdo = () => {
  return (
    <div className="report-container mt-4"> 
      <h1 className="report-title">개발자 김정수 프로젝트 포트폴리오</h1>
      <div className="report-divider" /> 
      <div>
        <p className="report-text">
          그럼 지금까지 개발자 김정수는 무엇을 만들었는가?<br />
          만들때 사용한 스택은 무엇인가?<br />
          그것을 적어보겠습니다.
        </p>
      </div>
      <div>
        <h2 className="report-section-title">1. projectMoveGame</h2>
        <div className='flex flex-col justify-start items-start bg-orange-100 px-8 py-8 rounded'>
          <div className='w-full h-[20vh]'>
            <img src="../../../static/img/projectMoveGame.png" alt="프로젝트이미지" />
          </div>
          <div>
            <p className="report-text">
              JavaScript를 사용해서 키보드로 상호작용하여, 왕관을 찾는 게임을 만들어보자가 목표였습니다.
            </p>
            <p>
              <a className='bg-orange-200 border-b-orange-300-2' target='_blank' rel="noopener noreferrer" href="https://github.com/KimInteger/projectMoveGame.git">Github 레포지토리</a>
            </p>
            <p>
              <a className='bg-orange-200 border-b-orange-300-2' target='_blank' rel="noopener noreferrer" href="https://battle-fountain-dbc.notion.site/bb0fdc34cb2d46fd977269507108d207?pvs=4">작업기록 노션</a>
            </p>
          </div>
          <br />
          <div className='flex flex-col justify-start items-start'>
            <p className='mb-4'>사용 스택</p>
            <div className='flex flex-row'>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>HTML</p>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>CSS</p>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>JavaScript</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="report-section-title">2. clickToDelete</h2>
        <div className='flex flex-col justify-start items-start bg-orange-100 px-8 py-8 rounded'>
          <div className='w-full h-[20vh]'>
            <img src="../../../static/img/projectMoveGame.png" alt="프로젝트이미지" />
          </div>
          <div>
            <p className="report-text">
              랜덤한 위치에 나타나는 네모를 클릭해서 없애는 멍때리기 게임. <br />
              제가 중요하게 생각한 것은, 네모가 생성될때부터 삭제될 매서드를 가지고 생성되는 것으로, <br />
              이를 통해 class에 익숙해지고자 했습니다.
            </p>
            <p>
              <a className='bg-orange-200 border-b-orange-300-2' target='_blank' rel="noopener noreferrer" href="https://kimInteger.github.io/clickToDelete">배포된 페이지로 이동</a>
            </p>
            <p>
              <a className='bg-orange-200 border-b-orange-300-2' target='_blank' rel="noopener noreferrer" href="https://battle-fountain-dbc.notion.site/12719c780805800797b3dc04143862b6?pvs=4">작업기록 노션</a>
            </p>
          </div>
          <br />
          <div className='flex flex-col justify-start items-start'>
            <p className='mb-4'>사용 스택</p>
            <div className='flex flex-row'>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>TypeScript</p>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>Webpack</p>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>GithubPages</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="report-section-title">3. 틱택토</h2>
        <div className='flex flex-col justify-start items-start bg-orange-100 px-8 py-8 rounded'>
          <div className='w-full h-[20vh]'>
            <img src="../../../static/img/projectMoveGame.png" alt="프로젝트이미지" />
          </div>
          <div>
            <p className="report-text">
              React의 훅을 사용하고, 상태관리 핸들링을 하는 연습을 위하여 만든 보드게임 '틱택토'입니다. <br />
              다만 WebSocket은 따로 추가하지 않았기 때문에, 현재로서는 하나의 디바이스로 2명이서 실행을 해야합니다. <br />
              후에 리팩토링이 예정되어 있습니다.
            </p>
            <p>
              <a className='bg-orange-200 border-b-orange-300-2' target='_blank' rel="noopener noreferrer" href="https://my-tic-tac-toe-game-c1902.web.app/">배포된 페이지로 이동</a>
            </p>
            <p>
              <a className='bg-orange-200 border-b-orange-300-2' target='_blank' rel="noopener noreferrer" href="https://battle-fountain-dbc.notion.site/a31923b9e7af41e18b25605addec5014?pvs=4">작업기록 노션</a>
            </p>
          </div>
          <br />
          <div className='flex flex-col justify-start items-start'>
            <p className='mb-4'>사용 스택</p>
            <div className='flex flex-row'>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>React</p>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>TypeScript</p>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>Firebase</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="report-section-title">4. projectDefence</h2>
        <div className='flex flex-col justify-start items-start bg-orange-100 px-8 py-8 rounded'>
          <div className='w-full h-[20vh]'>
            <img src="../../../static/img/projectMoveGame.png" alt="프로젝트이미지" />
          </div>
          <div>
            <p className="report-text">
              1~3번까지의 프로젝트를 끝냈을 때, 1웨이브 정도의 디펜스는 구현할 수 있지 않을까? 라는 생각에서 시작한 프로젝트 <br />
              20개의 네모가 렌더링되어 맵을 한바퀴 도는 타워디펜스 형태로 구성되어있으며, 아직은 사용자가 상호작용 할 수 있는 구성요소는 없다고 볼 수 있습니다. <br />
              이를 통해서 컴포넌트 패턴에 숙지하고자 했음. 너무 쪼개놓으면 오히려 찾기 불편함을 깨닫기도 하였고, 하나의 파일에 너무나도 많은 상태는 오히려 독으로 작용함을 알았습니다. <br />
              과한 분할이 아닌 적정선의 분할을 익히게 되었습니다.
            </p>
            <p>
              <a className='bg-orange-200 border-b-orange-300-2' target='_blank' rel="noopener noreferrer" href="https://kimInteger.github.io/projectDefence">배포된 페이지로 이동</a>
            </p>
            <p>
              <a className='bg-orange-200 border-b-orange-300-2' target='_blank' rel="noopener noreferrer" href="https://battle-fountain-dbc.notion.site/TD-10a19c78080580a490e4ca70f0a26c8f?pvs=4">작업기록 노션</a>
            </p>
          </div>
          <br />
          <div className='flex flex-col justify-start items-start'>
            <p className='mb-4'>사용 스택</p>
            <div className='flex flex-row'>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>React</p>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>TypeScript</p>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>Webpack</p>
              <p className='px-2 py-2 bg-orange-400 text-white rounded-xl mx-2'>GithubPages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutWhatIdo