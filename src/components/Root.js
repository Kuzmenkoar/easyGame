import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './header'
import SignInForm from './authorization/SignInForm'
import SignUpForm from './authorization/SignUpForm'

import { signIn } from '../ducks/authorization'

class Root extends Component {
  handleSignIn = ({ login, password }) => this.props.signIn(login, password)

  render() {
    return (
      <div>
        <Header />
        <Route path="/signIn" render={() => <SignInForm onSubmit={this.handleSignIn} />} />
        <Route path="/signUp" component={SignUpForm} />
      </div>
    )
  }
}

const mapStateToProps = ({ router }) => {
  return {
    router, // pure: false
  }
}

export default connect(
  mapStateToProps,
  { signIn },
)(Root)
