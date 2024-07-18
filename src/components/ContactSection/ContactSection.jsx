import React from "react";
import './styles/ContactSection.css'
import myphoto from '../../assets/images/myphoto.JPG'

export default function ContactSection() {
    return (
        <div className="contactSection">
            <div className="contactSectionTitle">
                <h2>CONTACT</h2>
            </div>
            <div className="contactContainer">
                <img src={myphoto} alt="myphoto" className="myphotoImg" />
                <div className="containerText">
                    <h3>믿고 맡길 수 있는 개발자가 필요한가요?</h3>
                </div>
            </div>
        </div>
    )
}