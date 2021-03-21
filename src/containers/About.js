import React from "react";
import styled from "styled-components";
import { Titles } from "../styles/index";
import { Menu } from "../components/index";

const About = () => {
  return (
    <Container>
      <Titles mainTitle="About Me" subTitle="A Few Words" color="#4f565b" />
    </Container>
  );
};

export default About;

const Container = styled.div`
  min-height: 100vh;
  position: relative;
`;
