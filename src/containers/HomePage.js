import React from "react";
import styled from "styled-components";
import { Button, PersonName } from "../styles/index";
import { media } from "../utils";

const HomePage = () => {
  return (
    <>
      <Container>
        <InfoContainer>
          <SubTitle>Hello I'm</SubTitle>
          <NameTitle>Sharon Zissu</NameTitle>
          <Line />
          <PositionTitle>FrontEnd / FullStack Developer</PositionTitle>
        </InfoContainer>
      </Container>
      <TopTriangle></TopTriangle>
      <BottomShape>
        <ContainerDown>
          <Sentence>
            {/* Design is not just what it looks like and feels like.
            <br />
            Design is how it works.
            <br /> */}
            Failure will never overtake me if <br /> my determination to succeed
            is strong enough.
            <PersonName>Og Mandino</PersonName>
          </Sentence>
          <Button color1="#8300e9" color2="#00e2db" content="Get In Touch" />
        </ContainerDown>
      </BottomShape>
      <ProfileImg src={require("../images/sharonProfile.png").default} />
    </>
  );
};

export default HomePage;

const Container = styled.div`
  background: white;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const TopTriangle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 90%;
  height: 63%;
  background: #f6f6f6;
  clip-path: polygon(0 0, 100% 0, 100% 100%);
  @media (max-width: ${media.lg}) {
    width: 100%;

    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 40%);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20rem;
  margin-top: 15rem;
  position: relative;
  z-index: 20;
  @media (max-width: ${media.big}) {
    margin-left: 10rem;
    margin-top: 12rem;
  }
  @media (max-width: ${media.lg}) {
    margin-left: 10rem;
    margin-top: 5rem;
  }
`;

const SubTitle = styled.p`
  font-size: 2.4rem;
  color: rgba(104, 109, 114, 0.17);
`;

const NameTitle = styled.h1`
  font-size: 4.8rem;
  color: #4f565b;
  font-weight: 500;
  line-height: 4.8rem;
`;

const Line = styled.div`
  height: 0.5rem;
  width: 10%;
  background-image: linear-gradient(160deg, #8300e9 0%, #00e2db 88%);
  margin-top: 2rem;
  border-radius: 0.4rem;
`;

const PositionTitle = styled.h2`
  font-size: 3.4rem;
  font-weight: 300;
  color: rgba(104, 109, 114, 0.45);
`;

const ProfileImg = styled.img`
  position: absolute;

  /* width: 32%; */
  width: 60rem;
  height: 75rem;
  /* height: 40.544%; */
  /* top: 0.4rem; */
  top: 1%;
  right: 8rem;
  @media (max-width: ${media.big}) {
    /* top: 11rem; */
    top: 12%;
  }
  @media (max-width: ${media.lg}) {
    top: 20%;
    right: 20%;
  }
  @media (max-width: ${media.md}) {
    top: 24%;
    width: 65rem;
    height: 80rem;
  }
`;

const BottomShape = styled.div`
  position: absolute;
  bottom: -8rem;
  width: 100%;
  height: 48rem;
  background: #1e2528;
  clip-path: polygon(0 0, 100% 44%, 100% 78%, 0 100%);
  /* clip-path: polygon(0 0, 100% 44%, 100% 88%, 0 100%); */
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${media.lg}) {
    clip-path: polygon(0 0, 100% 20%, 100% 78%, 0 100%);
    bottom: -19rem;
  }
`;

const ContainerDown = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  margin-top: 5rem;
`;

const Sentence = styled.p`
  font-size: 2.8rem;
  color: white;
  font-weight: 300;
  position: relative;
  line-height: 3.6rem;
  ::before {
    position: absolute;
    content: '"';
    opacity: 0.05;
    font-size: 25rem;
    font-family: "IM Fell Double Pica SC", serif;
    top: 4rem;
    left: -4rem;
    color: white;
  }
`;
