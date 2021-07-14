import React, { Component } from 'react';
import Left from './Left/Left';
import Right from './Right/Right';
import Management from './Management/Management';
import Marketing from './Marketing/Marketing';
import Design from './DesignBox/Design';
import Retail from './Retail/Retail';
import Sales from './Sales/Sales';
import Media from './Media/Media';
import Personnel from './Personnel/Personnel';
import Game from './Game/Game';
import Engineering from './Engineering/Engineering';
import Etc from './ETC/Etc';

import './Header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      navHidden: false,
    };
  }

  isNavHidden = () => {
    this.setState({
      navHidden: !this.state.navHidden,
    });
  };

  render() {
    return (
      <>
        <div className="allBox">
          <div className="navBox">
            <div className="nav">
              <div className="titleButton">Wanted</div>
              <div className="categoryBox">
                <div className="categorySearchBox" onClick={this.isNavHidden}>
                  탐색
                </div>
                {NAVS.map((nav, index) => {
                  return (
                    <div key={index} className="category">
                      {nav}
                    </div>
                  );
                })}
                <div className="ai">
                  Ai 합격예측
                  <p className="beta">Beta</p>
                </div>
                <div className="loginBox">
                  <i class="fas fa-search" />
                  <i class="far fa-bell" />
                  <i class="fas fa-user-circle" />
                  <span className="bar">|</span>
                  <span className="companyService">기업 서비스</span>
                </div>
              </div>
            </div>
          </div>
          {this.state.navHidden && (
            <div className="hiddenNav">
              <Left />
              <Right />
              <Management />
              <Marketing />
              <Design />
              <Retail />
              <Sales />
              <Media />
              <Personnel />
              <Game />
              <Engineering />
              <Etc />
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Header;

const NAVS = ['커리어성장', '직군별 연봉', '이력서', '매치업', '프리랜서'];
