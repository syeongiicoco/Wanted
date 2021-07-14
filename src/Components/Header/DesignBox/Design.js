import React, { Component } from 'react';
import './Design.scss';

class Design extends Component {
  render() {
    return (
      <div>
        <div classsName="designBox">
          <div className="box">
            <p className="search">디자인</p>
            <i class="fas fa-chevron-right" />
          </div>
          {DESIGNITEMS.map((designitem, index) => {
            return (
              <div key={index} className="develop">
                {designitem}
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

export default Design;
const DESIGNITEMS = [
  'UX 디자이너',
  'UI,GUI 디자이너',
  '웹 디자이너',
  '그래픽 디자이너',
  '모바일 디자이너',
  'BI/BX 디자이너',
  '광고 디자이너',
];
