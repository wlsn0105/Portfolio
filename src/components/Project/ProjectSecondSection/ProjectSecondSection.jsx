import React from "react";
import './styles/ProjectSecondSection.css'
import gelsmain from '../../../assets/images/ProjectSectionImages/gelsmain.png'
import gelslogo from '../../../assets/images/ProjectSectionImages/gelslogo.png'

export default function ProjectSecondSection() {

    const secondDetail = () => {
        window.open('/Portfolio/secondDetail', '_blank');
        };

    return (
        <div className="projectSecondSection">
            <div className="projectFirstContainer">
                <div className="firstImgBox">
                    <img src={gelsmain} alt="gelsmain" className="gelsmainImg" />
                </div>
                <div className="explainBox">
                        <img src={gelslogo} alt="gelslogo" className="gelslogoImg" />
                    <h3>
                        클린콩 청소업체 온디맨드 시스템
                    </h3>
                    <h3>
                        (호주 해외 교육 프로젝트)
                    </h3>
                    <span>호주 청소업체 앱입니다.</span>
                    <span>호주에 있는 청소업체를 직접 방문하고 업체에 필요한 요구사항들을 고려하여</span>
                    <span>UX/UI를 설계 및 개발 하였습니다.</span>
                    <span>한국에서 조사하고 생각했던 요구사항들이 있었지만 현지에서 미팅을 하고 난 후,</span>
                    <span>생각했던 것과는 다른 점이 많이 있었던 문제점을 겪었습니다.</span>
                    <span>해외 시장은 한국이랑 많이 다르다는 것을 배울 수 있었습니다.</span>
                    <div className="buttonGroup">
                        <button onClick={secondDetail}>More</button>
                        <a href="https://www.figma.com/design/n4AzKz7abUamf0wfBPmEsl/GELS?node-id=301-3398&t=6Dvmf5UKNzlzX50w-1" target="_blank" rel="noreferrer">
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