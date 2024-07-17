import React from "react";
import './styles/Skills.css'
import htmlIcon from '../../assets/images/htmlIcon.png'
import javascriptIcon from '../../assets/images/javascriptIcon.png'
import cssIcon from '../../assets/images/cssIcon.png'
import reactIcon from '../../assets/images/reactIcon.png'
import vscodeIcon from '../../assets/images/vscodeIcon.png'
import figmaIcon from '../../assets/images/figmaIcon.png'
import indesignIcon from '../../assets/images/indesignIcon.png'

export default function Skills() {
    return (
        <div className="skillToolContainer">
            <div className="skillContainer">
                <div className="skillContainerTitle">
                    <h3><div className="titleColorBox">Skills</div></h3>
                </div>
                <div className="skillIcons">
                    <img src={htmlIcon} alt="htmlIcon" className="htmlIconImg" />
                    <img src={cssIcon} alt="cssIcon" className="cssIconImg" />
                    <img src={javascriptIcon} alt="javacsriptIcon" className="javascriptIconImg" />
                    <img src={reactIcon} alt="reactIcon" className="reactIconImg" />
                </div>
            </div>
            <div className="toolsContainer">
                <div className="toolsContainerTitle">
                    <h3><div className="titleColorBox">Tools</div></h3>
                </div>
                <div className="toolsIcons">
                    <img src={vscodeIcon} alt="vscodeIcon" className="vscodeIconImg" />
                    <img src={figmaIcon} alt="figmaIcon" className="figmaIconImg" />
                    <img src={indesignIcon} alt="indesignIcon" className="indesignIconImg" />
                </div>
            </div>
        </div>
    )
}