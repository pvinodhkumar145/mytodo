import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/features/todos/todoSlice'

const AddTodo = () => {
    const [input,setInput]=useState('')
    const dispatch = useDispatch()
  

    const TodoAddhandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        console.log(dispatch(addTodo(input)))
        setInput('')

    }
  return (
    <div>
        
        <form onSubmit={TodoAddhandler}>
            <input type="text"
            placeholder='Enter value'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
             />
            
            <button type='submit'>AddTodo</button>
        </form>
    </div>
  )
}

export default AddTodo