import React,{useState} from 'react'
import axios from 'axios';

const CreateTodo = () => {
    const [task,setTask]=useState()

    const handleAdd=()=>{
        axios.post('http://localhost:3001/add',{task:task})
        .then((result)=>{
            location.reload()
        })
        .catch((err)=>console.log(err));
    }

    return (
        <div className='create_form'>
            <input type='input' placeholder='Here' onChange={(e)=>setTask(e.target.value)}></input>
            <button onClick={handleAdd} type='button'>Add</button>
        </div>
    )
}

export default CreateTodo