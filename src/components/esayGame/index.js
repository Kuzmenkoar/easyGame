import React from 'react'
import './index.scss'
import GameResult from './../gameResult'

const values = ['red', 'blue', 'green']

function easyGame() {
  const color = values[0]

  return (
    <div className="easyGame">
      <h1 className={`easyGame_text --${color}-text`}>{color}</h1>
      <div className="easyGame_container  easyGame-playground">
        <div className="easyGame-playground_square --red --green-text">green</div>
        <div className="easyGame-playground_square --green --blue-text">blue</div>
        <div className="easyGame-playground_square --blue --red-text">red</div>
      </div>

      <GameResult />
    </div>
  )
}

export default easyGame
