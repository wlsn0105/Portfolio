import React from "react";
import './styles/ThirdUI.css'
import turtlelearngroup1 from '../../../assets/images/ProjectSectionImages/turtlelearngroup1.png'
import turtlelearngroup2 from '../../../assets/images/ProjectSectionImages/turtlelearngroup2.png'
import turtlelearngroup3 from '../../../assets/images/ProjectSectionImages/turtlelearngroup3.png'

export default function ThirdUI() {
    return (
            <div className="firstUISection">
                <div className="uiGroup">
                        <img src={turtlelearngroup1} alt="turtlelearngroup1" className="turtlelearngroup1" />
                        <img src={turtlelearngroup2} alt="turtlelearngroup2" className="turtlelearngroup2" />
                        <img src={turtlelearngroup3} alt="turtlelearngroup3" className="turtlelearngroup3" />
                </div>
            </div>
    )
}