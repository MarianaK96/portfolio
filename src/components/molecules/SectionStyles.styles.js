import styled from "styled-components";
import { size, device } from "../../globals/breakpoints";

export const ParagraphWrapper = styled.div`
  & > p {
    font-weight: 100;
    font-size: 1.25rem;
    line-height: 1.5;
    color: #f8f8ff;
    font-family: "Montserrat", sans-serif;
    text-align: justify;

    @media ${device.sm} {
      font-size: 1.5rem;
    }
  }
`;
export const TitleWrapper = styled.div`
  & > h1 {
    font-size: 2.8rem;
    font-style: italic;
    color: #f8f8ff;
    font-family: "Poppins", sans-serif;

    @media ${device.sm} {
      font-size: 3.5rem;
    }
  }
`;
export const SectionPadding = styled.div`
  padding-top: 16rem;
`;
