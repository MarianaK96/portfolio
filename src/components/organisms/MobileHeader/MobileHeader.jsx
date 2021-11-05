import React, { useState } from "react";
import MenuBtn from "../../atoms/menuBtn/MenuBtn";
import Modal from "../../molecules/modal/Modal";
import { MobileHeaderStyles } from "./MobileHeader.styles";

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <>
      <MobileHeaderStyles>
        <MenuBtn
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
        <Modal menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </MobileHeaderStyles>
    </>
  );
};

export default MobileHeader;
