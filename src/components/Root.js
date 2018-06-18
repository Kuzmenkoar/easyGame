import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './header'
import AuthorizationContainer from './authorization/AuthorizationContainer'
import SignInForm from './authorization/SignInForm'
import SignUpForm from './authorization/SignUpForm'

import { signIn } from '../ducks/authorization'

class Root extends Component {
  handleSignIn = ({ email, password }) => this.props.signIn(email, password)

  render() {
    return (
      <div>
        <Header />
        <Route path="/signIn" render={() => <AuthorizationContainer><SignInForm onSubmit={this.handleSignIn} /></AuthorizationContainer>} />
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
