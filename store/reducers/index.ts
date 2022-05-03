import { counterReducer } from '@reducer/counterReducer'
import { postReducer } from '@reducer/postReducer'
import { AnyAction, combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import { todoReducer } from '@reducer/todoReducer'

export const rootReducer = combineReducers({
    counter: counterReducer,
    post: postReducer,
    todo: todoReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const reducer = (state: RootState | undefined, action: AnyAction) => {
    if (action.type === HYDRATE)
        return {
            ...state,
            ...action.payload,
        }
    else return rootReducer(state, action)
}
