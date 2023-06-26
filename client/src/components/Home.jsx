import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Nav from "./Nav";
import "../assets/Home.css";

export default function Home() {
  return (
    <>
      <Nav />
    <div className="home">
      <Hero />
      <Footer/>
    </div>
    </>
  );
}
