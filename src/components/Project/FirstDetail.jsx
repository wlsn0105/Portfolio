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
                        <div className='detailRole'>
                            <h3 className='roleColor'>담당 역할</h3>
                            <h3>UX/UI 설계 및 개발</h3>
                        </div>
                        <div className='detailContent'>
                            <span>노년층을 타겟으로 한 음성 상담 플랫폼 웹앱 사이트입니다.</span>
                            <span>업체와 직접 소통하면서 색상부터 시작해서 위계질서를 고려하며 UI,</span>
                            <span>사용자의 관점을 고려하며 UX를 설계하였습니다.</span>
                            <span>웹앱 디자인 및 개발 작업을 진행하며 배포까지 진행하였습니다.</span>
                        </div>
                        <a href="http://jooyajooya.com/" target="_blank" rel="noreferrer">
                          <button className='detailButton'>
                              더 보기 ➡
                            </button>
                        </a>
                  </div>
            </div>
            <div>
                ss
            </div>
        </div>
    </div>
  );
}


