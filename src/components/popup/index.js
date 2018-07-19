import React from 'react'
import ReactDOM from 'react-dom'

import RenderPopup from './renderPopup'
import './index.scss'

const Popup = () => ReactDOM.createPortal(<RenderPopup />, document.getElementById('modal-root'))

export default Popup
