import React from "react";
import ScrollBtnIcon from "../../../images/arrow-up-circle .svg";
import { FiArrowUp } from "react-icons/fi";
import { ScrollBtnStyles, IconStyle } from "./ScrollBtnStyles.styles";

const ScrollBtn = () => {
  return (
    <>
      <ScrollBtnStyles href="#homeSection">
        <img src={ScrollBtnIcon} alt="" />
      </ScrollBtnStyles>
    </>
  );
};

export default ScrollBtn;
