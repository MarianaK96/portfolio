import React from "react";
import { HeaderLinkStyles } from "./HeaderLinks.styles";

const HeaderLink = ({ item, link }) => {
  return (
    <>
      <HeaderLinkStyles href={link}>{item}</HeaderLinkStyles>
    </>
  );
};

export default HeaderLink;

//need to pass in the header links here
