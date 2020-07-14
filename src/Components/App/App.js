import React from 'react'
import { withFormik, Form, Field, ErrorMessage } from 'formik'
import './App.css'


function App(props) { 
  const {
    isSubmitting,
    isValid
  } = props
  
  
  return (
    <Form>
      <div className="inputx">
        <strong>Email:</strong>
        <Field className="form-control" name="email" type="email"/>
        <ErrorMessage name="email">
          {message => <div className="alert alert-danger">{message}</div>}
        </ErrorMessage>
      </div>
      <div className="inputx">
        <strong>Password:</strong>
        <Field className="form-control" name="password" type="password"/>
        <ErrorMessage name="password">
          {message => <div className="alert alert-danger">{message}</div>}
        </ErrorMessage>
      </div>
      <button 
        type="submit"
        className={`btn btn-danger ${isSubmitting || !isValid ? 'disabled' : ''}`} 
        disalbed={isSubmitting || !isValid}>
          Enviar
      </button>
    </Form>
  )
}

export default withFormik({
  mapPropsToValues () {
    return {
      email: '',
      password: ''
    }
  },

  validate (values) {
    const errors = {}

    if (!values.email) {
      errors.email = 'Email is required.'
    } else if (values.email.indexOf('@') === -1) {
      errors.email = 'The email must contain @'
    }

    if (!values.password) {
      errors.password = 'Password is required.'
    } else if (values.password.length < 8) {
      errors.password = 'Email must be at least 8 characters.'
    }
    
    return errors
  },

  handleSubmit(values, formikBag) {
    formikBag.setSubmitting(false)
    alert(JSON.stringify(values))
  }
})(App)
