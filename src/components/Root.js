import React, { Component } from 'react'
import SignIn from './authorization/SignIn'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

class Root extends Component {

    render() {
        return (
          <div>
              Hello
                <Route path='/hey' component={SignIn} />
          </div>
        )
    }
}

export default connect(null, null, null, {pure: false})(Root)