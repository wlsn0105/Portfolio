// src/components/About.js
import React from 'react';
import IntroductionAnimation from './IntroductionAnimation.jsx'
import './styles/introduction.css'

const About = () => (
  <section id="introduce">
    <div className='introduceTitle'>
      <div className='introduceColorBox'></div>
      <IntroductionAnimation>
        사용자&nbsp; 관점을&nbsp; 생각하는
      </IntroductionAnimation> <br></br>
      <IntroductionAnimation>
        UX/UI&nbsp; 개발자
      </IntroductionAnimation><br></br> 
      <IntroductionAnimation>
        박진우입니다.
      </IntroductionAnimation> 
    </div>
    <div className='introduceSub'>
      <span className='introduceContentFirst'>
        배움에는 끝이 없다고 생각하는
      </span>
      <span className='introduceContentFirst'>
        웹 개발자입니다.
      </span>
      <span className='introduceContentSecond'>
        다양한 프로젝트 및 외주를 진행해 왔습니다.
      </span>
      <span className='introduceContentSecond'>
        이런 경험들을 통해 UX/UI 설계부터 개발까지 직접 수행함으로써
      </span>
      <span className='introduceContentSecond'>
        웹 디자인, 위계질서(폰트), 웹 개발 등
      </span>
      <span className='introduceContentSecond'>
        사용자의 관점을 고려하며 개발하는 데에 집중하고 있습니다.
      </span>
    </div>
    <div className='nameLogo'>
      <p className='nameLogoText'>Park Jinwoo</p>
    </div>
  </section>
);

export default About;
