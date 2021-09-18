import styled from "styled-components";
import { device } from "../../../globals/breakpoints";

export const WebHeaderStyles = styled.header`
  @media ${device.xs} {
    display: none;
  }

  @media ${device.sm} {
    display: none;
  }

  @media ${device.lg} {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    padding-top: 3rem;
    margin: 0;
  }
`;
