import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

const Header = ({ step }) => <div className="df jcsa header">Round {step || null}</div>

const mapStateToProps = ({ easyGame }) => {
  const { step } = easyGame.game
  const { totalGames } = easyGame.settings

  return {
    step: step > totalGames ? totalGames : step,
  }
}

export default connect(mapStateToProps)(Header)
