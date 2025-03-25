import React, { Component } from 'react'

class EventBinding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }

      this.clickHandler = this.clickHandler.bind(this);
    }

    // For traditional function we need to use binding.
    clickHandler(){

        this.setState({

            count : this.state.count + 1
        })

        
    }
    

  render() {
    return (
      <div>

      <h1>{this.state.count}</h1>
      <button onClick={this.clickHandler}>+</button>
        
      </div>
    )
  }
}

export default EventBinding
