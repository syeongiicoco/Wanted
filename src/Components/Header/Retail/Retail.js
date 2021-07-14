import React, { Component } from 'react';
import './Retail.scss';

class Retail extends Component {
  render() {
    return (
      <div>
        <div className="retailBox">
          <div className="box">
            <p className="search">고객서비스,리테일</p>
            <i class="fas fa-chevron-right" />
          </div>
          {RETAILITEMS.map((retailitem, index) => {
            return (
              <div key={index} className="develop">
                {retailitem}
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

export default Retail;
const RETAILITEMS = [
  'MD',
  '서비스 운영',
  'CS 매니저',
  '리테일 MD',
  'CS 어드바이저',
  '패션 MD',
  'CRM 전문가',
];
