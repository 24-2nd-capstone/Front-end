import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Workbook.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

function Workbook() {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert('북적배달 신청이 완료되었습니다!');
    setFormSubmitted(true);
    navigate('/'); 
  };

  return (
    <div className="Workbook">
      <Header />
      <main className="delivery-container">
        <section className="delivery-header">
          <h1>북적배달 신청하기</h1>
          <p>매 달 당신에게 따뜻한 선물로 다가오는 3권의 책을 만나보세요.</p>
          <p className="price">월 9,900원</p>
        </section>

        <section className="delivery-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="start-date">북적배달 시작날짜</label>
              <input type="date" id="start-date" required />
            </div>

            <div className="form-group">
              <label htmlFor="genre">선호 장르</label>
              <select id="genre" required>
                <option value="romance">로맨스</option>
                <option value="thriller">스릴러</option>
                <option value="fiction">소설</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="recipient">받는분</label>
              <input
                type="text"
                id="recipient"
                placeholder="책을 받을 분의 성함을 입력해주세요."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">전화번호</label>
              <input
                type="tel"
                id="phone"
                placeholder="책을 받을 분의 전화번호를 입력해주세요."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">주소</label>
              <input
                type="text"
                id="address"
                placeholder="책이 배달될 주소를 입력해주세요."
                required
              />
              <input
                type="text"
                id="detailed-address"
                placeholder="상세주소를 입력해주세요."
                required
              />
            </div>

            <div className="form-group">
              <label>결제수단</label>
              <div className="payment-methods">
                <div className="payment-option">
                  <input type="radio" id="kakao" name="payment" required />
                  카카오페이
                </div>
                <div className="payment-option">
                  <input type="radio" id="credit-card" name="payment" required />
                  신용카드
                </div>
                <div className="payment-option">
                  <input type="radio" id="bank" name="payment" required />
                  무통장입금
                </div>
              </div>
            </div>
            <button type="submit" className="submit-button">
              신청하기
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Workbook;
