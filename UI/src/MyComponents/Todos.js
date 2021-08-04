import React from 'react'
import {TodoItem} from './TodoItem.js'

export const Todos = (props) => {
    let myStyle={
        minHeight:"70vh",
    }



    return (
        <div className="container my-3" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {!props.todos || props.todos.length===0 ? "No Todos to display" :  
            props.todos.map((todo) => {
                 return  (
                    <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete}/>            
                 ) 
             })  }
        </div>
    )

}



// each child in todo should have unique key prop, that's why we send key in line 10.
