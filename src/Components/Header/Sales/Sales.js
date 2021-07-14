import React, { Component } from 'react';
import './Sales.scss';

class Sales extends Component {
  render() {
    return (
      <div>
        <div className="salesBox">
          <div className="box">
            <p className="search">영업</p>
            <i class="fas fa-chevron-right" />
          </div>
          {SALESITEMS.map((salesitem, index) => {
            return (
              <div key={index} className="develop">
                {salesitem}
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

export default Sales;
const SALESITEMS = [
  '기업영업',
  '외부영업',
  '영업 관리자',
  '기술영업',
  '주요고객사 담당자',
  '솔루션 컨설던트',
  '해외영업',
];
