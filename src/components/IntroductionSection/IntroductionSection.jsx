import React from "react"
import Introduction from "./Introduction.jsx"
import './styles/IntroductionSection.css'
import myphoto from '../../assets/images/myphoto.JPG'

export default function IntroductionSection() {
    return (
        <div className="introductionSection">
            <div className="introductionContainer">
                <div className="introductionBox">
                    <img src={myphoto} alt="myphoto" className="myphotoImg"/>
                    <Introduction />
                </div>
            </div>
        </div>
    )
}