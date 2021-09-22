import styled from "styled-components";
import { device } from "../../../globals/breakpoints";

export const FooterLinkStyles = styled.a`
  cursor: pointer;
  margin-right: 2rem;
  padding-left: 3rem;
  

  & > img {
    transform: scale(1.7);

    @media ${device.sm} {
      transform: scale(2);
    }
`;
