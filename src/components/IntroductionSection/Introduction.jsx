// src/components/About.js
import React from 'react';
import IntroductionAnimation from './IntroductionAnimation.jsx'
import './styles/introduction.css'

const About = () => (
  <section id="introduce">
    
    <div className='introduceTitle'>
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
    <IntroductionAnimation>
      설계를 좋아하고 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
      </IntroductionAnimation>
    </div>
  </section>
);

export default About;
