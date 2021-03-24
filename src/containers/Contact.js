import React from "react";
import styled from "styled-components";
import { Link, Titles } from "../components/index";
import { contactLinks } from "../utils";
import { media } from "../utils";
//material-ui icons
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const renderSwitch = (id) => {
  switch (id) {
    case "facebook":
      return <FacebookIcon />;
    case "linkedin":
      return <LinkedInIcon />;
    case "github":
      return <GitHubIcon />;
    case "telephone":
      return <PhoneIcon />;
    case "email":
      return <EmailIcon />;
    default:
      return null;
  }
};
const ContactItem = ({ id, link, value }) => (
  <ContactItemContainer>
    <IconContainer>
      {link ? <Link link={link}>{renderSwitch(id)}</Link> : renderSwitch(id)}
    </IconContainer>
    {value && <span>{value}</span>}
  </ContactItemContainer>
);

const ContactLinkItems = () => {
  const items = [];
  for (const key in contactLinks) {
    console.log(key);
    items.push(<ContactItem id={key} link={contactLinks[key]} />);
  }
  return <ContactLinkItemsContainer>{items} </ContactLinkItemsContainer>;
};

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
        mtlg={-25}
      />
      <ContactItems>
        <ContactItem id="telephone" value="054-4666355" />
        <ContactItem id="email" value="sharonzissu10@gmail.com" />
        <ContactLinkItems />
      </ContactItems>
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
  @media (max-width: ${media.md}) {
    min-height: 60vh;
  }
`;
const ContactItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  span {
    font-size: 1.8rem;
    font-weight: 600;
    color: white;
  }
  @media (max-width: ${media.md_b}) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: -12rem;
  }
`;
const ContactItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${media.md_b}) {
    margin-bottom: 3rem;
  }
`;
const ContactLinkItemsContainer = styled(ContactItemContainer)``;
const IconContainer = styled.div`
  width: 4rem;
  color: white;
  margin-right: 2rem;
  svg {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
const Img = styled.img`
  position: absolute;
  width: 27rem;
  height: 21.4rem;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: ${media.md_b}) {
    left: 80%;
  }
`;
