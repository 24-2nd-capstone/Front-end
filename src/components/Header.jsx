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
      <img src={logo} className="logoImg" onClick={()=>navigate('/')} />
      <div className="menu">
        <p onClick={() => navigate('/book')}>도서를 함께</p>
        <p onClick={() => navigate('/workbook')}>문제집을 함께</p>
        <p onClick={() => navigate('/author')}>독립작가존</p>
        <p onClick={() => navigate('/suggest')}>이달의 책 추천</p>
        <div className='Icon'>
          <img src={message} className="message" />
          <img src={mypage} className="myPage" />
        </div>
      </div>
    </div>
  )
}

export default Header;