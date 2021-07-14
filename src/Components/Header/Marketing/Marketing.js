import React, { Component } from 'react';
import './Marketing.scss';

class Marketing extends Component {
  render() {
    return (
      <div>
        <div className="marketingBox">
          <div className="box">
            <p className="search">마케팅,광고</p>
            <i class="fas fa-chevron-right" />
          </div>
          {MARKETINGITEMS.map((marketingitem, index) => {
            return (
              <div key={index} className="develop">
                {marketingitem}
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

export default Marketing;
const MARKETINGITEMS = [
  '디지털 마케터',
  '마케터',
  '콘텐츠 마케터',
  '퍼포먼스 마케터',
  '마케팅 전략 기획자',
  '브랜드 마케터',
  '광고 기획자(AE)',
];
