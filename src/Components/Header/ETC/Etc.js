import React, { Component } from 'react';
import './Etc.scss';
class Etc extends Component {
  render() {
    return (
      <div>
        <div className="etcBox">
          <p className="search">
            금융 <i class="fas fa-chevron-right" />
          </p>
          {ETCS.map((etc, index) => {
            return (
              <div key={index} className="etc">
                {etc}
                <i class="fas fa-chevron-right" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Etc;
const ETCS = [
  '물류,무역',
  '제조,생산',
  '의료,제약,바이오',
  '교육',
  '법률,법집행기관',
  '식,음료',
  '건설,시설',
  '공공,복지',
];
