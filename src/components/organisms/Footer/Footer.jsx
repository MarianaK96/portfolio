import React from "react";
import { footerData } from "../../../data";
import FooterLinks from "../../atoms/footerLinks/FooterLinks";
import { FooterStyles, CopyrightText } from "./Footer.styles";
import { PaddingWrapper } from "../../../globals/global.styles";

const Footer = () => {
  return (
    <>
      <FooterStyles id="contactSection">
        <PaddingWrapper>
          {footerData.map((item, index) => {
            return (
              <FooterLinks key={index} icon={item.icon} link={item.link} />
            );
          })}
          <CopyrightText>Mariana Koudela - 2021</CopyrightText>
        </PaddingWrapper>
      </FooterStyles>
    </>
  );
};

export default Footer;
