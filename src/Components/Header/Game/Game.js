import React, { Component } from 'react';
import './Game.scss';

class Game extends Component {
  render() {
    return (
      <div>
        <div className="gameBox">
          <div className="box">
            <p className="search">게임 제작</p>
            <i class="fas fa-chevron-right" />
          </div>
          {GAMEDEVELOPITEMS.map((gamedevelopitem, index) => {
            return (
              <div key={index} className="develop">
                {gamedevelopitem}
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

export default Game;
const GAMEDEVELOPITEMS = [
  '게임 기획자',
  '게임 그래픽 디자이너',
  '게임 클라이언트 개발자',
  '모바일 게임 개발자',
  '게임 아티스트',
  '게임 서버 개발자',
  '유니티 개발자',
];
