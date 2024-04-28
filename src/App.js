import React from 'react';
import './App.css';
// import './Click.css';
import HeadComponent from './HeadComponent';
// import ClickComponent from './ClickComponent';
import kim from './kim.jpg';
import career from './career.png';
import soon from './soon.png';

function App() {
  return (
    <>
      <div>
        <article>
          <HeadComponent />
        </article>
      </div>
      <div className="intro">
        <h1>안녕하세요</h1>
        <h1>Frontend 개발자 김진선입니다</h1>
      </div>
      <div className="introduction">
        <img className="image" src={kim} />
        <h1>김진선 KIM JinSeon</h1>
        <h2>2001.07.28</h2>
        <h2>한국외국어대학교 프랑스응용어문학전공/AI융합전공(Software&AI)</h2>
        <h3 className="smallintroduction">안녕하세요.</h3>
        <h3>
          저의 개발로 사람들과 편리한 서비스를 잇고자 하는 목표가 있는
          프론트엔드 개발자입니다.
        </h3>
        <h3>
          꾸준한 고민으로 사용자가 서비스를 즐겨 찾도록 하는 웹페이지를 구현하는
          개발자가 되겠습니다.
        </h3>
      </div>
      <div className="career">
        <h1 className="smallcareer">CAREER</h1>
        <img className="careerimage" src={career} />
        <div className="careertext">
          <h2>멋쟁이사자처럼 대학</h2>
          <h2>한국외국어대학교 12기 프론트엔드</h2>
        </div>
      </div>
      <div className="projects">
        <h1 className="smallprojects">PROJECTS</h1>
        <h1 className="smallprojects2">Comming soon!</h1>
        <img className="soon" src={soon} />
      </div>
      <div className="contact">
        <h1 className="smallcontact">CONTACT</h1>
        <div className="personal">
          <div className="personal1">
            <h2>GitHub JInsunnya</h2>
          </div>
          <div className="personal2">
            <h2>Tistory jinespere</h2>
          </div>
          <div className="personal3">
            <h2>mail jsk5754@naver.com</h2>
          </div>
          <div className="personal4">
            <h2>phone 010-5781-5754</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
