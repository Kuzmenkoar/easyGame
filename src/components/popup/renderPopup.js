import React from 'react'
import { connect } from 'react-redux'

import GameResult from '../gameResult'
import GameSettings from '../gameSettings'
import { closePopup } from '../../ducks/popup/action'

const popupMap = {
  gameResult: <GameResult />,
  gameSettings: <GameSettings />,
}

const RenderPopup = ({ componentKey, closePopup }) => {
  if (!popupMap[componentKey]) return null

  return (
    <div className="popup" onClick={closePopup}>
      <div className="popup_container" onClick={e => e.stopPropagation()}>
        {popupMap[componentKey]}
      </div>
    </div>
  )
}

const mapStateToProps = ({ popup: { componentKey } }) => ({
  componentKey,
})

export default connect(
  mapStateToProps,
  { closePopup },
)(RenderPopup)
