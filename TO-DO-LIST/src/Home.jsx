import React, { useEffect, useState } from 'react'
import CreateTodo from './CreateTodo'
import axios from 'axios'

function Home() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then((result) => setTodos(result.data))
            .catch((err) => console.log(err))
    }, [])

    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update/' + id)
            .then(() => {
                location.reload();
            })
            .catch((err) => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id)
            .then(() => {
                location.reload();
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className='home'>
            <h1>TO DO APP</h1>
            <CreateTodo />
            {
                todos.length === 0 ?
                    <div><h2>No record</h2></div>
                    :
                    todos.map(todo => (
                        <div className='task' key={todo._id}>
                            <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                                {todo.done ?
                                    <span className='icon'>✔️</span>
                                    : <span className='icon'>⚪</span>}
                                <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                            </div>
                            <div>
                                <span className='icon' onClick={() => handleDelete(todo._id)}>🗑️</span>
                            </div>
                        </div>
                    ))
            }
        </div>

    )
}

export default Home