import React from "react";
import { PaddingWrapper } from "../../../globals/global.styles";
import { BtnStyle, Underline } from "./discoverBtn.styles";

const DiscoverBtn = () => {
  return (
    <>
      <PaddingWrapper>
        <BtnStyle>
          <a href="#aboutMeSection">tell me more</a>
          <Underline></Underline>
        </BtnStyle>
      </PaddingWrapper>
    </>
  );
};

export default DiscoverBtn;
