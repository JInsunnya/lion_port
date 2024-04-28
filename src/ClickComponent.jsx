import React from 'react';
import './Click.css';

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
    <nav class="navigation">
      <ul class="menu">
        <li class="menu__item">
          <a href="#" class="menu__link">
            <span class="menu__title">
              <span class="menu__first-word" data-hover="Introduction">
                Introduction
              </span>
            </span>
          </a>
        </li>

        <li class="menu__item">
          <a href="#" class="menu__link">
            <span class="menu__title">
              <span class="menu__first-word" data-hover="Career">
                Career
              </span>
            </span>
          </a>
        </li>

        <li class="menu__item">
          <a href="#" class="menu__link">
            <span class="menu__title">
              <span class="menu__first-word" data-hover="Projects">
                Projects
              </span>
            </span>
          </a>
        </li>

        <li class="menu__item">
          <a href="#" class="menu__link">
            <span class="menu__title">
              <span class="menu__first-word" data-hover="Contact">
                Contact
              </span>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
