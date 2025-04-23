import React from 'react'
import{useState, useRef, useEffect} from 'react'

const UseRefComponent = (props) => {

    const [counter,setCount] = useState(0)

    const a = useRef(1);

    useEffect(()=>{

        a.current = a.current + 1;
        console.log(`Rerendering taking place ans the value of a is: ${a.current} `)

    })

    const clickHandler = () => {
        setCount(counter+1)
    }

    
    // const color = useRef(a)


  return (
    <div>

        <h1>This is useRef component.</h1>
        <h1>Counter: {counter}</h1>
        <button onClick={clickHandler} >Click Counter</button>
        
      
    </div>
  )
}

export default UseRefComponent
