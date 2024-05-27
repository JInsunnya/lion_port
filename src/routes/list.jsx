import React from 'react';
import './listc.css';

function App() {
  return (
    <div>
      <h1 className="littletitle">KIM Portfolio</h1>
      <h2 className="littlebox">블로그 (207)</h2>
      <div className="littlewrite">
        <h3 className="under">블로그 만드는 건 어려운 일이었다.</h3>
        <h6>2024.05.08. 2:49</h6>
        <h6>작성자: JIN</h6>
        <h4>
          블로그를 만들어 보셨나요? 생각보다 어려운 일이란 걸 아시겠지요. 감사한
          마음으로 사용해 보겠습니다..........
        </h4>
        <h6 className="under">...더보기</h6>
      </div>
      <div className="littlewrite">
        <h3 className="under">팀플을 잘하는 방법은 뭘까요?</h3>
        <h6>2024.05.01. 2:36</h6>
        <h6>작성자: JANE</h6>
        <h4>
          첫번째! 연락을 제때 잘 받는다. 두번째! 회의에 참여한다. 화난 거
          아니에용..........
        </h4>
        <h6 className="under">...더보기</h6>
      </div>
      <div className="littlewrite">
        <h3 className="under">고양이가 키우고 싶어요</h3>
        <h6>2024.04.30. 2:12</h6>
        <h6>작성자: HYE</h6>
        <h4>
          고양이가 키우고 싶은데... 아무래도 제가 고양이를 닮아서 고민이에요.
          고양이가 친구인 줄 알고 주인을 못알아보면 어떡하죠?..........
        </h4>
        <h6 className="under">...더보기</h6>
      </div>
    </div>
  );
}

export default App;
