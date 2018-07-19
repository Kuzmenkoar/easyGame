import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from './common/header'
import EasyGame from './esayGame'
import StartButton from './startButton'

class Root extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" component={EasyGame} />
        <StartButton />
      </div>
    )
  }
}

export default Root
