import React, { Component } from 'react'
import Root from './components/Root'
import store from './redux'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import history from './history'
import Popup from './components/popup'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Popup />
          <ConnectedRouter history={history}>
            <Root />
          </ConnectedRouter>
        </div>
      </Provider>
    )
  }
}

export default App
