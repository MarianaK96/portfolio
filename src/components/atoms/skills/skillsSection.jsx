import React from "react"
import { PaddingWrapper, PaddingTop } from "../../../globals/global.styles"
import { TitleWrapper, ParagraphWrapper } from "../about/about.styles"

const Skills = () => {
  return (
    <>
      <PaddingTop />
      <PaddingWrapper>
        <TitleWrapper id="skillsSection" b>
          <h1>Skills</h1>
        </TitleWrapper>
        <ParagraphWrapper>
          <p>
            I am proficient in Javascript, CSS and HTML5. I generally work
            within the React framework using Gatsby.js
          </p>
        </ParagraphWrapper>
      </PaddingWrapper>
    </>
  )
}

export default Skills
