import React, { useState } from "react";
import { Wrapper, HeadingWrapper, SubtitleWrapper } from "./Title.styles";
import { PaddingWrapper, PaddingTop } from "../../../globals/global.styles";

const Title = () => {
  const [on, setOn] = useState(false);

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
            Cardiff.
          </p>
        </SubtitleWrapper>
      </PaddingWrapper>
    </>
  );
};

export default Title;

//BUG
//className={`${styles["subtitle"]}`} - cannot be READ
// styles not applying even with the above, only when I apply to all h1/p tags
//the classname appears in the developer, but styles do not apply
