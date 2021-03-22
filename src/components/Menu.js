import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Menu = ({ scrollPosition }) => {
  const [pageName, setPageName] = useState("");
  useEffect(() => {
    console.log("scrollPosition", scrollPosition);
    if (scrollPosition < 1800) setPageName("About");
    else if (scrollPosition < 4000) setPageName("Projects");
    else if (scrollPosition < 4680) setPageName("Skills");
    else if (scrollPosition < 6680) setPageName("Education");
  }, [scrollPosition]);
  return (
    <Container scrollPosition={scrollPosition}>
      <List>
        <Item changeBG={pageName === "About"}>About</Item>
        <Item changeBG={pageName === "Projects"}>Projects</Item>
        <Item changeBG={pageName === "Skills"}>Skills</Item>
        <Item changeBG={pageName === "Education"}>Education</Item>
        <Item changeBG={pageName === "Career"}>Career</Item>
        <Item changeBG={pageName === "Contact"}>Contact</Item>
      </List>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  position: ${({ scrollPosition }) =>
    scrollPosition > 870 ? "fixed" : "absolute"};
  top: ${({ scrollPosition }) => (scrollPosition > 870 ? "3rem" : "120%")};
  right: 5rem;
  display: flex;
  justify-content: flex-end;
  width: 15rem;
  z-index: 500;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  color: white;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
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
  cursor: pointer;
  background-color: ${({ changeBG }) =>
    changeBG ? "#1e2528" : "rgba(51,51,51,0.8)"};
  background-image: ${({ changeBG }) =>
    changeBG && `linear-gradient(160deg, #8300e9 0%, #00e2db 88%)`};
`;
