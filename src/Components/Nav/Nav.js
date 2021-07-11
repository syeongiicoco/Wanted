import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      navHidden: false,
    };
  }

  isNavHidden = () => {
    this.setState({
      navHidden: !this.state.navHidden,
    });
  };

  render() {
    return (
      <nav>
        <div className="navBox">
          <div className="nav">
            <div className="titleButton">Wanted</div>
            <div className="categoryBox">
              <div className="categorySearchBox" onClick={this.isNavHidden}>
                탐색
              </div>
              {NAVS.map((nav, index) => {
                return (
                  <div key={index} className="category">
                    {nav}
                  </div>
                );
              })}
              <div className="loginBox">
                <i class="fas fa-search" />
                <i class="far fa-bell" />
                <i class="fas fa-user-circle" />
                <span className="bar">|</span>
                <span className="companyService">기업 서비스</span>
              </div>
            </div>
          </div>
          <div className="hiddenNav">
            {this.state.navHidden && (
              <>
                <div className="developBox">
                  <div className="search">
                    개발
                    <i class="fas fa-chevron-right" />
                  </div>
                  <div className="searchDevelopItem">
                    <div className="searchDevelopLeftItem">
                      {SEARCHDEVELOPLEFTITEMS.map(
                        (searchdevelopleftitem, index) => {
                          return (
                            <div key={index} className="develop">
                              {searchdevelopleftitem}
                            </div>
                          );
                        }
                      )}
                    </div>
                    <div className="searchDevelopRightItem">
                      {SEARCHDEVELOPRIGHTITEMS.map(
                        (searchdeveloprightitem, index) => {
                          return (
                            <div key={index} className="develop">
                              {searchdeveloprightitem}
                            </div>
                          );
                        }
                      )}
                      <span className="moreView">
                        더보기
                        <i class="fas fa-chevron-right" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="managementBox">
                  <div className="search">
                    경영비즈니스
                    <i class="fas fa-chevron-right" />
                  </div>
                  <div className="managementItemBox">
                    {MANAGEMENTITMES.map((managementitem, index) => {
                      return (
                        <div key={index} className="develop">
                          {managementitem}
                        </div>
                      );
                    })}
                    <span className="moreView">
                      더보기
                      <i class="fas fa-chevron-right" />
                    </span>
                  </div>
                </div>
                <div className="marketingBox">
                  <div className="search">
                    마케팅,광고
                    <i class="fas fa-chevron-right" />
                  </div>
                  <div className="marketingItemBox">
                    {MARKETINGITEMS.map((marketingitem, index) => {
                      return (
                        <div key={index} className="develop">
                          {marketingitem}
                        </div>
                      );
                    })}
                    <span className="moreView">
                      더보기
                      <i class="fas fa-chevron-right" />
                    </span>
                  </div>
                </div>

                <div classsName="designBox">
                  <div className="search">
                    디자인
                    <i class="fas fa-chevron-right" />
                  </div>
                  <div className="designItemBox">
                    {DESIGNITEMS.map((designitem, index) => {
                      return (
                        <div key={index} className="develop">
                          {designitem}
                        </div>
                      );
                    })}
                    <span className="moreView">
                      더보기
                      <i class="fas fa-chevron-right" />
                    </span>
                  </div>
                </div>

                <div className="retailBox">
                  <div className="search">
                    고객서비스,리테일
                    <i class="fas fa-chevron-right" />
                  </div>
                  <div className="retailItemBox">
                    {RETAILITEMS.map((retailitem, index) => {
                      return (
                        <div key={index} className="develop">
                          {retailitem}
                        </div>
                      );
                    })}
                    <span className="moreView">
                      더보기
                      <i class="fas fa-chevron-right" />
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;

const NAVS = [
  '커리어성장',
  '직군별 연봉',
  '이력서',
  '매치업',
  '프리랜서',
  'Ai 합격예측',
];
const SEARCHDEVELOPLEFTITEMS = [
  '서버 개발자',
  '웹 개발자',
  '프론트엔드 개발자',
  '자바 개발자',
  '소프트웨어 엔지니어',
  '안드로이드 개발자',
  'iOS 개발자',
  'Node.js 개발자',
];

const SEARCHDEVELOPRIGHTITEMS = [
  '파이썬 개발자',
  '데이터 엔지니어',
  'DevOps / 시스템관리자',
  '머신러닝 엔지니어',
  '데이터 사이언티스트',
  '시스템,네트워크 관리자',
  'C,C++ 개발자',
];

const MANAGEMENTITMES = [
  '서비스 기획자',
  'PM,PO',
  '사업개발, 기획자',
  '전략 기획자',
  '운영 매니저',
  '데이터 분석가',
  '경영지원',
];

const MARKETINGITEMS = [
  '디지터 마케터',
  '마케터',
  '콘텐츠 마케터',
  '퍼포먼스 마케터',
  '마케팅 전략 기획자',
  '브랜드 마케터',
  '광고 기획자(AE)',
];

const DESIGNITEMS = [
  'UX 디자이너',
  'UI,GUI 디자이너',
  '웹 디자이너',
  '그래픽 디자이너',
  '모바일 디자이너',
  'BI/BX 디자이너',
  '광고 디자이너',
];

const RETAILITEMS = [
  'MD',
  '서비스 운영',
  'CS 매니저',
  '리테일 MD',
  'CS 어드바이저',
  '패션 MD',
  'CRM 전문가',
];
