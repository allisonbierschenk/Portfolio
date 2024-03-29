import styled from "styled-components";
import React, { useState} from "react";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 15px;
  right: 20px;
  z-index: 11;
  display: none;
  

  @media (max-width: 950px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 11;

  }

  #burger-lines {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ffffff" : "#ffffff")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    z-index: 11;


    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
      z-index: 11;

    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
      z-index: 11;

    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
      z-index: 11;

    }
  }
`;

const HamburgerMenu = (props) => {
  const [open, setOpen] = useState(false);
  const burgerClick = () => {
    setOpen(!open);
    props.setBurger((curr) => !curr);
  };
  return (
    <>
      <StyledBurger open={open} onClick={burgerClick}>
        <div id="burger-lines"></div>
        <div id="burger-lines"></div>
        <div id="burger-lines"></div>
      </StyledBurger>
    </>
  );
};

export default HamburgerMenu;
