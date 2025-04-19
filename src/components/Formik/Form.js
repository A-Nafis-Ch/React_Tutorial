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

        onSubmit={(values, actions) => {
          
          console.log('User: ' , values);
          actions.resetForm();
        }}

      >

        {({values, handleChange, handleSubmit}) => (

          <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' placeholder='Enter your name'
              onChange={handleChange} value={values.name}></input> <br />

            <label htmlFor='email'>Email:</label>
            <input type='text' id='email' placeholder='Enter your email' onChange={handleChange} value={values.email}></input><br />

            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' placeholder='Enter your password' onChange={handleChange} value={values.password}></input><br />

            <button type='submit'>Submit</button>
          </form>

        )}







      </Formik>
    </div>
  )
}

export default Form
