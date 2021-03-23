import React from "react";
import styled from "styled-components";
import { Titles } from "../styles";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
const Contact = () => {
  return (
    <Container id="Contact" color1="#8300e9" color2="#00e2db">
      <Titles
        mainTitle="Get In Touch!"
        subTitle="Let's Talk!"
        color="white"
        subColor="rgba(255,255,255,0.2)"
        noLine
        mt={-15}
        mb={8}
      />
      <Info>
        <Detail>
          <IconContainer>
            <PhoneIcon />
          </IconContainer>
          <span>054-4666355</span>
        </Detail>
        <Detail>
          <IconContainer>
            <EmailIcon />
          </IconContainer>
          <span>sharonzissu10@gmail.com</span>
        </Detail>
        <Detail>
          <IconContainer>
            <FacebookIcon />
          </IconContainer>
          <IconContainer>
            <LinkedInIcon />
          </IconContainer>
          <IconContainer>
            <GitHubIcon />
          </IconContainer>
        </Detail>
      </Info>
      <Img src={require("../images/sharon-anima.png").default} />
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  min-height: 70vh;
  background-image: ${({ color1, color2 }) =>
    `linear-gradient(160deg, ${color1} 0%, ${color2} 88%)`};
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  span {
    font-size: 1.8rem;
    font-weight: 600;
    color: white;
  }
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IconContainer = styled.div`
  width: 4rem;
  color: white;
  margin-right: 2rem;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Img = styled.img`
  position: absolute;
  width: 27rem;
  height: 21.4rem;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
