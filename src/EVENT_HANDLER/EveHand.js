import React, { Component } from 'react'

class EVENT_HANDLER extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         ChangedWords : ''
      }
    }
    

    inputHandler = (e) =>{

        // console.log('Wrote')
        this.setState({
            ChangedWords : e.target.value
        }, () => {

            console.log(this.state.ChangedWords)
        })

    }
  render() {
    return (
      <div>
        <input type='text' placeholder='write something...' onChange={this.inputHandler}></input>
        <p>{this.state.ChangedWords}</p>
      </div>
    )
  }
}

export default EVENT_HANDLER
