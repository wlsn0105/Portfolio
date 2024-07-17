import React from "react"
import './styles/Main.css'
import IntroductionSection from '../IntroductionSection/IntroductionSection.jsx'
import Header from "../Header/Header.jsx"
import AboutMeSection from '../AboutMeSection/AboutMeSection.jsx'
import PortfolioSection from "../Portfolio/PortfolioSection.jsx"

export default function Main() {
    
    return (
        <div>
            <Header />
            <div className="section">
                <IntroductionSection>
                </IntroductionSection>
                <AboutMeSection />
                <PortfolioSection />
            </div>
        </div>
    )
}