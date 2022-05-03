import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo, ITodoToggleTodosAction, TodosState } from '@type/reducers/todo.type'
import { fetchTodos } from '@store/actions-creators/todo'

const initialState: TodosState = {
    todos: [] as ITodo[],
    filteredTodos: [] as ITodo[],
    isPending: false,
    error: '',
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        reset: state => {
            state.todos = [] as ITodo[]
        },
        toggleTodo: (state, action: PayloadAction<ITodoToggleTodosAction>) => {
            const findTodo = state.filteredTodos.find(x => x.id === action.payload.id)
            const findFilteredTodo = state.todos.find(x => x.id === action.payload.id)

            if (findTodo) findTodo.completed = action.payload.checked
            if (findFilteredTodo) findFilteredTodo.completed = action.payload.checked
        },
        search: (state, action: PayloadAction<string>) => {
            if (action.payload.length) {
                for (const todo of state.todos) {
                    const find = todo.title.search(action.payload)

                    if (find === -1) state.filteredTodos = state.filteredTodos.filter(x => x.id !== todo.id)
                    else state.filteredTodos.push(todo)
                }
            } else state.filteredTodos = []

            state.filteredTodos = state.filteredTodos.sort((a, b) => {
                if (a.title.search(action.payload) > b.title.search(action.payload)) return 1
                else if (a.title.search(action.payload) === b.title.search(action.payload)) return 0
                return -1
            })
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTodos.pending, state => {
                state.isPending = true
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload
                state.isPending = false
                state.error = ''
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.error = (action.payload as string) || 'Неизвестная ошибка'
                state.isPending = false
            })
    },
})

export const todoActions = todoSlice.actions
export const todoReducer = todoSlice.reducer
