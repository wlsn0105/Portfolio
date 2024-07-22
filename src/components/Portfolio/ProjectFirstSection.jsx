import React from "react";
import './styles/ProjectFirstSection.css'
import imac from '../../assets/images/imac.png'

export default function ProjectFirstSection() {
    return (
        <div className="projectFirstSection">
            <div className="projectFirstContainer">
                <img src={imac} alt="imac" className="imacImg" />
            </div>
        </div>
    )
}