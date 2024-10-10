import React from "react";
import './Footer.css'
import logo from '../img/logo_write.png';

const Footer = () => {
  return(
    <div className="Footer">
      <div className="mainText">
        <img src={logo} className="logoImg" />
        <p>회사소개  |  문의하기  | 이용약관</p>
      </div>
      <div className="subText">
        <p>팀명 : 플러스 | 팀장 : 권가령 | 팀원 : 김세연 정윤성 김성산</p>
        <p>Copyright © 북적북적. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;