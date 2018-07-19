import React from 'react'
import './index.scss'

const Button = ({ label, children, onClick, type }) => (
  <button className={`button --${type || 'default'}`} onClick={onClick}>
    {label || children}
  </button>
)

export default Button
