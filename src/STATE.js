import React, { Component } from 'react'

export default class STATE extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count : 0
       
    }
  }

  incrementHandler = () => {

    this.setState({
      count : this.state.count + 1})
  }

  decrementHandler = () => {

    this.setState({count : this.state.count -1})
  }
  
  render() {

    // destucturing
    const {count} = this.state

    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.incrementHandler} disabled={count===10 ? true : false}>+</button>
        <button onClick={this.decrementHandler} disabled={count===0 ? true : false}>-</button>
      </div>
    )
  }
}
