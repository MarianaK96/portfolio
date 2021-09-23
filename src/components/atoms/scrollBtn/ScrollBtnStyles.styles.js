import styled from "styled-components";
import { device } from "../../../globals/breakpoints";

export const ScrollBtnStyles = styled.a`
  cursor: pointer;
  transition: 1s;

  position: fixed;
  bottom: 5%;
  right: 5%;

 
  display: ${({ visible }) => (visible ? "block" : "none")};


  & > img {
    transform: scale(1.5);
    opacity: 0.5;

    &:hover {
        opacity: 1;
    }

    @media ${device.sm} {
      transform: scale(2);
    }
`;
