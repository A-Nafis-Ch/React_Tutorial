import React from 'react'
import {useState} from 'react' 

const Todo = () => {

    const [todo] = useState([
        {
            title: 'Vegies',
            desc: '5kg of vegies'
        },
        {
            title: 'Beef',
            desc: '2kg beef'
        },
        {
            title: 'Olive Oil',
            desc: '2ltrs olive oil'
        },
    ])
    return (
        <div>

            <h1>Todo List: </h1>
            {todo.map((item,index)=>(

                <div key={index}>

                <h1>{item.title}</h1>
                <h2>{item.desc}</h2>

                </div>
            ))}

        </div>
    )
}

export default Todo
