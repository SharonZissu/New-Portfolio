import React from "react";
import styled from "styled-components";
import { Button, Titles } from "../styles/index";
import { Menu } from "../components/index";

const str = `Name: Sharon Zissu  Age: 27 Location: Holon`;
const About = () => {
  return (
    <Container id="About">
      <Titles
        mainTitle="About Me"
        subTitle="A Few Words"
        color="#4f565b"
        mb={14}
      />
      <Info>
        {/* <Content>
          Highly motivated to succeed and wishing to enter the Hi-Tech industry.
          With a Bachelor's degree in compuer science. Intuitive, deductive and
          self-taught with attention to details and accuracy. Excellent
          communication skills and interpersonal relations.
        </Content> */}
        <Button
          content="Download CV"
          color1="#8300e9"
          color2="#00e2db"
          mb={17.6}
          mr={4}
          alignSelf="flex-end"
        />

        <ImgContainer str={str}>
          <Img src={require("../images/sharonProfile2.png").default} />
          <Details>
            <u>
              <b>Name:</b>
            </u>{" "}
            Sharon Zissu
            <br />
            <u>
              <b>Age:</b>
            </u>{" "}
            27
            <br />
            <u>
              <b>Location:</b>
            </u>{" "}
            Holon
            <br />
          </Details>
        </ImgContainer>
      </Info>
    </Container>
  );
};

export default About;

const Container = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;
const ImgContainer = styled.div`
  width: 45rem;
  /* border-radius: 50%; */
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  position: relative;
  /* outline-offset: 0.4rem; */
  outline: 1rem solid rgba(30, 37, 40, 0.8);
  display: flex;
  :before {
    height: auto;
    width: 100%;
    content: "Highly motivated to succeed and wishing to enter the Hi-Tech industry. With a Bachelor's degree in compuer science. Intuitive, deductive and self-taught with attention to details and accuracy. Excellentcommunication skills and interpersonal relations.";
    position: absolute;
    left: -95%;
    top: -5rem;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    background-color: rgba(30, 37, 40, 1);
    /* outline-offset: 0.4rem; */
    outline: 1rem solid rgba(30, 37, 40, 0.8);
    font-size: 2rem;
    color: white;
    font-weight: 300;
    padding: 1rem;
    /* z-index: -1; */
  }
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;
const Content = styled.p`
  font-size: 2rem;
  color: white;
  font-weight: 300;
  width: 30%;
  /* background-color: rgba(0, 0, 0, 0.7); */
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  background-color: rgba(30, 37, 40, 0.7);
  position: relative;
  margin-right: -10rem;
  margin-top: 4rem;
  z-index: 5;
  padding: 1rem;
  border-radius: 2px;
`;

const Details = styled.p`
  font-size: 2rem;
  /* color: rgba(30, 37, 40, 1); */
  color: rgba(30, 37, 40, 1);
  font-weight: 500;
  /* background-color: rgba(0, 0, 0, 0.7); */
  /* background-color: rgba(30, 37, 40, 0.7); */
  /* box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2); */
  position: absolute;
  bottom: -9rem;
  align-self: flex-end;
  z-index: 5;
  padding: 1rem;
  border-radius: 2px;
  /* right: -40%; */
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  background-color: white;
  outline: 1rem solid rgba(30, 37, 40, 0.8);
  /* right: -100%; */
`;
