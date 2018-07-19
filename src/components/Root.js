import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from './common/header'
import EasyGame from './esayGame'

class Root extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" component={EasyGame} />
      </div>
    )
  }
}

export default Root
