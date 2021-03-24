import React from "react";
import styled from "styled-components";

const Link = ({ link, children }) => {
  const openInNewTab = () => {
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return <Container onClick={openInNewTab}>{children}</Container>;
};

export default Link;

const Container = styled.a`
  text-decoration: none;
  color: white;
`;
