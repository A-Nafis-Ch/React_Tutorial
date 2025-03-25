// Here instead of using class state we will use Hooks Use State.

import React,{useState} from 'react'

function HooksUseState() {

    const [count, setCount] = useState(0)
    const clickHandler = () => {

        // setCount(count + 1);
        setCount((count)=>count +1)
        setCount((count)=>count +1)
        setCount((count)=>count +1)
    }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={clickHandler}>+</button>
    </div>
  )
}

export default HooksUseState
