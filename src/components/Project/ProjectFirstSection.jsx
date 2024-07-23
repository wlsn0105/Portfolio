import React from "react";
import './styles/ProjectFirstSection.css'
import imacFirst from '../../assets/images/ProjectSectionImages/imacFirst.png'
import jooyajooya from '../../assets/images/ProjectSectionImages/jooyajooya.png'

export default function ProjectFirstSection() {
    return (
        <div className="projectFirstSection">
            <div className="projectFirstContainer">
                <div className="firstImgBox">
                    <img src={imacFirst} alt="imacFirst" className="imacFirstImg" />
                </div>
                <div className="explainBox">
                    <h3>
                        <img src={jooyajooya} alt="jooyajooya" className="jooyajooyaImg" />
                        &nbsp; 음성 프로토콜 상담 플랫폼(외주)
                    </h3>
                    <span>노년층을 타겟으로 한 음성 상담 플랫폼 웹앱 사이트입니다.</span>
                    <span>업체와 직접 소통하면서 색상부터 시작해서 위계질서를 고려하며 UI를 설계하였고</span>
                    <span>사용자의 관점을 고려하며 UX를 설계하였습니다.</span>
                    <span>웹앱 디자인과 퍼블리싱까지 작업을 진행하며 개발을 진행하여 배포까지 진행하엿습니다.</span>
                    <div className="buttonGroup">
                        <button>
                            More
                        </button>
                        <a href="https://www.figma.com/design/XXza63VFx7ITacDHIbjzl6/IMPL?node-id=0-1&t=hQ3XIBEF5wvElIKw-1" target="_blank" rel="noreferrer">
                            <button className="moreFigma">
                                Figma
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}