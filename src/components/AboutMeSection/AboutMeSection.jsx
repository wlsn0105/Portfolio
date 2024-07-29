import React from "react"
import './styles/AboutMeSection.css'
import Skills from './Skills.jsx'
import { Element } from 'react-scroll';

export default function AboutMeSection() {
    return (
        <Element name="section1">
        <div className="aboutMeSection">
            
            <div className="aboutMeContainer">
                <div className="containerHeader">
                    <h2>
                        ABOUT ME
                    </h2>
                </div>
                <div className="containerBox">
                    <div className="containerLeft">
                        <div className="containerLeftBox">
                            <div className="containerLeftName">
                                <h3>
                                    <div className="headerColorBox">
                                        박진우
                                    </div>
                                </h3>
                            </div>
                            <div className="containerLeftContent">
                                <span>안녕하세요!</span>
                                <span>웹 퍼블리셔 및 웹 개발자 박진우입니다.</span>
                            </div>
                            <div className="containerLeftContent">
                                <span>사용자 관점을 고려하여 웹/앱 디자인 및 개발을 진행합니다.</span>
                                <span className="leftContentGroup">
                                    <span className="boldContent">
                                        React / JavaScript / Html / Css&nbsp;
                                    </span>
                                    를 주로 사용하며
                                </span>
                                <span>디자인 설계로 &nbsp;
                                    <span className="boldContent">
                                        Figma / Adobe Indesign &nbsp;
                                    </span>
                                    툴을 사용합니다.
                                </span>
                            </div>
                            <div className="containerLeftContent">
                                <span>팀원들과의 소통을 굉장히 중요하게 생각하여</span>
                                <span>협업 간 활발한 프로젝트를 진행할 수 있습니다.</span>
                            </div>
                            <div className="moreAboutMe">
                                <a href="https://github.com/wlsn0105" target="_blank" rel="noreferrer" className="moreMe">더 알아보기 ➡</a>
                            </div>
                        </div>
                    </div>
                    <div className="containerRight">
                        <Skills />
                    </div>
                </div>
                </div>
            </div>
        </Element>
    ) 
}