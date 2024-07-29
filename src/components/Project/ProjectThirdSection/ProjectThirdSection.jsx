import React from "react";
import './styles/ProjectThirdSection.css'
import gelsmain from '../../../assets/images/ProjectSectionImages/gelsmain.png'
import gelslogo from '../../../assets/images/ProjectSectionImages/gelslogo.png'

export default function ProjectThirdSection() {

    const thirdDetail = () => {
        window.open('/Portfolio/thirdDetail', '_blank');
        };

    return (
        <div className="projectThirdSection">
            <div className="projectFirstContainer">
                    <div className="firstImgBox">
                        <img src={gelsmain} alt="gelsmain" className="gelsmainImg" />
                    </div>
                    <div className="explainBox">
                            <img src={gelslogo} alt="gelslogo" className="gelslogoImg" />
                        <h3>
                            음성 프로토콜 상담 플랫폼(외주)
                        </h3>
                        <span>노년층을 타겟으로 한 음성 상담 플랫폼 웹앱 사이트입니다.</span>
                        <span>업체와 직접 소통하면서 색상부터 시작해서 위계질서를 고려하며 UI,</span>
                        <span>사용자의 관점을 고려하며 UX를 설계하였습니다.</span>
                        <span>웹앱 디자인 및 개발 작업을 진행하며 배포까지 진행하였습니다.</span>
                        <div className="buttonGroup">
                            <button onClick={thirdDetail}>More</button>
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