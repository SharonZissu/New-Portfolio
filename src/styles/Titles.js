import React from "react";
import styled from "styled-components";
const Titles = ({ mainTitle, subTitle, mt }) => {
  return (
    <Container mt={mt}>
      <SubTitle mt={mt}>{subTitle}</SubTitle>
      <MainTitle>{mainTitle}</MainTitle>
      <Line />
    </Container>
  );
};

export default Titles;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10rem;
  margin-top: ${({ mt }) => (mt ? `${mt}px` : 0)};
`;

const SubTitle = styled.p`
  font-size: 2.4rem;
  color: rgba(104, 109, 114, 0.17);
`;

const MainTitle = styled.h1`
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
