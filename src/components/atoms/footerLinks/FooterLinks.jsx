import React from "react";
import { FooterLinkStyles } from "./FooterLinksStyles.styles";

const FooterLinks = ({ link, icon }) => {
  return (
    <>
      <FooterLinkStyles>
        <a href={link}>
          <img src={icon} alt="" />
        </a>
      </FooterLinkStyles>
    </>
  );
};

export default FooterLinks;
