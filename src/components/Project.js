import React from "react";
import styled from "styled-components";
import { Bold } from "../styles/index";
const Project = ({
  name,
  description,
  technologies,
  imgName,
  imgType,
  titleLinkTheProject,
}) => {
  return (
    <Container imgType={imgType}>
      <ProjectImg
        src={require(`../images/${imgName}.png`).default}
        imgType={imgType}
      />
      <SummaryContainer imgType={imgType}>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Technologies>
          {technologies.map((tech) => (
            <Tech key={tech}>{tech}</Tech>
          ))}
        </Technologies>
        <LinkToProject>{titleLinkTheProject}</LinkToProject>
      </SummaryContainer>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: ${({ imgType }) => (imgType === "iphone" ? "53%" : "53%")};
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 15rem;
  }

  :nth-child(2n + 1) {
    flex-direction: row-reverse;
  }
`;

const ProjectImg = styled.img`
  width: ${({ imgType }) => (imgType === "iphone" ? "30rem" : "45rem")};
  height: ${({ imgType }) => (imgType === "iphone" ? "60rem" : "33rem")};
  /* filter: blur(1px) grayscale(70%);
  -webkit-filter: blur(1px) grayscale(70%);
  transition: all 0.4s; */
  cursor: pointer;
  /* :hover {
    filter: none;
    -webkit-filter: none;
  } */
`;

const SummaryContainer = styled.div`
  width: 30rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  height: auto;
  margin-right: ${({ imgType }) => (imgType === "iphone" ? "15rem" : "0")};
`;
const Title = styled.h2`
  color: #333;
  font-size: 2.3rem;
  font-weight: 600;
  text-transform: uppercase;
  width: 30rem;
`;
const Description = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  color: rgba(79, 86, 91, 0.5);
`;

const Technologies = styled.div`
  margin-top: 1rem;
  display: flex;
`;

const Tech = styled.label`
  font-weight: bold;
  font-size: 1.6rem;
  color: #333;
  opacity: 0.7;
  :not(:last-child) {
    margin-right: 1rem;
  }
`;

const LinkToProject = styled.p`
  margin-top: 3rem;
  font-size: 1.4rem;
  font-weight: 300;
  color: rgba(79, 86, 91, 0.25);
  text-transform: uppercase;
  font-weight: 700;
  transition: all 0.4s;
  cursor: pointer;
  :hover {
    color: #333;
  }
`;
