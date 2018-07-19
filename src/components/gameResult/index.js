import React from 'react'

import './index.scss'
import Button from '../common/button'

const gameResult = () => {
  return (
    <div className="game-result">
      <h2 className="game-result_title">Your score:</h2>
      <div className="game-result_score">5 out 10</div>

      <div className="button-container">
        <Button type="danger" onClick={() => {}} label="Restart" />
        <Button type="default" onClick={() => {}} label="Close" />
      </div>
    </div>
  )
}

export default gameResult
