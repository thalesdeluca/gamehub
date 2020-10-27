import React from 'react'
import "./styles.scss";

const Input = React.forwardRef(({ name, error, errors, ...props }, ref) => {
  return (
    <div className="input-custom">
      <div className="input-container input-group">
        <input className="form-control" name={name} {...props} ref={ref} />

      </div>
      {errors[name] && <span className="error-input">{error}</span>}
    </div>

  )
})

export default Input
