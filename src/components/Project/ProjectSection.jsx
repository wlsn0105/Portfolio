import React from "react";
import './styles/ProjectSection.css'
import ProjectFirstSection from "./ProjectFirstSection/ProjectFirstSection"
import ProjectSecondSection from "./ProjectSecondSection/ProjectSecondSection";
import ProjectThirdSection from "./ProjectThirdSection/ProjectThirdSection";
import { Element } from 'react-scroll';

export default function ProjectSection() {
    return (
        <Element name="section2">
        <div className="projects">
            <div className="projectSection">
                <div className="projectSectionTitle">
                    <h2>PROJECT</h2>
                </div>
                <ProjectFirstSection />
            </div>
                <ProjectSecondSection />
                <ProjectThirdSection />
            </div>
        </Element>
    )
}