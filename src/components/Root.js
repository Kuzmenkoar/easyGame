import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './header'
import SignInForm from './authorization/SignInForm'
import SignUpForm from './authorization/SignUpForm'

import { signIn } from '../ducks/authorization'
import ProtectedRoute from './common/protectedRoute'
import PeopleList from './people/PeopleList'

class Root extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProtectedRoute exact path="/" component={PeopleList} />
        <Route
          path="/signIn"
          render={() => (
              <SignInForm onSubmit={this.props.signIn} />
          )}
        />
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
