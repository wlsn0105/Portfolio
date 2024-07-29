import React from 'react';
import MoreHeader from '../../Header/MoreHeader.jsx'
import './styles/ThirdDetail.css'
import turtlelearnlogo from '../../../assets/images/ProjectSectionImages/turtlelearnlogo.png'
import ThirdUI from './ThirdUI.jsx';
import ContactSection from '../../ContactSection/ContactSection.jsx';


export default function thirdDetail() {
  return (
      <div className='firstDetail'>
      <MoreHeader />
          <div className='firstDetailSection'>
              <div className='detailContainer'>
                <div className='detailBox'>
                        <div className='detailTitle'>
                            <img src={turtlelearnlogo} alt="turtlelearnlogo" className="turtlelearnlogoImg" />
                            <h2>
                                &nbsp; 경계선 지능인을 위한 앱 서비스
                            </h2>
                        </div>
                        <div className='detailRole'>
                            <h3 className='roleColor'>담당 역할</h3>
                            <h3>UX/UI 설계</h3>
                            <h3 className='roleColor'>기여도</h3>
                            <h3>UX/UI 설계 및 디자인 100%</h3>
                        </div>
                        <div className='detailContent'>
                            <span>경계선 지능인을 타겟으로 한 학습 앱 서비스입니다.</span>
                            <span>경계선 지능인들이 사용자인 것을 고려해 서울시 경계선 지능인 평생교육센터에서 사용하는</span>
                            <span>메인 색상을 참고 하였으며, 폰트도 고려하여 UX/UI를 설계 및 디자인 하였습니다.</span>
                            <span>약 700만 명의 경계선 지능인들을 위해</span>
                            <span>성인지 학습, 읽기 및 말하기 학습, 문해력 학습, 진로 탐색으로 학습할 수 있습니다.</span>
                        </div>
                        {/* <a href="http://turtlelearnlogo.com/" target="_blank" rel="noreferrer">
                          <button className='detailButton'>
                              더 보기 ➡
                            </button>
                        </a> */}
                        <a href="https://github.com/ubsal-net/turtle-learn-front" target='_blank' rel="noreferrer">
                          <button className='detailButton'>
                            View Code
                          </button>
                        </a>
                </div>
            </div>
              <ThirdUI />
              <ContactSection />
        </div>
    </div>
  );
}


