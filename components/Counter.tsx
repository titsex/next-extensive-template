import { useTypedSelector } from '@hook/useTypedSelector'
import { useActions } from '@hook/useActions'
import React from 'react'

const Counter = () => {
    const { count } = useTypedSelector(state => state.counter)
    const { increment, decrement, resetCounter } = useActions()

    return (
        <div className="card">
            <h1 className="mt-3 text-center">Пример махинаций с числами</h1>

            <p className="text-center">Всё строго типизировано и в коде у Вас уже будут подсказки</p>
            <h4 className="text-center mb-4">Счетчик: {count}</h4>

            <div className="btn-group w-50 m-auto">
                <button onClick={increment} className="btn btn-outline-primary">
                    Инкремент
                </button>

                <button onClick={decrement} className="btn btn-outline-success">
                    Декремент
                </button>
            </div>

            <button onClick={resetCounter} disabled={count === 0} className="btn btn-danger mt-3 w-50 m-auto mb-4">
                Сбросить
            </button>
        </div>
    )
}

export default Counter
