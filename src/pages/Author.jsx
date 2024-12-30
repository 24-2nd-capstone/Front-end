import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Author.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import book1 from '../img/book1.jpeg';
import book2 from '../img/book2.jpeg';
import book3 from '../img/book3.jpeg';
import book4 from '../img/book4.jpeg';
import book5 from '../img/book5.jpeg';
import book6 from '../img/book6.jpeg';
import book7 from '../img/book7.jpeg';
import book8 from '../img/book8.jpeg';
import book9 from '../img/book9.jpeg';
import book10 from '../img/book10.jpeg';
import book11 from '../img/book11.jpeg';
import book12 from '../img/book12.jpeg';
import book13 from '../img/book13.jpeg';
import book14 from '../img/book14.jpeg';
import book15 from '../img/book15.jpeg';
import book16 from '../img/book16.jpeg';
import book17 from '../img/book17.jpeg';
import book18 from '../img/book18.jpeg';
import book19 from '../img/book19.jpeg';
import book20 from '../img/book20.jpeg';

const books = [
  { id: 1, title: "달까지 가자", author: "장류진", tag: "중고거래", image: book1 },
  { id: 2, title: "아몬드", author: "손원평", tag: "중고거래", image: book2 },
  { id: 3, title: "오늘밤 세계에서 이 사랑이 사라진다 해도", author: "이치조 미사키", tag: "중고거래", image: book3 },
  { id: 4, title: "돌이킬 수 없는 약속", author: "아카가와 쥰", tag: "중고거래", image: book4 },
  { id: 5, title: "1퍼센트 부자의 법칙", author: "사이토 히토리", tag: "중고거래", image: book5 },
  { id: 6, title: "바다가 들리는 편의점", author: "마치다 소노코", tag: "중고거래", image: book6 },
  { id: 7, title: "소녀 연예인 이보나", author: "한정현", tag: "중고거래", image: book7 },
  { id: 8, title: "마지막 마음이 닿는 공중전화", author: "이수연", tag: "중고거래", image: book8 },
  { id: 9, title: "불편한 편의점", author: "김호연", tag: "무료나눔", image: book9 },
  { id: 10, title: "너의 초록으로 다시", author: "나태주", tag: "중고거래", image: book10 },
  { id: 11, title: "긴긴밤", author: "루리", tag: "중고거래", image: book11 },
  { id: 12, title: "불완한 완벽주의자를 위한 책", author: "마이클 투히그.클라리사 옹", tag: "중고거래", image: book12 },
  { id: 13, title: "마흔살에 읽는 쇼펜하우어", author: "김용수", tag: "중고거래", image: book13 },
  { id: 14, title: "고층병원의 갱스터 할머니", author: "양유진", tag: "중고거래", image: book14 },
  { id: 15, title: "나는 행복한 푸바오 할부지입니다", author: "강철원", tag: "중고거래", image: book15 },
  { id: 16, title: "모든 순간이 너였다", author: "하태완", tag: "중고거래", image: book16 },
  { id: 17, title: "소크라테스 익스프레스", author: "에릭 와이너", tag: "중고거래", image: book17 },
  { id: 18, title: "언어의 온도", author: "이기주", tag: "중고거래", image: book18 },
  { id: 19, title: "미드나잇 라이브러리", author: "매트 헤이그", tag: "무료나눔", image: book19 },
  { id: 20, title: "시작의 기술", author: "개리비숍", tag: "중고거래", image: book20 },
];

const Author = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("모두");
  const [sort, setSort] = useState("최신순");
  const itemsPerPage = 16;
  const navigate = useNavigate();
  const location = useLocation();
  const bookData = location.state;

  const filteredBooks = books
    .filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((book) => (category === "모두" ? true : book.tag === category));

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sort === "최신순") return b.id - a.id;
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = sortedBooks.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(sortedBooks.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleBookClick = (book) => {
    navigate(`/book/${book.id}`, { state: book }); // 책 정보를 state로 전달
  };

  return (
    <div>
      <Header />
      <div className="author-marketplace">
        <div className="title-container">
          <h1>북적거래</h1>
          <button
            className="upload-button"
            onClick={() => navigate("/upload")}
          >
            책 올리기
          </button>
        </div>
        <div className="filters">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="filter-select"
          >
            <option value="모두">모두</option>
            <option value="중고거래">중고거래</option>
            <option value="무료나눔">무료나눔</option>
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="filter-select"
          >
            <option value="최신순">최신순</option>
            <option value="오래된순">오래된순</option>
          </select>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="검색하기"
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={() => setCurrentPage(1)}>
            검색
          </button>
        </div>
        <div className="books-grid">
          {currentBooks.length > 0 ? (
            currentBooks.map((book) => (
              <div
                key={book.id}
                className="book-card"
                onClick={() => handleBookClick(book)}
              >
                <div className="book-thumbnail">
                  <img src={book.image} alt={book.title} />
                </div>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <span
                  className={`tag ${book.tag === "무료나눔" ? "free" : "used"}`}
                >
                  {book.tag}
                </span>
              </div>
            ))
          ) : (
            <p>검색 결과가 없습니다.</p>
          )}
        </div>
        {sortedBooks.length > itemsPerPage && (
          <div className="pagination">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Author;
