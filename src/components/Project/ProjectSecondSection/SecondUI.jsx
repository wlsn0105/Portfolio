import React from "react";
import './styles/SecondUI.css'
import gelsgroup1 from '../../../assets/images/ProjectSectionImages/gelsgroup1.png'
import gelsgroup2 from '../../../assets/images/ProjectSectionImages/gelsgroup2.png'
import gelsgroup3 from '../../../assets/images/ProjectSectionImages/gelsgroup3.png'


export default function SecondUI() {
    return (
            <div className="firstUISection">
                <div className="uiGroup">
                        <img src={gelsgroup1} alt="gelsgroup1" className="gelsgroup1Img" />
                       <img src={gelsgroup2} alt="gelsgroup2" className="gelsgroup2Img" />
                        <img src={gelsgroup3} alt="gelsgroup3" className="gelsgroup3Img" />
                        {/* <img src={jooyajooyagroup} alt="jooyajooyagroup" className="jooyajooyagroupImg" />  */}
                    {/* </div> */}
                </div>
            </div>
    )
}