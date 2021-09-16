import React, { useState, useEffect } from "react"
import { MobileMenu } from "./header.styles"
import MenuIcon from "../../../images/menu.svg"

import { CloseBtnStyle, ModalStyle } from "../modal/modal.styles"
import CloseIcon from "../../../images/x-circle.svg"

export const Menu = () => {
  const [modal, setModal] = useState(false)
  const [icon, setIcon] = useState(true)

  // let prevScroll = window.pageYOffset
  // let currentScroll

  // const windowScroll = () => {

  // let lastScroll = currentScroll
  // if (currentScroll < lastScroll) {
  //   console.log("scroll up")
  //   lastScroll = currentScroll
  // } else if (currentScroll > lastScroll) {
  //   console.log("scroll down")
  //   lastScroll = currentScroll
  // }
  // if (window.pageYOffset > currentScroll) {
  //   console.log("scrolling down")
  //   currentScroll = window.pageYOffset
  // } else if (window.pageYOffset < currentScroll) {
  //   console.log("scrolling up")
  // }

  //scroll down works, scroll up works only when it reaches zero

  // useEffect(() => {
  //   window.addEventListener("scroll", windowScroll)
  // }, [])

  return (
    <>
      <MobileMenu icon={icon}>
        <img src={MenuIcon} alt="menu-icon" onClick={() => setModal(true)} />
      </MobileMenu>
      <ModalStyle modal={modal}>
        <CloseBtnStyle>
          <img src={CloseIcon} alt="" onClick={() => setModal(false)} />
        </CloseBtnStyle>

        <a href="#aboutMeSection" onClick={() => setModal(false)}>
          About
        </a>
        <p>|</p>
        <a href="#skillsSection" onClick={() => setModal(false)}>
          Skills
        </a>
        <p>|</p>
        <a href="#skillsSection" onClick={() => setModal(false)}>
          Projects
        </a>
        <p>|</p>
        <a href="">Contact</a>
      </ModalStyle>
    </>
  )
}
