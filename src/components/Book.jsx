import React from 'react';
import './Book.css';
import dream_book from '../img/dream_book.jpeg'; 
import almond_book from '../img/almond_book.jpeg'; 
import tonight_book from '../img/tonight_book.jpeg'; 
import history_book from '../img/history_book.jpeg'; 
import science_workbook from '../img/science_workbook.jpeg'; 
import english_workbook from '../img/english_workbook.jpeg'; 
import math_workbook from '../img/math_workbook.jpeg'; 
import info_workbook from '../img/info_workbook.jpeg'; 

import { useNavigate } from 'react-router-dom';

const books = [
  { id: 1, title: '달러구트 꿈 백화점', author: '이미예', image: dream_book },
  { id: 2, title: '아몬드', author: '손원평', image: almond_book },
  { id: 3, title: '오늘 밤, 세계에서 이 사랑이 사라진다 해도', author: '이루카', image: tonight_book },
  { id: 4, title: '이름 없는 역사', author: '윤종훈', image: history_book },
];

const workbooks = [
  { id: 1, title: 'O2 중학과학', author: '비상', image: science_workbook },
  { id: 2, title: '수능특강 영어독해', author: 'EBS', image: english_workbook },
  { id: 3, title: '중1 수학 기초 문제집', author: '진선교육', image: math_workbook },
  { id: 4, title: '정보처리기능사 필기 기본서', author: '신사고', image: info_workbook },
];

const BookCard = ({ title, author, image }) => (
  <div className="book_card">
    <div className='book_img'>
      <img src={image} alt={`${title} 이미지`} />
    </div>
    <h3 className='card_title'>{title}</h3>
    <p className='card_author'>{author}</p>
    <button className="condition_btn">상태좋음</button>
  </div>
);

const Book = () => {
  const navigate = useNavigate();
  return (
    <div className="book">
      <section className="book_exchange">
        <div className='title_list'>
          <h2 className='title'>도서 교환</h2>
          <button className="more_btn" onClick={() => { navigate('/author') }}>more</button>
        </div>
        <div className="book_list">
          {books.map(book => (
            <BookCard key={book.id} title={book.title} author={book.author} image={book.image} />
          ))}
        </div>
      </section>
      <section className="workbook_exchange">
        <div className='title_list'>
          <h2 className='title'>문제집 교환</h2>
          <button className="more_btn" onClick={() => { navigate('/autor') }}>more</button>
        </div>
        <div className="book_list">
          {workbooks.map(workbook => (
            <BookCard key={workbook.id} title={workbook.title} author={workbook.author} image={workbook.image} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Book;
