import styled from "styled-components";
import { device } from "../../../globals/breakpoints";

export const HeadingWrapper = styled.div`
  & > h1 {
    font-size: 4rem;
    font-style: italic;
    color: #f8f8ff;
    font-family: "Poppins", sans-serif;

    @media ${device.sm} {
      font-size: 5rem;
    }

    @media ${device.lg} {
      font-size: 6rem;
    }
  }
`;

export const SubtitleWrapper = styled.div`
  & > p {
    font-size: 2rem;
    font-weight: 100;
    line-height: 1.8;
    color: #f8f8ff;
    font-family: "Montserrat", sans-serif;

    @media ${device.sm} {
      font-size: 2.5rem;
    }
  }
`;
