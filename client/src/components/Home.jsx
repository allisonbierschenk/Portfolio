import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Nav from "./Nav";
import "../assets/Home.css";

export default function Home() {
  // let ballX = 50
  // let canvasContext;
  // window.onload = function () {
  //   let canvas = document.getElementById("gameCanvas");
  //   let canvasContext = canvas.getContext("2s");
  //   // setInterval(drawEverything, 1000);
  // }
  // const drawEverything = () => {
  //   ballX = ballX + 20
  //   console.log("ballx", ballX)

  // }
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
