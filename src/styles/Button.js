import React from "react";
import styled from "styled-components";

const Button = ({ content, color1, color2, mb, mr, alignSelf }) => {
  return (
    <Container
      color1={color1}
      color2={color2}
      mb={mb}
      mr={mr}
      alignSelf={alignSelf}
    >
      {content}
    </Container>
  );
};

export default Button;

const Container = styled.button`
  background-image: ${({ color1, color2 }) =>
    `linear-gradient(160deg, ${color1} 0%, ${color2} 88%)`};
  padding: 1rem 3rem;
  height: 7rem;
  width: 20rem;
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  color: white;
  font-weight: 800;
  border-radius: 5px;
  border: none;
  transition: all 0.4s;
  margin-bottom: ${({ mb }) => (mb ? `${mb}rem` : 0)};
  margin-right: ${({ mr }) => (mr ? `${mr}rem` : 0)};
  align-self: ${({ alignSelf }) => alignSelf};
  cursor: pointer;
  :focus {
    outline: none;
  }
  :hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
    transform: scale(1.1);
  }
`;
