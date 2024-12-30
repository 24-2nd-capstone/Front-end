import React from "react";
import Header from "../components/Header";
import './Book.css'
import feed1 from'../img/feed1.png'
import feed2 from'../img/feed2.png'
import feed3 from'../img/feed3.png'
import feed4 from'../img/feed4.png'
import feed5 from'../img/feed5.png'
import feed6 from'../img/feed6.png'
import feed7 from'../img/feed7.png'
import feed8 from'../img/feed8.png'
import feed9 from'../img/feed9.png'

const Book = () => {
  return(
    <div className="author">
      <Header />
      <div className="author_group">
        <p className="text">북적작가</p>
        <div className="search_bar">
          <input type="text" className="author_search"/>
        </div>
      </div>
      <div className="feed">
        <img src={feed1} className="author_img"/>
        <img src={feed2} className="author_img"/>
        <img src={feed3} className="author_img"/>
        <img src={feed4} className="author_img"/>
        <img src={feed5} className="author_img"/>
        <img src={feed6} className="author_img"/>
        <img src={feed7} className="author_img"/>
        <img src={feed8} className="author_img"/>
        <img src={feed9} className="author_img"/>
      </div>
    </div>
  )
}

export default Book;