import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="df jcsa header">
        <Link to="/signIn">SignIn</Link>
        <Link to="/signUp">SignUp</Link>
      </div>
    )
  }
}

export default Header
