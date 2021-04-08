import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Nav from "./Nav";
import "../assets/Home.css";
import PortfolioPiecesContainer from "./PortfolioPiecesContainer";
import About from "./About";
import { HashLink as Link } from "react-router-hash-link";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="home">
      <Nav />
      <Hero />
      <About />
      <PortfolioPiecesContainer />
      <Contact />
      <Footer />
    </div>
  );
}
