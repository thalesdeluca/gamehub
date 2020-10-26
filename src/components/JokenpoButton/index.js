import React from 'react'
import "./styles.scss"


const JokenpoButton = ({ icon, className, id, onClick }) => {
  return (
    <button className="jokenpo-button" id={id} onClick={onClick}>
      <div className={className}>
        <img src={icon} />
      </div>
    </button>
  )
}

export { JokenpoButton }
