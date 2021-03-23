import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Menu = ({ scrollPosition }) => {
  const [pageName, setPageName] = useState("");
  useEffect(() => {
    console.log("scrollPosition", scrollPosition);
    let checkPage = "";
    if (scrollPosition < 1658) checkPage = "About";
    else if (scrollPosition < 4124) checkPage = "Projects";
    else if (scrollPosition < 4479) checkPage = "Skills";
    else if (scrollPosition < 6679) checkPage = "Education";
    else if (scrollPosition < 7123) checkPage = "Career";
    else if (scrollPosition > 7650) checkPage = "Contact";
    setPageName(checkPage);
  }, [scrollPosition]);

  const scrollToLinkHandler = (e) => {
    e.preventDefault();
    if (!e.target.classList.contains("link")) return;
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Container scrollPosition={scrollPosition}>
      <List scrollPosition={scrollPosition} onClick={scrollToLinkHandler}>
        <Item changeBG={pageName === "About"}>
          <a className="link" href="#About">
            About
          </a>
        </Item>
        <Item changeBG={pageName === "Projects"}>
          <a className="link" href="#Projects">
            Projects
          </a>
        </Item>
        <Item changeBG={pageName === "Skills"}>
          <a className="link" href="#Skills">
            Skills
          </a>
        </Item>
        <Item changeBG={pageName === "Education"}>
          <a className="link" href="#Education">
            Education
          </a>
        </Item>
        <Item changeBG={pageName === "Career"}>
          <a className="link" href="#Career">
            Career
          </a>
        </Item>
        <Item changeBG={pageName === "Contact"}>
          <a className="link" href="#Contact">
            Contact
          </a>
        </Item>
      </List>
      <TopImg src={require("../images/sharon-anima2.png").default} />
      <RightImg src={require("../images/sharon-anima3.png").default} />
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  position: ${({ scrollPosition }) =>
    scrollPosition > 830 ? "fixed" : "absolute"};
  top: ${({ scrollPosition }) => (scrollPosition > 830 ? "6rem" : "120%")};
  right: 3rem;
  display: flex;
  justify-content: flex-end;
  z-index: 500;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  color: white;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
  border-radius: 5px;
`;

const Item = styled.li`
  padding: 3rem 2rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 500;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: white;
  }
  :first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  :last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  cursor: pointer;
  background-color: ${({ changeBG }) => !changeBG && "rgba(51,51,51,0.8)"};
  background-image: ${({ changeBG }) =>
    changeBG && `linear-gradient(160deg, #8300e9 0%, #00e2db 88%)`};
`;

const TopImg = styled.img`
  position: absolute;
  top: -4.5rem;
  width: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`;

const RightImg = styled.img`
  position: absolute;
  top: 50%;
  width: 5rem;
  left: -5rem;
  transform: translateY(-50%);
  z-index: -1;
`;
