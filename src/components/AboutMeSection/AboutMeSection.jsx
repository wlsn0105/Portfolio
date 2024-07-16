import React from "react"
import './styles/AboutMeSection.css'

export default function AboutMeSection() {
    return (
        <div className="aboutMeSection">
            <div className="aboutMeContainer">
                <div className="containerHeader">
                    <h2>
                        ABOUT ME
                    </h2>
                </div>
                <div className="containerBox">
                    <div className="containerLeft">
                        왼쪽
                    </div>
                    <div className="containerRight">
                        오른쪽
                    </div>
                </div>
            </div>
        </div>
    ) 
}