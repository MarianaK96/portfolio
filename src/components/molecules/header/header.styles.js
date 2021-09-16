import styled from "styled-components"
import { size, device } from "../../../globals/breakpoints"

export const MobileMenu = styled.div`
  width: 90vw;
  padding-right: 2.5rem;
  padding-top: 2.5rem;
  display: flex;
  justify-content: flex-end;
  position: fixed;

  @media ${device.sm} {
    & > img {
      transform: scale(1.7);
    }
  }

  @media ${device.lg} {
    display: none;
  }
`
