import React, { ChangeEvent, useTransition } from 'react'
import { useAppDispatch } from '@hook/useAppDispatch'
import { useTypedSelector } from '@hook/useTypedSelector'
import { useTypedActions } from '@hook/useTypedActions'
import { fetchTodos } from '@store/actions-creators/todo'

const Todos = () => {
    const todosState = useTypedSelector(state => state.todo)
    const { reset, toggleTodo, search } = useTypedActions(actions => actions.todo)
    const [isPending, startTransition] = useTransition()

    const dispatch = useAppDispatch()

    const handleToggleTodo = async (event: ChangeEvent<HTMLInputElement>, id: number) =>
        await dispatch(toggleTodo({ id, checked: event.target.checked }))

    const handleSearchTodo = async (event: ChangeEvent<HTMLInputElement>) =>
        startTransition(() => {
            dispatch(search(event.target.value))
        })

    return (
        <div className="card mb-3">
            <div className="m-5">
                <h3 className="text-center">Пример махинаций с хуком useTransition</h3>

                <p className="text-center">Всё строго типизировано и в коде у Вас уже будут подсказки</p>

                <div className="btn-group w-100 mb-3">
                    <button
                        onClick={async () => await dispatch(fetchTodos())}
                        disabled={!(todosState.todos.length === 0)}
                        className="btn btn-outline-success"
                    >
                        Получить тудушки
                    </button>

                    <button
                        onClick={() => reset()}
                        disabled={!todosState.todos.length}
                        className="btn btn-outline-danger"
                    >
                        Удалить тудушки
                    </button>
                </div>

                {todosState.todos.length !== 0 ? (
                    <div className="w-100">
                        <input
                            onChange={handleSearchTodo}
                            placeholder="Поиск тудушки"
                            className="bi bi-search input-group-text mb-3 w-100"
                        />

                        {isPending && <h4 className="mb-3 text-center">Идет поиск тудушек..</h4>}

                        <div className="list-group">
                            {todosState.filteredTodos.length !== 0 &&
                                todosState.filteredTodos.map(({ id, title, completed }, index) => (
                                    <div key={index} className="list-group-item">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={completed}
                                                onChange={async event => await handleToggleTodo(event, id)}
                                            />
                                            {title}
                                        </div>
                                    </div>
                                ))}

                            {!todosState.filteredTodos.length &&
                                todosState.todos.map(({ id, title, completed }, index) => (
                                    <div key={index} className="list-group-item">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={completed}
                                                onChange={async event => await handleToggleTodo(event, id)}
                                            />
                                            {title}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ) : (
                    <h3 className="text-center">
                        {todosState.isPending ? 'Получаем тудушки..' : 'Тудушки не найдены'}
                    </h3>
                )}

                {todosState.error.length !== 0 && (
                    <div className="w-100">
                        <hr />
                        <h3 className="text-center text-danger">{todosState.error}</h3>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Todos
