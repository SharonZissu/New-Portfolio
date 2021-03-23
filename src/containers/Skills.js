import React from "react";
import styled from "styled-components";
import { Titles, PersonName } from "../styles";
import { skills } from "../utils";
const Skills = () => {
  return (
    <Container id="Skills">
      <Titles
        mainTitle="Skills"
        subTitle="Abilities and"
        color="white"
        mt={15}
        mb={4}
      />
      <List>
        {skills.map((skill) => (
          <Item key={skill}>{skill}</Item>
        ))}
      </List>
      <Sentence>
        Life without knowledge is death in disguise.
        <br />
        <PersonName>Talib Kweli</PersonName>
      </Sentence>
    </Container>
  );
};

export default Skills;
const Container = styled.div`
  background: #1e2528;
  min-height: 110vh;
  clip-path: polygon(100% 0, 100% 100%, 0 80%, 0 20%);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 5;
`;

const Sentence = styled.p`
  font-size: 2.8rem;
  color: white;
  font-weight: 300;
  position: relative;
  line-height: 3.6rem;
  position: absolute;
  right: 22rem;
  bottom: 11rem;
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

const List = styled.ul`
  list-style: none;
  display: flex;
  width: 30%;
  height: auto;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Item = styled.li`
  font-size: 2rem;
  color: white;
  font-weight: 300;
  width: 50%;
  /* width: 33.333333%; */
  text-align: center;
`;
