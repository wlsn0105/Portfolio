import React from "react";
import './styles/ContactSection.css'
import myphoto from '../../assets/images/myphoto.JPG'
import emailIcon from '../../assets/images/emailIcon.png'
import phoneIcon from '../../assets/images/phoneIcon.png'

export default function ContactSection() {
    return (
        <div className="contactParent">
            <div className="contactSection">
                <div className="contactSectionTitle">
                    <h2>CONTACT</h2>
                </div>
                <div className="contactContainer">
                    <img src={myphoto} alt="myphoto" className="myphotoImg" />
                <div className="containerText">
                    <h3>믿고 맡길 수 있는 개발자가 필요한가요?</h3>
                    <span>팀원들과 소통하며 사용자의 관점을 생각하는 UX 개발자 박진우입니다.</span>
                    <span>언제든 연락주세요!☺️</span>
                    <div className="emailBox">
                        <img src={emailIcon} alt="emailIcon" className="emailIconImg" />
                        <span>pjw96929692@gmail.com</span>
                    </div>
                    <div className="phoneBox">
                        <img src={phoneIcon} alt="phoneIcon" className="phoneIconImg" />
                        <span>010.5743.9692</span>
                    </div>
                </div>
                </div>
                <div className="copyrightContainer">
                    <span className="copyrightText">COPYRIGHT 2024. Park Jinwoo All rights reserved</span>
                </div>
            </div>
        </div>
    )
}