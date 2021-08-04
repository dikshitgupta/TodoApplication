import './App.css';
import Header from './MyComponents/Header.js'
import { Todos } from './MyComponents/Todos.js'
import { Footer } from './MyComponents/Footer.js'
import React, { useState, useEffect } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [todos, setTodos] = useState(null);

  const addTodo = (title, desc) => {

    let id = (todos && todos.length !== 0 ? todos[todos.length - 1].id + 1 : 1);

    const todoItem = {
      id: id,
      task: title,
      done: false,
      description: desc
    }
  
    fetch(`http://localhost:8080/api/todoItems/${todoItem.id}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(todoItem)
            })
                .then((response) => response.json() )
                .then(data => {
                    setTodos(data)
                })

    console.log("inside add todo:", todos)
  }


  const onDelete = (todoItem) => {
    console.log("on delete called", todoItem)
    
    fetch(`http://localhost:8080/api/todoItems/${todoItem.id}`, {
      method: "DELETE",
      headers: {
          "content-type": "application/json",
      },
      body: JSON.stringify({})
    })
      .then((response) => response.json() )
      .then(data => {
        console.log("inside delete method",)
          setTodos(data)
      })

  console.log("inside delete todo:", todos)

  }


  useEffect(() => {
    console.log("Inside useEffect of app.js", todos)
    if (!todos) {
      console.log("Fetching todos")
      fetch("http://localhost:8080/api/todoItems")
        .then((response) => response.json())
        .then((data) => {
          console.log("all data from get:", data)
          setTodos(data)
        })
    }
  }, [todos])


  return (
    <>
      <Router>
        <Header title="Todos List" searchBar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
