import React from "react";
import './styles/FirstUI.css'
import jooyajooyamain from '../../../assets/images/ProjectSectionImages/jooyajooyamain.png'
import jooyajooyadetail from '../../../assets/images/ProjectSectionImages/jooyajooyadetail.png'
import jooyajooyagroup from '../../../assets/images/ProjectSectionImages/jooyajooyagroup.png'

export default function FirstUi() {
    return (
            <div className="firstUISection">
                <div className="uiGroup">
                    <div className="uiFirst">
                        <img src={jooyajooyamain} alt="jooyajooyamain" className="jooyajooyamainImg" />
                        <img src={jooyajooyadetail} alt="jooyajooyadetail" className="jooyajooyadetailImg" />
                    </div>
                    {/* <div className="uiSecond"> */}
                        <img src={jooyajooyagroup} alt="jooyajooyagroup" className="jooyajooyagroupImg" /> 
                    {/* </div> */}
                </div>
            </div>
    )
}