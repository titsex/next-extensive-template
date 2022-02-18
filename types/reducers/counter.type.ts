export interface CounterState {
    count: number
}

export enum CounterActionTypes {
    INCREMENT = 'counter/increment',
    DECREMENT = 'counter/decrement',
    RESET_COUNTER = 'counter/resetCounter',
}

interface CounterIncrementAction {
    type: CounterActionTypes.INCREMENT
}

interface CounterDecrementAction {
    type: CounterActionTypes.DECREMENT
}

interface CounterResetCounterAction {
    type: CounterActionTypes.RESET_COUNTER
}

export type CounterAction = CounterIncrementAction | CounterDecrementAction | CounterResetCounterAction
