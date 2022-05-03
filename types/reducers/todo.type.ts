export interface ITodo {
    userId: number
    id: number
    title: string
    completed: boolean
}

export interface TodosState {
    todos: ITodo[]
    filteredTodos: ITodo[]
    isPending: boolean
    error: string
}

export enum TodoActionTypes {
    FETCH_TODOS = 'todos/fetchTodos',
    RESET_TODOS = 'todos/resetTodos',
    TOGGLE_TODOS = 'todos/toggleTodos',
    SEARCH_TODOS = 'todos/searchTodos',
}

interface TodoFetchTodosAction {
    type: TodoActionTypes.FETCH_TODOS
    payload: ITodo
}

interface TodoResetTodosAction {
    type: TodoActionTypes.RESET_TODOS
}

interface TodoSearchTodosAction {
    type: TodoActionTypes.SEARCH_TODOS
    payload: string
}

export interface ITodoToggleTodosAction {
    checked: boolean
    id: number
}

interface TodoToggleTodosAction {
    type: TodoActionTypes.TOGGLE_TODOS
    payload: ITodoToggleTodosAction
}

export type TodoAction = TodoFetchTodosAction | TodoResetTodosAction | TodoToggleTodosAction | TodoSearchTodosAction
