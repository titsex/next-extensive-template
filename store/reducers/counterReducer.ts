import { createSlice } from '@reduxjs/toolkit'
import { CounterState } from '@type/counter'

const initialState: CounterState = {
    count: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.count++
        },

        decrement: state => {
            state.count--
        },

        resetCounter: state => {
            state.count = 0
        },
    },
})

export const counterActions = counterSlice.actions
export const counterReducer = counterSlice.reducer
