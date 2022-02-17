import { useTypedSelector } from '@hook/useTypedSelector'
import { useTypedActions } from '@hook/useTypedActions'
import React from 'react'

const Counter = () => {
    const { count } = useTypedSelector(state => state.counter)
    const { increment, decrement, resetCounter } = useTypedActions(actions => actions.counter)

    return (
        <div className="card">
            <div className="m-5">
                <h1 className="text-center">Пример махинаций с числами</h1>

                <p className="text-center">Всё строго типизировано и в коде у Вас уже будут подсказки</p>
                <h4 className="text-center">Счетчик: {count}</h4>

                <div className="btn-group w-100 mt-3">
                    <button onClick={increment} className="btn btn-outline-primary">
                        Инкремент
                    </button>

                    <button onClick={decrement} className="btn btn-outline-success">
                        Декремент
                    </button>
                </div>

                <button onClick={resetCounter} disabled={count === 0} className="btn btn-danger mt-3 w-100">
                    Сбросить
                </button>
            </div>
        </div>
    )
}

export default Counter
