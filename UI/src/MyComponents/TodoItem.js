import React, { useState, useEffect } from 'react'

export const TodoItem = ({ todo, onDelete }) => {
    const mystyle = {
        color: "black",
        backgroundColor: "lightBlue",
        padding: "8px",
        fontFamily: "Arial"
    };

    const [todoItem, setTodoItem] = useState(todo);
    const [isModify, setIsModify] = useState(false);

    useEffect(() => {
        console.log("Inside useEffect of todoitem")
        if (isModify) {
            console.log("todoItem :::", todoItem)
            fetch(`http://localhost:8080/api/todoItems/${todoItem.id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(todoItem)
            })
                .then((response) => response.json() )
                .then(data => {
                    setIsModify(false)
                    setTodoItem(data)
                })   
        }
    }, [todoItem, isModify])

    function updateisdone() {
        setIsModify({ ...isModify.true })
        setTodoItem({ ...todoItem, done: !todoItem.done })
    }

    return (
        <>
            <div>
                <hr />
                <input type="checkbox" checked={todoItem.done} onChange={() => { updateisdone() }} />
                <span> {todoItem.task}</span>
                <p style={mystyle}>{todoItem.description}</p>
                <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>Delete</button>
                <hr />
            </div>
        </>
    )

}

// if we do like this onDelete(todo)
// then function will be called during reneding.
// so we do this.

