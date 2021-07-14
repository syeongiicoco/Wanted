import React, { Component } from 'react';
import './Right.scss';

class Right extends Component {
  render() {
    return (
      <div>
        <div className="searchDevelopRightItem">
          {SEARCHDEVELOPRIGHTITEMS.map((searchdeveloprightitem, index) => {
            return (
              <div key={index} className="develop">
                {searchdeveloprightitem}
              </div>
            );
          })}
          <span className="moreView">
            더보기
            <i class="fas fa-chevron-right" />
          </span>
        </div>
      </div>
    );
  }
}

export default Right;

const SEARCHDEVELOPRIGHTITEMS = [
  '파이썬 개발자',
  '데이터 엔지니어',
  'DevOps / 시스템관리자',
  '머신러닝 엔지니어',
  '데이터 사이언티스트',
  '시스템,네트워크 관리자',
  'C,C++ 개발자',
];
