import React, { useState } from "react";
import { ModalStyle } from "./Modal.styles";

const Modal = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <ModalStyle>
        <a href="#aboutMeSection" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <p>|</p>
        <a href="#skillsSection" onClick={() => setMenuOpen(false)}>
          Skills
        </a>
        <p>|</p>
        <a href="#skillsSection" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <p>|</p>
        <a href="">Contact</a>
      </ModalStyle>
    </>
  );
};

export default Modal;
