import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const todos = [
    {
        id: uuidv4(),
        title: 'todo-1',
        desc: 'todo1 desc 1',
    },
    {
        id: uuidv4(),
        title: 'todo-2',
        desc: 'todo2 desc 2',
    },
    {
        id: uuidv4(),
        title: 'todo-3',
        desc: 'todo3 desc 3',
    },
    {
        id: uuidv4(),
        title: 'todo-4',
        desc: 'todo4 desc 4',
    }
];

const List = () => {

    // console.log(uuidv4());

    return (  
    <>
        {todos.map((todo) => {

            const { id, title, desc } = todo;

            return( <div key={uuidv4()}>

                <h3>{id}</h3>
                <h3>{title}</h3>
                <p >{desc}</p>
            </div>
            );
        })}

    </>
    );
}

export default List;