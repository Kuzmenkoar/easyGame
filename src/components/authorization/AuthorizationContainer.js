import React, { Component } from 'react'
import Loader from '../common/loader'
import { connect } from 'react-redux'
import { clearError } from '../../ducks/authorization'

class AuthorizationContainer extends Component {
  state = {}

  static getDerivedStateFromProps(props) {
    const { error, clearError } = props
    if (error) {
      alert(error.message)
      clearError()
    }

    return null
  }

  render() {
    const { children, isLoading } = this.props
    if (isLoading) {
      return (
        <div style={{ height: '200px', position: 'relative' }}>
          <Loader />
        </div>
      )
    }

    return children
  }
}

const mapStateToProps = ({ authorization: { isLoading, error } }) => ({
  isLoading,
  error,
})

export default connect(
  mapStateToProps,
  { clearError },
)(AuthorizationContainer)
