import React from 'react'
import "./styles.scss"

const Spinner = ({ dark = false }) => {
  return (
    <div className="spinner-container">
      <div className={`lds-ellipsis ${dark && "lds-ellipsis-black"}`} >
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>
    </div>

  )
}

export { Spinner }
