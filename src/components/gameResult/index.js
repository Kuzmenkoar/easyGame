import React from 'react'
import { connect } from 'react-redux'

import './index.scss'
import Button from '../common/button'
import { closePopup, showPopup } from '../../ducks/popup/action'

const GameResult = ({ closePopup, rightChoices, totalGames, showPopup }) => {
  return (
    <div className="game-result">
      <h2 className="game-result_title">Your score:</h2>
      <div className="game-result_score">
        {rightChoices} out {totalGames}
      </div>

      <div className="button-container">
        <Button type="danger" onClick={() => showPopup('gameSettings')} label="Restart" />
        <Button type="default" onClick={closePopup} label="Close" />
      </div>
    </div>
  )
}

const mapStateToProps = ({ easyGame }) => ({
  rightChoices: easyGame.result.rightChoices,
  totalGames: easyGame.settings.totalGames,
})

export default connect(
  mapStateToProps,
  { closePopup, showPopup },
)(GameResult)
