import React from 'react'
import { useState, useEffect } from 'react'




const UseEffect = (props) => {

  const useEffect = (() => {
     alert("I will be called in every render!");
  })

    const clickHandler = () => {

        setCount(count+1);



    }

    const colorHandler = () => {

      setCurrentColor(color[Math.floor(Math.random() * color.length)]);
    }

    

    const [count, setCount] = useState(0);
    const [color] = useState(['red', 'green', 'yellow'])
    const [currentColor, setCurrentColor] = useState(color[0])

    
useEffect(() => {

    console.log('Welcome to UseEffect');
})

  return (
    <div>
      <h1>I am from: {props.name} Component</h1>

      <h1>{count}</h1>

      <button onClick={clickHandler}>+</button>

      <h1>{currentColor}</h1>
      <h1>Color: {props.color}</h1>

      <button onClick={colorHandler}>Change Color</button>
    </div>
  )
}

export default UseEffect

