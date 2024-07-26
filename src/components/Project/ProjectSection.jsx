import React from "react";
import './styles/ProjectSection.css'
import ProjectFirstSection from "./ProjectFirstSection/ProjectFirstSection"
import ProjectSecondSection from "./ProjectSecondSection/ProjectSecondSection";

export default function ProjectSection() {
    return (
        <div className="projects">
        <div className="projectSection">
            <div className="projectSectionTitle">
                <h2>PROJECT</h2>
            </div>
            <ProjectFirstSection />
        </div>
            <ProjectSecondSection />
        </div>
    )
}