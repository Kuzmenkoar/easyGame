import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './SettingsForm.scss'
import Button from '../common/button'

const minValue = min => value => (value && value < min ? `Must be at least ${min}` : undefined)
const minValue1 = minValue(1)
const minValue100 = minValue(100)

const SettingsForm = ({ handleSubmit, placeholderTimeout, placeholderTotalGames }) => (
  <form className="settings" onSubmit={handleSubmit}>
    <div className="settings_item input-container">
      <label className="input-container_label" htmlFor="totalGames">
        Total Steps
      </label>
      <Field
        validate={[minValue1]}
        className="input-container_field"
        name="totalGames"
        component="input"
        type="number"
        placeholder={placeholderTotalGames}
      />
    </div>
    <div className="settings_item input-container">
      <label className="input-container_label" htmlFor="timePerGame">
        Timeout for step
      </label>
      <Field
        validate={[minValue100]}
        className="input-container_field"
        name="timePerGame"
        component="input"
        type="number"
        placeholder={placeholderTimeout}
      />
    </div>
    <Button className="settings_button" isSubmit type="">
      Start game
    </Button>
  </form>
)

export default reduxForm({
  form: 'gameSettings',
})(SettingsForm)
