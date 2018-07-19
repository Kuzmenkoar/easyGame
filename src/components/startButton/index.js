import React from 'react'
import { connect } from 'react-redux'
import Button from '../common/button'
import { showPopup } from '../../ducks/popup/action'
import './index.scss'

const StartButton = ({ showPopup, step, totalGames }) => {
  if (step && step <= totalGames) {
    return null
  }

  return (
    <div className="start-button">
      <Button label="Start game" onClick={() => showPopup('gameSettings')} />
    </div>
  )
}

const mapStateToProps = ({ easyGame }) => ({
  step: easyGame.game.step,
  totalGames: easyGame.settings.totalGames,
})

export default connect(
  mapStateToProps,
  { showPopup },
)(StartButton)
