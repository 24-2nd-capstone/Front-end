import './Header.css';
import React from "react";
import logo from '../img/logo_col.png';
import message from '../img/message.png'
import mypage from '../img/mypage.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  
  return (
    <div className="Header">
      <img src={logo} className="logoImg" onClick={()=>navigate('/home')} />
      <div className="menu">
        <p onClick={() => navigate('/book')}>북적작가</p>
        <p onClick={() => navigate('/workbook')}>북적배달</p>
        <p onClick={() => navigate('/author')}>북적거래</p>
        <div className='Icon'>
        <p onClick={() => navigate('/login')}>로그인</p>
          <img src={message} className="message" />
          <img src={mypage} className="myPage" />
        </div>
      </div>
    </div>
  )
}

export default Header;