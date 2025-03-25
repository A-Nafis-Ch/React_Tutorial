import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'




class CONDITIONAL_RENDERING extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           isLoggedIn : false
        }
      }

  render() {

    // if(this.state.isLoggedIn){

    //     return <Homepage />
    // }
    // else{

    //     return <LoginPage />
    // }

    return this.state.isLoggedIn ? <HomePage /> : <LoginPage />



  }
}

export default CONDITIONAL_RENDERING
