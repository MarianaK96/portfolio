import React, { useState } from "react";
import { MobileMenu, MenuBtnBox, MenuBtnBurger } from "./MenuBtn.styles";

const MenuBtn = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <MobileMenu>
        <MenuBtnBox
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <MenuBtnBurger menuOpen={menuOpen} />
        </MenuBtnBox>
      </MobileMenu>
    </>
  );
};

export default MenuBtn;
