import React, { Component } from 'react';
import './Media.scss';

class Media extends Component {
  render() {
    return (
      <div>
        <div className="mediaBox">
          <div className="box">
            <p className="search">미디어</p>
            <i class="fas fa-chevron-right" />
          </div>
          {MEDIAITEMS.map((mediaitem, index) => {
            return (
              <div key={index} className="develop">
                {mediaitem}
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

export default Media;
const MEDIAITEMS = [
  '콘텐츠 크리에이터',
  'PD',
  '영상 편집가',
  '에디터',
  '비디오 제작',
  '작가',
  '출판 기획자',
];
