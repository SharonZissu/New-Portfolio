import React from "react";
import styled from "styled-components";
const Titles = ({ mainTitle, subTitle, color, mt, mb, noLine, subColor }) => {
  return (
    <Container mt={mt} mb={mb}>
      <SubTitle subColor={subColor}>{subTitle}</SubTitle>
      <MainTitle color={color}>{mainTitle}</MainTitle>
      {!noLine && <Line />}
    </Container>
  );
};

export default Titles;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${({ mt }) => (mt ? `${mt}rem` : 0)};
  margin-bottom: ${({ mb }) => (mb ? `${mb}rem` : "10rem")};
`;

const SubTitle = styled.p`
  font-size: 2.4rem;
  color: ${({ subColor }) =>
    subColor ? subColor : "rgba(104, 109, 114, 0.17)"};
  font-weight: 500;
`;

const MainTitle = styled.h1`
  font-size: 4.8rem;
  color: ${({ color }) => color};
  font-weight: 500;
  line-height: 4.8rem;
`;

const Line = styled.div`
  height: 0.5rem;
  width: 15rem;
  background-image: linear-gradient(160deg, #8300e9 0%, #00e2db 88%);
  margin-top: 2rem;
  border-radius: 0.4rem;
`;
