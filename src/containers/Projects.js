import React from "react";
import styled from "styled-components";
import { Project } from "../components/index";
import { Titles } from "../styles";
import { projects } from "../utils";

const Projects = () => {
  return (
    <Container id="Projects">
      <Titles mainTitle="Projects" subTitle="Recent" mt={30} color="#4f565b" />
      {projects.map(
        (
          {
            name,
            description,
            technologies,
            imgName,
            imgType,
            titleLinkTheProject,
          },
          i
        ) => (
          <Project
            key={i}
            name={name}
            description={description}
            technologies={technologies}
            imgName={imgName}
            imgType={imgType}
            titleLinkTheProject={titleLinkTheProject}
          />
        )
      )}
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  /* background: #f6f6f6; */
  clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0% 100%);
  background-image: linear-gradient(
    166deg,
    #f6f6f7 86%,
    #ffffff 53%
  ) !important;
  min-height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
