import { CounterState } from '@type/reducers/counter.type'
import { createSlice } from '@reduxjs/toolkit'

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
