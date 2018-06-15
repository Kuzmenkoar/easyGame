import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SignInForm = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit} >
         <div>
            <label htmlFor="login">Login</label>
            <Field name="login" component="input" type="text" />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <Field name="password" component="input" type="password" />
        </div>
        <button type="submit">Submit</button>
    </form>
)

export default reduxForm({
  form: 'signIn',
})(SignInForm)