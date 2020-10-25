import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss"


const GameButton = ({ icon, name, to }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: "inherit" }} className="game-card">
      <img src={icon} />
      <span>{name}</span>
    </Link>
  )
}

export { GameButton }
