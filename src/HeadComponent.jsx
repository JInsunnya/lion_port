import React from 'react';
import './Head.css';

export default function HeadComponent() {
  // const IntroductionRef = useRef < HTMLDivElement > null;
  // const CareerRef = useRef < HTMLDivElement > null;
  // const ProjectsRef = useRef < HTMLDivElement > null;
  // const ContactRef = useRef < HTMLDivElement > null;

  // const onIntroductionClick = () => {
  //   IntroductionRef.current?.scrollIntoView({ behavior: 'smooth' });
  // };
  // const onCareerClick = () => {
  //   CareerRef.current?.scrollIntoView({ behavior: 'smooth' });
  // };
  // const onProjectsClick = () => {
  //   ProjectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <div className="head">
      <h1 className="port">KIM Portfolio</h1>
      <h1 className="click">Introduction Career Projects Contact</h1>
    </div>
  );
}
// <div>
//   <ul
//     style={{
//       position: 'fixed',
//       top: 0,
//       right: 0,
//       background: 'teal',
//       padding: '20px',
//     }}
//   >
//     <li onClick={onIntroductionClick}>Introduction</li>
//     <li onClick={onCareerClick}>Career</li>
//     <li onClick={onProjectsClick}>Projects</li>
//     <li onClick={onContactClick}>Contact</li>
//   </ul>

//   <div
//     ref={IntroductionRef}
//     style={{ height: '500px', background: 'skyblue' }}
//   >
//     Introduction
//   </div>
//   <div ref={CareerRef} style={{ height: '500px', background: 'orange' }}>
//     Career
//   </div>
//   <div ref={ProjectsRef} style={{ height: '500px', background: 'gray' }}>
//     Projects
//   </div>
//   <div ref={ContactRef} style={{ height: '500px', background: 'orange' }}>
//     Contact
//   </div>
// </div>
