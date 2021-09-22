import styled from "styled-components";
import { device } from "../../../globals/breakpoints";

export const MobileHeaderStyles = styled.div`
  position: fixed;
  top: 0;
  @media ${device.lg} {
    display: none;
  }
`;

export const ModalOpen = styled.div`
  visibility: ${({ menuOpen }) => {
    console.log("menuOpen", menuOpen);
    return menuOpen ? "hidden" : "visible";
  }};
`;
