import React, { Component } from 'react';
import './Management.scss';

class Management extends Component {
  render() {
    return (
      <div>
        <div className="managementItemBox">
          <div className="box">
            <p className="title">경영비즈니스</p>
            <i class="fas fa-chevron-right" />
          </div>
          {MANAGEMENTITMES.map((managementitem, index) => {
            return (
              <div key={index} className="develop">
                {managementitem}
              </div>
            );
          })}
          <div className="box">
            <span className="moreView">더보기</span>
            <i class="fas fa-chevron-right" />
          </div>
        </div>
      </div>
    );
  }
}

export default Management;

const MANAGEMENTITMES = [
  '서비스 기획자',
  'PM,PO',
  '사업개발, 기획자',
  '전략 기획자',
  '운영 매니저',
  '데이터 분석가',
  '경영지원',
];
