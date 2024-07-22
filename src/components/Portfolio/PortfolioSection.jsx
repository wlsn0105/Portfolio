import React from "react";
import './styles/PortfolioSection.css'
import ProjectFirstSection from "./ProjectFirstSection";

export default function PortfolioSection() {
    return (
        <div className="portfolioSection">
            <div className="portfolioSectionTitle">
                <h2>PROJECT</h2>
            </div>
            <ProjectFirstSection />
        </div>
    )
}