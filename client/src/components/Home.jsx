import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '@material-ui/core';

import "../assets/Home.css";
import Nav from './Nav';
import Footer from "./Footer"

export default function Hero() {
  const isDesktop = useMediaQuery('(min-width: 768px)'); // Adjust the breakpoint as needed
  const [showWinScreen, setShowWinScreen] = useState(false)
  const [player1, setplayer1] = useState(0)
  const [player2, setplayer2] = useState(0)
  const canvasRef = useRef(null);
  let ballX = 50;
  let ballY = 50;
  let ballSpeedX = 10
  let ballSpeedY = 5
  let paddleY = 250
  let paddleX = 250
  let thickness = 10
  const winningScore = 6
  const paddleHeight = 100

  const calculateMousePosition = (evt) => {
    const canvas = canvasRef.current;
    let rect = canvas.getBoundingClientRect()
    let root = document.documentElement
    let mouseX = evt.clientX - rect.left - root.scrollLeft
    let mouseY = evt.clientY - rect.top - root.scrollTop
    return {
      X: mouseX,
      Y: mouseY
    }
  }
  const handleMouseClick = () => {
    setplayer1(0)
    setplayer2(0)
    setShowWinScreen(false)
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const framesPerSecond = 30
    if (player1 >= winningScore || player2 >= winningScore) {
      setShowWinScreen(true)
      setplayer1(0)
      setplayer2(0)
    }
    if (!showWinScreen && isDesktop) {
      canvas.addEventListener("mousemove", function (evt) {
        let mousePos = calculateMousePosition(evt)
        paddleY = mousePos.Y - (paddleHeight/2)
      })
      const interval = setInterval(() => {
        if (!canvas) {
          return;
        }
        drawEverything();
        moveEverything();
        
        }, 1000 / framesPerSecond);
    
        return () => clearInterval(interval);
      }
  }, [player1, player2, isDesktop]);

  const ballReset = () => {
    if (!showWinScreen) {
      const canvas = canvasRef.current;
      if (!canvas) {
        return;
      }
      ballSpeedX = -ballSpeedX
      ballX = canvas.width / 2
      ballY = canvas.height / 2
    }
  }
  const computerMovement = () => {
    const paddleXCenter = paddleX + (paddleHeight/2)
    if (paddleXCenter < ballY-35) {
      paddleX += 6
    } else if (paddleXCenter > ballY+35){
      paddleX -= 6
    }
  }
  const moveEverything = () => {
    if (!showWinScreen) {
      const canvas = canvasRef.current;
      if (!canvas) {
        return;
      }
      computerMovement()  
      ballX += ballSpeedX;
      ballY += ballSpeedY;
  
      if (ballX < 0) {
        if (ballY > paddleY && ballY < paddleY + paddleHeight) {
          ballSpeedX = -ballSpeedX
          let deltaY = ballY - (paddleY + paddleHeight / 2)
          ballSpeedY = deltaY*0.35
        } else {
          setplayer2((prevPlayer2) => prevPlayer2 + 1);
          ballReset()
        }
      }
      if (ballX > canvas.width) {
        if (ballY > paddleX && ballY < paddleX + paddleHeight) {
          ballSpeedX = -ballSpeedX
          let deltaY = ballY - (paddleX + paddleHeight / 2)
          ballSpeedY = deltaY*.35
        } else {
          setplayer1((prevPlayer1) => prevPlayer1 + 1);
          ballReset()
        }
      }
      if (ballY < 0) {
        ballSpeedY = -ballSpeedY
      }
      if (ballY > canvas.height) {
        ballSpeedY = -ballSpeedY
      }
    }
  }
  const drawNet = () => {
    const canvas = canvasRef.current;
    for (let i = 0; i < canvas.height; i += 40){
      colorRect(canvas.width/2-1, i,2,20, "pink")
    }
  }

  const drawEverything = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const canvasContext = canvas.getContext('2d');
  // makes a black square
    colorRect(0, 0, canvas.width, canvas.height, "green")
    drawNet()
  // makes the left paddle
    colorRect(0, paddleY, thickness, paddleHeight, "white")
  // make the right paddle
    colorRect(canvas.width -thickness, paddleX, thickness, paddleHeight, "white")
  // makes the ball
    colorCircle(ballX, ballY, 10, "white")
  //score keeper
    canvasContext.fillText(`Your score: ${player1}`, 100, 100)
    canvasContext.fillText(`Computer score: ${player2}`, canvas.width-100, 100)

  };
  const colorCircle = (centerX, centerY, radius, drawColor) => {
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = drawColor
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true)
    canvasContext.fill()
  }
  const colorRect = (leftX, topY, width, height, drawColor) => {
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = drawColor
    canvasContext.fillRect(leftX, topY, width, height)
    
  }
  console.log("isdesktop", isDesktop)
  return (
    <div>
      <Nav/>
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <div className="hero">
      <div className="hello">Discover the Engineering Journey of Allison Bierschenk</div>
      <Link className="fancy-button " to="/about"></Link>
        <div className="my-pic">
        <img
          src="https://i.imgur.com/3UEODg1.jpg?1"
          alt="allison-bierschenk"
        />
        </div>
        {isDesktop && 
          <>
        {!showWinScreen && 
          <div className="game-container">  
          <div className='center-div'>First one to 6 wins!</div>
          <canvas
          style={{ zIndex: 6 }}
          ref={canvasRef}
          id="gameCanvas"
          width={800} height={400}
          />
          </div>
        }
        {showWinScreen && (
          <div className="won-screen moving-border">
          <div>
          {player1 ? 'You won!' : 'Computer won!'}
          </div>
          <div onClick={handleMouseClick}>Click to play again</div>
          </div>
          )}
          </>
        }
      </div>
      <Footer/>
    </div>
  );
}
