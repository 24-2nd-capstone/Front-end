import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slide from "../components/Slide";
import Menu from "../components/Menu";
import Book from "../components/Book";
import './Home.css';

const Home = () => {
  return(
    <div className="Home">
      <Header />
      <Slide />
      <Menu />
      <Book />
      <Footer />
    </div>
  )
}

export default Home;