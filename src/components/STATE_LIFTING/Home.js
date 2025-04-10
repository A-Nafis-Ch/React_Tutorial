import React, { useState } from 'react'

import Todos from './Todos';
import NewTodo from './NewTodo';
import Todo from './Todo';


const todoArray = ["todo1","todo2"];

const Home = () => {

  const [todos, setTodos] = useState(todoArray);

  const handleNewTodo = (newTodo) => {
    setTodos(...todos, newTodo);
  }



    
  return (
    <div>
      <h1>This is home component</h1>

      <Todos todolist = {todoArray}/>
      <Todo />
      <NewTodo onTodo={handleNewTodo}/>
    </div>
  )
}

export default Home
