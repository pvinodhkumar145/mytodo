import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todos/todoSlice";

const reducer = combineReducers({
    todos: todoSlice,
    
})


export const store = configureStore({
    reducer: reducer
})  