import React from "react"
import Introduction from "./Introduction.jsx"
import './styles/IntroductionSection.css'
import myphoto from '../../assets/images/myphoto.JPG'

export default function IntroductionSection() {

        return (
            <div className="introductionSection">
                <div className="introductionContainer">
                    <div className="introductionBox">
                        <img src={myphoto} alt="myphoto" className="myphotoImg" />
                        <Introduction />
                    </div>
                        <div className="scrollAnimation">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2em"
                            color="#222"
                            viewBox="0 0 24 24"
                            >
                            <path
                                fill="currentColor"
                                d="M11 19.5V7.914l-4.5 4.5L5.086 11L12 4.086L18.914 11L17.5 12.414l-4.5-4.5V19.5z"
                            />
                            </svg>
                        </div>
                </div>
            </div>
        )
    }
