import React, { useState, useEffect } from 'react';
import { TodoItem } from './TodoItem.jsx'
import { AddTodo } from './AddTodo.jsx'
import AuthenticationService from './Authentication'
import axios from 'axios'

export const Todos = (props) => {

  let myStyle = {
    minHeight: "70vh",
  }

  const [todos, setTodos] = useState(null);

  const addTodo = (title, desc) => {

    const todoItem = {
      id: "",
      username: AuthenticationService.getUserName(),
      task: title,
      done: false,
      description: desc
    }

    axios.post(`http://localhost:8080/api/todoItems`,
      todoItem
    )
      .then(response => setTodos(response.data))

  }


  const onDelete = (todoItem) => {

    axios.delete(`http://localhost:8080/api/todoItems/${todoItem.id}`,
    )
      .then(response => setTodos(response.data))


  }

  useEffect(() => {

    if (!todos) {
      let username = AuthenticationService.getUserName();
      axios.get(`http://localhost:8080/api/todoItems/${username}`,
      )
        .then((response) => setTodos(response.data))
    }
  }, [todos]);

  return (
    <>

      <AddTodo addTodo={addTodo} />
      <div className="container my-3" style={myStyle}>
        <h3 className="my-3">Todos List</h3>
        {!todos || todos.length === 0 ? "No Todos to display" :
          todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.id} onDelete={onDelete} />
            )
          })}
      </div>
    </>
  )
}





// each child in todo should have unique key prop, that's why we send key in line 10.
