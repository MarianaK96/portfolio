import React from "react";
import { FooterLinkStyles } from "./FooterLinksStyles.styles";

const FooterLinks = ({ link, icon }) => {
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <>
      <FooterLinkStyles>
        <a onClick={() => openLink(link)}>
          <img src={icon} alt="" />
        </a>
      </FooterLinkStyles>
    </>
  );
};

export default FooterLinks;
