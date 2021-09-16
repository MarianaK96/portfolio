import styled from "styled-components"
import { size, device } from "../../../globals/breakpoints"

export const ParagraphWrapper = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Montserrat:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
  & > p {
    font-weight: 100;
    font-size: 1.25rem;
    line-height: 1.5;
    color: #f8f8ff;
    font-family: "Montserrat", sans-serif;

    @media ${device.sm} {
      font-size: 1.5rem;
    }
  }
`
export const TitleWrapper = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
  & > h1 {
    font-size: 2.8rem;
    font-style: italic;
    color: #f8f8ff;
    font-family: "Poppins", sans-serif;
  }
`
export const SectionPadding = styled.div`
  padding-top: 16rem;
`
