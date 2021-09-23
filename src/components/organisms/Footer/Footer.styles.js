import styled from "styled-components";
import { device } from "../../../globals/breakpoints";

export const FooterStyles = styled.footer`
  width: 100%;
  background-color: #2e2b2b;
  padding-bottom: 1rem;
  padding-top: 1rem;

  display: flex;
  justify-content: center;
`;

export const CopyrightText = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #ffffff;
  padding-left: 1.5rem;

  @media ${device.sm} {
    padding-left: 5rem;
  }
`;
