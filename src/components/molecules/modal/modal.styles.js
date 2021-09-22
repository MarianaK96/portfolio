import styled from "styled-components";
import { device } from "../../../globals/breakpoints";

export const ModalStyle = styled.div`
  background-color: #f8f8ff;
  display: flex;
  justify-content: space-evenly;
  padding-top: 5rem;
  padding-bottom: 3rem;
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 5;

  @media ${device.sm} {
    padding-top: 7rem;
    padding-bottom: 6.2rem;
  }

  & > a {
    color: #1a1919;
    display: inline;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;

    @media ${device.sm} {
      font-size: 1.5rem;
    }
  }

  & > a:hover {
    color: #fec8af;
  }

  & > p {
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const CloseBtnStyle = styled.div`
  position: absolute;
  padding: 2.4rem;
  top: 0;
  right: 0;

  @media ${device.sm} {
    padding: 3rem;
    right: 4%;
  }

  & > img {
    transform: scale(1.2);
    @media ${device.sm} {
      transform: scale(1.8);
    }
  }
`;
// display: ${modal ? "inline" : "hidden"};
// display: ${({ modal }) => (modal ? "flex" : "none")};
