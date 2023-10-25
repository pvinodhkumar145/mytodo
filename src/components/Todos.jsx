import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../store/features/todos/todoSlice'

const Todos = () => {
  const dispatch = useDispatch()
  const { todos } = useSelector(state => state.todos)
  console.log("todos", todos)



  return (
    <div>
    
      {
        todos.map((todo) => (
          <div key={todo.id}>

            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}> remove</button>


          </div>
        ))
      }
    </div>
  )
}

export default Todos
