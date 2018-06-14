import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import SignIn from './authorization/SignIn'
import SignUp from './authorization/SignUp';

class Root extends Component {
  render() {
    return (
      <div>
        Hello
        <ul>
            <li><Link to='/signIn'>SignIn</Link></li>
            <li><Link to='/signUp'>SignUp</Link></li>
        </ul>
        <Route path='/signIn' component={SignIn} />
        <Route path='/signUp' component={SignUp} />
      </div>
    )
  }
}

export default connect(null, null, null, {pure: false})(Root)