import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';


export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) =>  {
        console.log("in submit todo method")
        e.preventDefault();  // stops page from reloading
        if(!title || !desc){
            alert("Title and Description both are required ")    
            return;
        }
        props.addTodo(title,desc)
        setTitle("");
        setDesc("");
    }

    let history = useHistory()
    let name=history.location.pathname.split('/')[2]

    return (
        <div className="container my-5">
        <h2>Todolist for {name} </h2>
        <h3>Add a Todo </h3>
            <form onSubmit={submit}>
                <div class="form-group">
                            <label for="title">Todo Title</label>
                            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} class="form-control" id="title"  placeholder="Enter your Todo Title"/>
                </div>
                    <div class="form-group">
                            <label for="desc">Todo Description</label>
                            <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} class="form-control" id="desc" placeholder="Enter Description"/>
                    </div>
                        <div class="Submitclass">
                            <button type="submit" class="btn btn-success">Submit Todo</button>
                        </div>
            </form>
        </div>
    )
}