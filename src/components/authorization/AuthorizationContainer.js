import React, {Component} from 'react'
import Loader from '../common/loader'
import { connect } from 'react-redux'

class AuthorizationContainer extends Component {
    getDerivedStateFromProps(props) {
        const { error } = props
        if (error) {
            alert(error.message)
        }
    }

    render () {
        const { children, isLoading } = this.props
            if (isLoading) {
                return <div style={{ height: '200px', position: 'relative' }}><Loader /></div>
              }
        
            return children
    }

} 

const mapStateToProps = ({authorization: { isLoading, error }}) => ({
    isLoading,
    error
})


export default connect(mapStateToProps)(
    AuthorizationContainer
)
  