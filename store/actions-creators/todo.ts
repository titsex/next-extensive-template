import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { TodoActionTypes } from '@type/reducers/todo.type'

export const fetchTodos = createAsyncThunk(TodoActionTypes.FETCH_TODOS, async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/`)
    return response.data
})
