import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserSVG from "../../assets/images/user.svg"
import { logout } from '../../store/ducks/auth';
import Dropdown from '../Dropdown';
import "./styles.scss"

const LoggedMenu = () => {
  const [open, setOpen] = useState(false)
  const { user } = useSelector(state => state.auth)
  const ref = useRef();
  const dispatch = useDispatch();

  const onClickMenu = () => {
    setOpen(!open);
  }

  const onClickLogout = () => {
    setOpen(false)
    dispatch(logout())
  }

  return user?.token ? (
    <div className="menu-container">
      <div className="dropdown" ref={ref}>
        <img src={UserSVG} className="icon-menu" onClick={onClickMenu} />

        <Dropdown options={[{ text: "Logout", onClick: onClickLogout }]} open={open} />
      </div>
    </div>
  ) : null
}

export { LoggedMenu }
