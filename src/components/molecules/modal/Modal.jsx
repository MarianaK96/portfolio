import React, { useState } from "react";
import { ModalStyle } from "./Modal.styles";

const Modal = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <ModalStyle menuOpen={menuOpen}>
        <a href="#aboutMeSection" onClick={() => setMenuOpen(!menuOpen)}>
          About
        </a>
        <p>|</p>
        <a href="#skillsSection" onClick={() => setMenuOpen(!menuOpen)}>
          Skills
        </a>
        <p>|</p>
        <a href="#projectsSection" onClick={() => setMenuOpen(!menuOpen)}>
          Projects
        </a>
        <p>|</p>
        <a href="#contactSection" onClick={() => setMenuOpen(!menuOpen)}>
          Contact
        </a>
      </ModalStyle>
    </>
  );
};

export default Modal;
