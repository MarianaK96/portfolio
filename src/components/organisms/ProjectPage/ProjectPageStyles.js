import styled from "styled-components";
import { device } from "../../../globals/breakpoints";

export const ProjectsTitle = styled.h1`
  font-size: 2.5rem;
  font-style: italic;
  color: #f8f8ff;
  font-family: "Poppins", sans-serif;

  @media ${device.sm} {
    font-size: 3.8rem;
  }
`;
export const SectionPadding = styled.div`
  padding-top: 3rem;
`;

export const ParagraphWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-weight: 100;
  font-size: 1.1rem;
  line-height: 1.3;
  color: #f8f8ff;
  font-family: "Montserrat", sans-serif;

  @media ${device.sm} {
    font-size: 1.5rem;
  }
`;

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;

  border-top: 3px solid white;
  width: 100%;
  padding-top: 1rem;

  & > a {
    font-weight: 100;
    font-size: 1.2rem;
    line-height: 1.3;
    color: #f8f8ff;
    font-family: "Montserrat", sans-serif;
    margin-top: 0;
    text-decoration: none;
    padding-right: 3rem;
  }
`;

export const Underline = styled.div`
  padding-top: 3rem;
  margin-bottom: 2rem;
  border-bottom: 3px solid white;
`;

export const ProjectImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  & > img {
    width: 250px;
    height: 150px;
    border-radius: 5px;
    margin-bottom: 0;

    @media ${device.sm} {
      width: 450px;
      height: 250px;
      border-radius: 5px;
      margin-bottom: 0;
    }

    @media ${device.lg} {
      width: 500px;
      height: 300px;
      border-radius: 5px;
      margin-bottom: 0;
    }
  }
`;

export const SiteLink = styled.a`
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  padding-top: 0.5rem;
  float: right;

  @media ${device.sm} {
    font-size: 1rem;
  }
`;

export const ProjectPaddingWrapper = styled.div`
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  @media ${device.sm} {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  @media ${device.lg} {
    padding-left: 19rem;
    padding-right: 19rem;
  }
`;

export const IconsWrapper = styled.a`

  }
`;
