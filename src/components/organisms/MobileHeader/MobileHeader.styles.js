import styled from "styled-components";
import { size, device } from "../../../globals/breakpoints";

export const MobileMenu = styled.a`
  width: 90vw;
  padding-right: 2.5rem;
  padding-top: 2.5rem;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  & > img {
    transform: scale(1.2);
    @media ${device.sm} {
      transform: scale(1.8);
    }
  }

  @media ${device.lg} {
    display: none;
  }
`;
