import React, { Component } from 'react';
import './Left.scss';

class Left extends Component {
  render() {
    return (
      <div>
        <div className="searchDevelopLeftItem">
          <div className="box">
            <p className="title">개발</p>
            <i class="fas fa-chevron-right" />
          </div>
          {SEARCHDEVELOPLEFTITEMS.map((searchdevelopleftitem, index) => {
            return (
              <div key={index} className="develop">
                {searchdevelopleftitem}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Left;
const SEARCHDEVELOPLEFTITEMS = [
  '서버 개발자',
  '웹 개발자',
  '프론트엔드 개발자',
  '자바 개발자',
  '소프트웨어 엔지니어',
  '안드로이드 개발자',
  'iOS 개발자',
  'Node.js 개발자',
];
