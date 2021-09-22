import React, { useState, useEffect } from "react";
import MenuBtn from "../../atoms/menuBtn/MenuBtn";
import Modal from "../../molecules/modal/Modal";
import MenuIcon from "../../../images/menu.svg";

import { CloseBtnStyle, ModalStyle } from "../../molecules/modal/Modal.styles";
import CloseIcon from "../../../images/x-circle.svg";

import { MobileHeaderStyles, ModalOpen } from "./MobileHeader.styles";

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <>
      <MobileHeaderStyles>
        <MenuBtn menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <ModalOpen menuOpen={menuOpen}>
          <Modal menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </ModalOpen>
      </MobileHeaderStyles>
    </>
  );
};

export default MobileHeader;

{
  /* <CloseBtnStyle>
<img src={CloseIcon} alt="" onClick={() => setModal(false)} />
</CloseBtnStyle> */
}

// <MobileMenu icon={icon}>
// <img src={MenuIcon} alt="menu-icon" onClick={() => setModal(true)} />
// </MobileMenu>
