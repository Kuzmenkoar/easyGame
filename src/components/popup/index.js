import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import GameResult from '../gameResult'

const popupMap = {
  gameResult: GameResult,
}

const Popup = ({ children, closePopup }) =>
  ReactDOM.createPortal(
    <div className="popup" onClick={closePopup}>
      <div className="popup_container" onClick={e => e.stopPropagation()}>
        {popupMap['gameResult']()}
      </div>
    </div>,
    document.getElementById('modal-root'),
  )

export default Popup
