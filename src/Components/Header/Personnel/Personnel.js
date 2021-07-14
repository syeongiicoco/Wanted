import React, { Component } from 'react';
import './Personnel.scss';

class Personnel extends Component {
  render() {
    return (
      <div>
        <div className="personnelBox">
          <div className="box">
            <p className="search">인사</p>
            <i class="fas fa-chevron-right" />
          </div>
          {PERSONNELITEMS.map((personnelitem, index) => {
            return (
              <div key={index} className="develop">
                {personnelitem}
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

export default Personnel;

const PERSONNELITEMS = [
  '인사담당',
  '리크루터',
  '조직문화',
  '평가,보상',
  '헤드헌터',
  'HRBP',
  'HRD',
];
