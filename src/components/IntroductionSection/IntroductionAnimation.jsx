// src/components/AnimatedText.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import './styles/IntroductionAnimation.css'

// 글자가 순서대로 나타나는 애니메이션 정의
const fadeInText = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// 글자 스타일 정의
const AnimatedTextContainer = styled.div`
  display: inline-block;

  span {
    opacity: 0;
    display: inline-block;
    animation: ${fadeInText} 0.8s ease-in forwards;
    /* 애니메이션의 지연 시간을 글자의 순서에 따라 달리 설정 */
    animation-delay: calc(0.04s * var(--index));
  }
`;

// 각 글자를 span으로 감싸는 컴포넌트
const AnimatedText = ({ children }) => {
  // 텍스트의 각 글자를 span으로 감싸서 애니메이션 적용
  const textArray = children.split('');
  return (
    <AnimatedTextContainer>
      {textArray.map((char, index) => (
        <span key={index} style={{ '--index': index + 1 }}>
          {char}
        </span>
      ))}
    </AnimatedTextContainer>
  );
};

export default AnimatedText;
