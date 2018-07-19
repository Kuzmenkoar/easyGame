import React from 'react'

import './index.scss'
import { connect } from 'react-redux'
import { selectSquare, startGame } from '../../ducks/easyGame/action'
import { showPopup } from '../../ducks/popup/action'

class EasyGame extends React.Component {
  componentDidMount() {
    // this.props.startGame()
    this.props.showPopup('gameSettings')
  }

  handleClick = e => {
    this.props.selectSquare(e.target.textContent)
  }

  render() {
    const { color } = this.props

    return (
      <div className="easyGame">
        <h1 className={`easyGame_text --${color}-text`}>{color}</h1>
        <div className="easyGame_container  easyGame-playground">
          <div className="easyGame-playground_square --red --green-text" onClick={this.handleClick}>
            green
          </div>
          <div
            className="easyGame-playground_square --green --blue-text"
            onClick={this.handleClick}
          >
            blue
          </div>
          <div className="easyGame-playground_square --blue --red-text" onClick={this.handleClick}>
            red
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({
  easyGame: {
    game: { color },
  },
}) => ({
  color,
})

export default connect(
  mapStateToProps,
  { startGame, selectSquare, showPopup },
)(EasyGame)
