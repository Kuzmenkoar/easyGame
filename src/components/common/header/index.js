import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

const Header = ({ step }) => <div className="df jcsa header">Round {step}</div>

const mapStateToProps = ({
  easyGame: {
    game: { step },
  },
}) => ({
  step: step,
})

export default connect(mapStateToProps)(Header)
