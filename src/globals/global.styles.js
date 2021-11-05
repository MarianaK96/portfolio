import styled from "styled-components";
import { device } from "./breakpoints";

export const PaddingWrapper = styled.div`
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  @media ${device.sm} {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media ${device.sm} {
    padding-left: 11rem;
    padding-right: 11rem;
  }
`;
export const PaddingTop = styled.div`
  padding-top: 3rem;

  @media ${device.sm} {
    padding-top: 6rem;
  }
`;
