import React from "react";
import styled from "styled-components";
import Project from "../components/Project";
import { Titles } from "../styles";
import { projects } from "../utils";

const Projects = () => {
  return (
    <Container>
      <Titles mainTitle="Recent Projects" subTitle="Portfolio" mt={400} />
      {projects.map(
        ({ name, description, technologies, imgName, imgType }, i) => (
          <Project
            key={i}
            name={name}
            description={description}
            technologies={technologies}
            imgName={imgName}
            imgType={imgType}
          />
        )
      )}
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  background: #f6f6f6;
  clip-path: polygon(100% 0, 100% 70%, 0 100%, 0 15%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
