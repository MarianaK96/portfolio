import styled from "styled-components";
import { size, device } from "../../../globals/breakpoints";

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  & > img {
    width: 334px;
    height: 150px;
    border-radius: 5px;
    margin-bottom: 0;

    @media ${device.sm} {
      width: 668px;
      height: 300px;
      border-radius: 5px;
      margin-bottom: 0;
    }
  }
`;

export const ProjectTitle = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
  padding-right: 0.5rem;

  @media ${device.sm} {
    padding-right: 2rem;
  }

  & > a {
    text-align: right;
    font-family: "Poppins", sans-serif;
    color: white;
    font-weight: 100;

    @media ${device.sm} {
      font-size: 1.5rem;
    }
  }

  & > a {
    text-align: right;
    font-family: "Poppins", sans-serif;
    color: white;
    text-decoration: none;
    font-weight: 100;
    @media ${device.sm} {
      font-size: 1.5rem;
    }
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
