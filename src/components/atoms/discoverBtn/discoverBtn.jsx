import React from "react"
import { PaddingWrapper } from "../../../globals/global.styles"
import { BtnStyle, Underline } from "./discoverBtn.styles"

const DiscoverBtn = () => {
  return (
    <>
      <PaddingWrapper>
        <BtnStyle>
          <a href="#aboutMeSection">tell me more</a>
        </BtnStyle>
        <Underline></Underline>
      </PaddingWrapper>
    </>
  )
}

export default DiscoverBtn
