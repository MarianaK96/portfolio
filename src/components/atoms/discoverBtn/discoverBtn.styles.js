import styled from "styled-components";
import { device } from "../../../globals/breakpoints";

export const BtnStyle = styled.div`
  padding-top: 2rem;
  width: 8rem;
  margin-bottom: 0.75rem;
  @media ${device.sm} {
    width: 10rem;
    padding-top: 3rem;
  }

  & > a {
    font-family: "Montserrat", sans-serif;
    color: #f8f8ff;
    text-decoration: none;
    font-size: 1.2rem;

    @media ${device.sm} {
      font-size: 1.5rem;
    }

    @media ${device.lg} {
      position: relative;

      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 2px;
        background-color: #ffffff;
        transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
      }

      &:hover::before {
        left: 0;
        right: auto;
        width: 100%;
      }
    }
  }
`;

export const Underline = styled.div`
  height: 2px;
  background-color: white;
  width: 7.7rem;

  @media ${device.sm} {
    width: 9.6rem;
  }

  @media ${device.lg} {
    display: none;
  }
`;
