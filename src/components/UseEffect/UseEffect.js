import React from 'react'
import { useState, useEffect } from 'react'


const UseEffect = (props) => {

    const clickHandler = () => {

        setCount(count+1);



    }

    

    const [count, setCount] = useState(0);

    
useEffect(() => {

    console.log('Welcome to UseEffect');
})

  return (
    <div>
      <h1>I am from: {props.name} Component</h1>

      <h1>{count}</h1>

      <button onClick={clickHandler}>+</button>
    </div>
  )
}

export default UseEffect

