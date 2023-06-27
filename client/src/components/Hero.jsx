import { Link, useHistory } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';

import "../assets/Hero.css";
import Nav from './Nav';

export default function Hero() {
  const canvasRef = useRef(null);
  let ballX = 50;
  let ballY = 50;
  let ballSpeedX = 10
  let ballSpeedY = 5
  let paddleY = 250
  let paddleX = 250
  let thickness = 10
  let player1 = 0
  let player2 = 0
  let showWinScreen = false;
  const winningScore = 3
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
  const handleMouseClick = (evt) => {
    if (showWinScreen) {
      player1 = 0
      player2 = 0
      showWinScreen = false
  }
}

  useEffect(() => {
    const canvas = canvasRef.current;
    const framesPerSecond = 30
    
    setInterval(function () {
      drawEverything();
      moveEverything();
    }, 1000 / framesPerSecond);
    
    canvas.addEventListener("mousedown", handleMouseClick)
    canvas.addEventListener("mousemove", function (evt) {
      let mousePos = calculateMousePosition(evt)
      paddleY = mousePos.Y - (paddleHeight/2)
    })
  }, []);

  const ballReset = () => {
    if (player1 >= winningScore || player2 >= winningScore) {
      showWinScreen = true;
    }
    const canvas = canvasRef.current;
    ballSpeedX = -ballSpeedX
    ballX = canvas.width / 2
    ballY = canvas.height / 2
    

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
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    if (showWinScreen) {
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
        player2 += 1
        ballReset()
      }
    }
    if (ballX > canvas.width) {
      if (ballY > paddleX && ballY < paddleX + paddleHeight) {
        ballSpeedX = -ballSpeedX
        let deltaY = ballY - (paddleX + paddleHeight / 2)
        ballSpeedY = deltaY*.35
      } else {
        player1 += 1
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
    if (showWinScreen) {
      // Clear the canvas
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      // Draw the black rectangle
      canvasContext.fillStyle = "black";
      canvasContext.fillRect(0, 0, canvas.width, canvas.height);
      canvasContext.fillStyle = "white"
      if (player1 >= winningScore) {
        canvasContext.fillText("You Win!", 150,200)
      }
      if (player2 >= winningScore) {
        canvasContext.fillText("Computer Wins!", 150,200)
      }
      canvasContext.fillText("Click to play again", 145,300)

    
    return;
    }
  // makes a black square
    colorRect(0, 0, canvas.width, canvas.height, "black")
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


  const history = useHistory();

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
        <div style={{zIndex: 6}}>
        {/* <img
          src="https://i.imgur.com/3UEODg1.jpg?1"
          className="my-pic"
            alt="allison-bierschenk"
        /> */}
        </div>
        <canvas style={{zIndex: 6}} ref={canvasRef} id="gameCanvas" width={800} height={400}/>
      </div>
    </div>
  );
}
