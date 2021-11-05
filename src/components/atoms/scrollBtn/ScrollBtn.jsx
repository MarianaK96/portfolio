import React, { useState } from "react";
import ScrollBtnIcon from "../../../images/arrow-up-circle .svg";
import { ScrollBtnStyles } from "./ScrollBtnStyles.styles";

const ScrollBtn = ({ btn }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <ScrollBtnStyles href="#homeSection" visible={visible}>
        <img src={ScrollBtnIcon} alt="" />
      </ScrollBtnStyles>
    </>
  );
};

export default ScrollBtn;
