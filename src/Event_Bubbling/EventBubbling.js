import React, { Component } from 'react'

class EventBubbling extends Component {
  render() {
    const ParentClickHandler = (e) => {

        console.log("Parent Event: ", e)
    }

    const ChildClickHandler = (e) => {

        e.stopPropagation();  // To stop calling parent while calling child.
        console.log("Child Event: ", e)
    }

    return (
      <div>
        <div className='ParentDiv' onClick={ParentClickHandler}>
            <h1>This is Parent div</h1>
            <button onClick={ChildClickHandler}>+</button>
        </div>
      </div>
    )
  }
}

export default EventBubbling
