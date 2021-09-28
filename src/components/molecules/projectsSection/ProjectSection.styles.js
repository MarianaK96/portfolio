import styled from "styled-components";
import { device } from "../../../globals/breakpoints";
import { Link } from "react-router-dom";

export const ProjectWrapper = styled.div`
  @media ${device.lg} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ImageWrapper = styled(Link)`
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

export const ImageWrapperThree = styled(Link)`
  display: flex;
  justify-content: center;

  & > img {
    width: 250px;
    height: 150px;
    border-radius: 5px;
    margin-bottom: 0;
    box-shadow: 3px 5px 20px #434141;

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

export const ProjectTitle = styled(Link)`
  padding-top: 0.5rem;
  padding-right: 2.5rem;
  float: right;
  font-family: "Poppins", sans-serif;
  color: white;
  text-decoration: none;
  font-weight: 100;
  @media ${device.sm} {
    font-size: 1.5rem;
    padding-right: 6.5rem;
  }

  @media ${device.lg} {
    padding-right: 0.5rem;
  }
`;
