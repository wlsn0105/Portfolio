import React from 'react';
import MoreHeader from '../Header/MoreHeader.jsx'
import './styles/FirstDetail.css'
import jooyajooya from '../../assets/images/ProjectSectionImages/jooyajooya.png'

export default function FirstDetail() {
  return (
      <div>
        <MoreHeader />
          <div className='firstDetailSection'>
              <div className='detailContainer'>
                <div className='detailBox'>
                      <div className='detailTitle'>
                          <img src={jooyajooya} alt="jooyajooya" className="jooyajooyaImg" />
                        <h2>
                            &nbsp; 음성 프로토콜 상담 플랫폼(외주)
                        </h2>
                      </div>
                      <div>
                          ss
                      </div>
                </div>
            </div>
        </div>
    </div>
  );
}


