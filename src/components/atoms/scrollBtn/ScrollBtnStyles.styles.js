import styled from "styled-components";
import { device } from "../../../globals/breakpoints";

export const ScrollBtnStyles = styled.a`
  cursor: pointer;

  position: fixed;
  bottom: 5%;
  right: 5%;

  & > img {
    transform: scale(2);
    opacity: 0.5;

    &:hover {
        opacity: 1;
    }

    @media ${device.sm} {
      transform: scale(2);
    }
`;
