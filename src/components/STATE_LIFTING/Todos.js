import React from 'react'

import Todo from './Todo'

const Todos = (props) => {

    // console.log(props.todolist)
  return (

    <div>
      <h1>This is Todos component</h1>
      {props.todolist.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}

    </div>
  );
};

export default Todos
