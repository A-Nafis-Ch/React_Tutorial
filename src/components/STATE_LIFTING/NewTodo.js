import React, { useState } from 'react'

const NewTodo = (props) => {

  const [todo, setTodo] = useState('');
  const handleInputChange = (e) => {
    setTodo(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(todo);
    props.onTodo(todo);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='todo'><h3>New Todo: </h3></label>
        <input type='text' id='todo' name='todo' value={todo} onChange={handleInputChange}></input>
        <button>Add Todo</button>
      </form>
    </div>
  )
}

export default NewTodo
