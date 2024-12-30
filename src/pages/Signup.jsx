import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from '../img/logo_col.png';

function Signup() {
  const [formData, setFormData] = useState({
    nickname: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    alert('회원가입이 완료되었습니다!');
    navigate('/home'); // 가입 후 이동할 페이지
  };

  return (
    <div className="App">
      <Header />
      <div className="signup-container">
        <div className="logo">
          <img src={logo} className="logoImg" alt="로고" />
        </div>
        <form className="signup-form" onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="nickname">닉네임</label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              placeholder="닉네임을 입력하세요"
              value={formData.nickname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">아이디</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="아이디를 입력하세요"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="비밀번호를 다시 입력하세요"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">휴대폰 번호</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="휴대폰 번호를 입력하세요"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="signup-button">회원가입</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
