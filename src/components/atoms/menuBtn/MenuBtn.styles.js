import styled from "styled-components";
import { device } from "../../../globals/breakpoints";

export const MobileMenu = styled.a`
  width: 90vw;
  padding-right: 1rem;
  padding-top: 1rem;
  display: flex;
  justify-content: flex-end;
`;

export const MenuBtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  position: fixed;
  z-index: 10;

  margin-bottom: 1rem;
`;

export const MenuBtnBurger = styled.div`
  width: 25px;
  height: 3px;
  background-color: #ffffff;
  background: ${({ menuOpen }) => (menuOpen ? "" : "transparent")};

  border-radius: 5px;
  transition: all 0.5s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    width: 25px;
    height: 3px;
    background-color: ${({ menuOpen }) => (menuOpen ? "#ffffff" : "#1a1919")};
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
    transform: translateY(-10px);

    transform: ${({ menuOpen }) => (menuOpen ? "" : "rotate(45deg)")};
  }

  &:after {
    content: "";
    position: absolute;
    width: 25px;
    height: 3px;
    background-color: ${({ menuOpen }) => (menuOpen ? "#ffffff" : "#1a1919")};
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
    transform: translateY(10px);

    transform: ${({ menuOpen }) => (menuOpen ? "" : "rotate(-45deg)")};
  }
`;

// export const MobileMenu = styled.a`
//   width: 90vw;
//   padding-right: 2.5rem;
//   padding-top: 2.5rem;
//   display: flex;
//   justify-content: flex-end;

//   z-index: 10;
//   & > img {
//     transform: scale(1.2);
//     @media ${device.sm} {
//       transform: scale(1.8);
//     }
//   }

//   @media ${device.lg} {
//     display: none;
//   }
// `;
