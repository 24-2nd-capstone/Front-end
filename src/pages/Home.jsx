import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Home.css'

const Home = () => {
  return(
    <div className="Home">
      <Header />
      <div className="box"></div>
      <Footer />
    </div>
  )
}

export default Home;