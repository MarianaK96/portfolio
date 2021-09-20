import styled from "styled-components";
import { size, device } from "../../../globals/breakpoints";

export const ProjectWrapper = styled.div`
  @media ${device.lg} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
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
  }
`;

export const Project = styled.div`
  padding-bottom: 3rem;

  @media ${device.sm} {
    padding-bottom: 6rem;
  }
  @media ${device.lg} {
    padding-bottom: 6rem;
    padding-right: 4rem;
  }
`;

export const TestTitle = styled.a`
  padding-top: 0.5rem;
  padding-right: 0.5rem;
  float: right;
  font-family: "Poppins", sans-serif;
  color: white;
  text-decoration: none;
  font-weight: 100;
  @media ${device.sm} {
    font-size: 1.5rem;
  }

  @media ${device.lg} {
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  & > img {
    margin-right: 0.5rem;
    transform: scale(0.7);
  }

  & > a {
    transform: scale(0.7);
  }
`;
