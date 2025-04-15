import React from 'react'

import { Formik } from 'formik';



const Form = () => {


  return (
    <div>
      <h1>This is Form Component</h1>
      <h1>Hello I am Formik Component.</h1>

      <h2>Sign Up Form</h2>

      <Formik

        initialValues={{
          name: '',
          email: '',
          password: ''
        }}

      >

        {(values, handleChange, handleSubmit) => {

          <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' placeholder='Enter your name'
              onChange={handleChange} value={values.name}></input> <br></br>

            <label htmlFor='email'>Email:</label>
            <input type='text' id='email' placeholder='Enter your email' onChange={handleChange} value={values.name}></input><br></br>

            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' placeholder='Enter your password' onChange={handleChange} value={values.name}></input><br></br>

            <button type='submit'>Submit</button>
          </form>

        }}







      </Formik>
    </div>
  )
}

export default Form
