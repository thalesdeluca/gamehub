import React, { useState } from 'react'
import "./styles.scss"
import ChatDrawer from '../ChatDrawer'
import { Button } from '../Button'
import MenuSVGBlack from "../../assets/images/menu_black.svg"
import MenuSVG from "../../assets/images/menu.svg"

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="layout-container">
      <Button className="button-layout" onClick={() => setOpen(!open)}>
        <img src={open ? MenuSVGBlack : MenuSVG} className="menu-layout" />
      </Button>
      <ChatDrawer open={open} />
      <div className={`content-container ${open && "pad"}`}>
        {children}
      </div>
    </div>
  )
}

export default Layout
