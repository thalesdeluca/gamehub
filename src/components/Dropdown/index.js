import React, { useState } from 'react'
import "./styles.scss"

const Dropdown = ({ options = [], open = false }) => {
  return open && (
    <div className="dropdown-container">
      {options.map(({ text, onClick }) => (
        <div className="dropdown-item" onClick={onClick} key={text}>{text}</div>
      ))}
    </div>
  )
}

export default Dropdown
