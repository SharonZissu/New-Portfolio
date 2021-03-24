import React from "react";
import styled from "styled-components";
import { Titles } from "../components/index";
import { PersonName } from "../styles/index";
import { media } from "../utils";

import footballImg3 from "../images/football3.png";
const Career = () => {
  return (
    <Container id="Career">
      <Titles
        mainTitle="Career"
        subTitle="Sport's"
        color="white"
        mt={10}
        mb={3}
        mtlg={10}
      />
      <Content>
        Playing professional football from a very young age shaped my
        personality and taught me many important lessons - teamwork,
        perseverance, ambition and achieving my goals. The experience I had over
        the years on the court gave me the fundamentals on how to be a leader to
        my teammates and to motivate my self in order to succeed.
      </Content>
      <SentenceContainer>
        <Sentence>
          Goals should never be easy, they should force you to Work, <br />
          even if they are uncomfortable at the time.
        </Sentence>
        <PersonName>Michael Phelps</PersonName>
      </SentenceContainer>
      {/* <IconContainer>
        <Img src={require("../images/ball.png").default} />
      </IconContainer> */}
    </Container>
  );
};

export default Career;

const Container = styled.div`
  /* min-height: 120vh; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* clip-path: polygon(0 0, 100% 8%, 100% 70%, 0% 100%); */
  clip-path: polygon(0 0, 100% 8%, 100% 100%, 0% 100%);
  position: relative;
  z-index: 4;
  background-image: linear-gradient(
      rgba(30, 37, 40, 0.96),
      rgba(30, 37, 40, 0.96)
    ),
    url(${footballImg3}) !important;
  /* 
  background-image: linear-gradient(
      166deg,
      rgba(30, 37, 40, 0.96) 70%,
      #ffffff 70%
    ),
    url(${footballImg3}) !important; */
  background-size: cover;
  @media (max-width: ${media.lg}) {
    min-height: 90vh;
  }
  @media (max-width: ${media.md}) {
    min-height: 80vh;
  }
`;

const Content = styled.p`
  position: relative;
  font-size: 2rem;
  color: white;
  font-weight: 300;
  width: 40%;
  padding: 1rem 2rem;
  /* background: rgba(256, 256, 256, 0.02); */
  border-radius: 1rem;
  @media (max-width: ${media.big}) {
    width: 45%;
  }
  @media (max-width: ${media.md}) {
    width: 55%;
  }
`;
const IconContainer = styled.div`
  width: 12rem;
  color: white;
  position: absolute;
  bottom: 2rem;
  right: 0;
  transform: translateX(-50%);
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.1;
`;
const SentenceContainer = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 10rem;
  display: flex;
  flex-direction: column;
  line-height: 3.6rem;
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

//linear-gradient(-166deg, #1e2528 88%, #ffffff 88%) !important;
