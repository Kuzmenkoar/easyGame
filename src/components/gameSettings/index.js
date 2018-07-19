import React from 'react'
import { connect } from 'react-redux'

import './index.scss'
import { startGame } from '../../ducks/easyGame/action'
import SettingsForm from './SettingsForm'

const GameSettings = ({ startGame, totalGames, timePerGame }) => {
  return (
    <div className="game-settings">
      <h2 className="game-settings_title">Game settings:</h2>
      <SettingsForm
        onSubmit={startGame}
        placeholderTimeout={timePerGame}
        placeholderTotalGames={totalGames}
      />
    </div>
  )
}

const mapStateToProps = ({
  easyGame: {
    settings: { totalGames, timePerGame },
  },
}) => ({
  totalGames,
  timePerGame,
})

export default connect(
  mapStateToProps,
  { startGame },
)(GameSettings)
