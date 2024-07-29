import React from 'react';
import MoreHeader from '../../Header/MoreHeader.jsx'
import './styles/SecondDetail.css'
import gelslogo from '../../../assets/images/ProjectSectionImages/gelslogo.png'
import SecondUI from './SecondUI.jsx';
import ContactSection from '../../ContactSection/ContactSection.jsx';
import gelsproject from '../../../assets/images/ProjectSectionImages/gelsproject.jpg'


export default function secondDetail() {
  return (
      <div className='secondDetail'>
      <MoreHeader />
          <div className='secondDetailSection'>
              <div className='detailContainer'>
                <div className='detailBox'>
                        <div className='detailTitle'>
                            <img src={gelslogo} alt="gelslogo" className="gelslogoImg" />
                            <h2>
                                &nbsp; 클린콩 청소업체 온디맨드 시스템(호주 해외 교육 프로젝트)
                            </h2>
                        </div>
                        <div className='detailRole'>
                            <h3 className='roleColor'>담당 역할</h3>
                            <h3>UX/UI 설계 및 개발</h3>
                            <h3 className='roleColor'>기여도</h3>
                            <h3>UX/UI 설계 및 디자인 100%</h3>
                        </div>
                        <div className='detailContent'>
                          <div>
                            <span>호주 청소업체 앱입니다.</span>
                            <span>호주에 있는 청소업체를 직접 방문하고 업체에 필요한 요구사항들을 고려하여</span>
                            <span>UX/UI를 설계 및 개발 하였습니다.</span>
                            <span>한국에서 조사하고 생각했던 요구사항들이 있었지만 현지에서 미팅을 하고 난 후,</span>
                            <span>생각했던 것과는 다른 점이 많이 있었던 문제점을 겪었습니다.</span>
                            <span>해외 시장은 한국이랑 많이 다르다는 것을 배울 수 있었습니다.</span>
                          </div>
                          <a href="https://www.dongseo.ac.kr/kr/?pCode=MN2000192&mode=view&idx=94638" target='_blank' rel="noreferrer">
                            <img src={gelsproject} alt="gelsproject" className='gelsprojectImg'/>
                          </a> 
                        </div>
                        <a href="https://www.cleankongmelbourne.com/" target="_blank" rel="noreferrer">
                          <button className='detailButton'>
                              더 보기 ➡
                            </button>
                        </a>
                        <a href="https://github.com/GELS-CleanKong/admin-front" target='_blank' rel="noreferrer">
                          <button className='detailButton'>
                            View Code
                          </button>
                        </a>
                </div>
            </div>
              <SecondUI />
              <ContactSection />
        </div>
    </div>
  );
}


