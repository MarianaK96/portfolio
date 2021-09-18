import React from "react";

import HeaderLink from "../../atoms/headerLinks/HeaderLinks";
import { categories } from "../../../data";

import { WebHeaderStyles } from "./WebHeader.styles";

const WebHeader = () => {
  return (
    <>
      <WebHeaderStyles>
        {categories.map((item, index) => {
          return (
            <HeaderLink key={index} item={item.category} link={item.link} />
          );
        })}
      </WebHeaderStyles>
    </>
  );
};

export default WebHeader;
