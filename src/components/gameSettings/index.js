import React from 'react'
import { connect } from 'react-redux'

import './index.scss'
import Button from '../common/button'
import { closePopup } from '../../ducks/popup/action'
import { startGame } from '../../ducks/easyGame/action'

const GameSettings = ({ closePopup, startGame, totalGames }) => {
  return (
    <div className="game-settings">
      <h2 className="game-result_title">Your score:</h2>
      <div className="game-result_score">{totalGames}</div>

      <div className="df jcc">
        <Button type="default" onClick={startGame} label="Start game" />
      </div>
    </div>
  )
}

const mapStateToProps = ({ easyGame }) => ({
  totalGames: easyGame.settings.totalGames,
})

export default connect(
  mapStateToProps,
  { closePopup, startGame },
)(GameSettings)
