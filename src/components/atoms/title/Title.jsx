import React, { useState } from "react";
import { Wrapper, HeadingWrapper, SubtitleWrapper } from "./Title.styles";
import { PaddingWrapper, PaddingTop } from "../../../globals/global.styles";

const Title = () => {
  return (
    <>
      <PaddingWrapper>
        <PaddingTop></PaddingTop>
        <HeadingWrapper>
          <h1>Hello.</h1>
        </HeadingWrapper>
        <SubtitleWrapper>
          <p>
            I’m Mariana, <br /> a junior web-developer currently based in
            London.
          </p>
        </SubtitleWrapper>
      </PaddingWrapper>
    </>
  );
};

export default Title;
