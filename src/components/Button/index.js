import React from 'react'
import "./styles.scss"

const Button = ({ children, className, ...props }) => {
  return (
    <button type="button" className={`btn button-home ${className}`} {...props}>{children}</button>
  )
}

export { Button };
