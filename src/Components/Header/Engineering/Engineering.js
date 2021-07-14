import React, { Component } from 'react';
import './Engineering.scss';

class Engineering extends Component {
  render() {
    return (
      <div>
        <div className="engineeringBox">
          <div className="box">
            <p className="search">엔지니어링,설계</p>
            <i class="fas fa-chevron-right" />
          </div>
          {ENGINEERINGITEMS.map((engineeringitem, index) => {
            return (
              <div key={index} className="develop">
                {engineeringitem}
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

export default Engineering;
const ENGINEERINGITEMS = [
  '전자 엔지니어',
  '기계 엔지니어',
  '전자기계 공학자',
  '전기 엔지니어',
  '로봇 자동화',
  'QA 엔지니어',
  '제품 엔지니어',
];
