import React from "react";
import styled from "styled-components";

const Course = ({ name, by, hours, imgName, link }) => {
  const openInNewTab = () => {
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <Container>
      <ImgContainer>
        <Img src={require(`../images/${imgName}.png`).default} />
        <Description>
          <By>{by}</By>
          <Name>{name}</Name>
          <Hours>Total Hours: {hours}</Hours>
          <UdemyLink onClick={openInNewTab}>
            <UdemyImg
              src={require("../images/udemy-logo.png").default}
              target="_blank"
            />
          </UdemyLink>
        </Description>
      </ImgContainer>
    </Container>
  );
};

export default Course;

const Container = styled.div``;

const Description = styled.div`
  transition: all 0.4s;
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0.6rem;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50;
  top: 0;
  left: 0;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ImgContainer = styled.div`
  width: 24rem;
  height: 13.5rem;
  margin: 1rem;
  position: relative;
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.2);
  ${Description}:hover {
    opacity: 1;
    visibility: visible;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const By = styled.p`
  font-size: 1.2rem;
  color: #4f565b;
  text-transform: uppercase;
  font-weight: 700;
`;

const Name = styled.h2`
  color: white;
  font-weight: 500;
  font-size: 1.4rem;
  text-align: center;
`;

const Hours = styled.p`
  font-size: 1.1rem;
  color: white;
  align-self: flex-start;
  padding: 0.4rem 1rem;
  /* background-image: linear-gradient(160deg, #8300e9 0%, #00e2db 88%); */
  text-transform: uppercase;
  font-weight: 300;
  border-radius: 2rem;
`;

const UdemyLink = styled.a`
  position: absolute;
  bottom: 0.8rem;
  right: 0.8rem;
  width: 3rem;
  height: 2.4rem;
  cursor: pointer;
`;
const UdemyImg = styled.img`
  height: 100%;
  width: 100%;
`;
