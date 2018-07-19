import React from 'react'
import './index.scss'

const Button = ({ label, children, onClick, type, isSubmit, className }) => (
  <button
    className={`button --${type || 'default'} ${className}`}
    onClick={onClick}
    type={isSubmit && 'submit'}
  >
    {label || children}
  </button>
)

export default Button
