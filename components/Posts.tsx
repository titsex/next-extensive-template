import { fetchPosts } from '@store/actions-creators/post'
import { useTypedSelector } from '@hook/useTypedSelector'
import { useAppDispatch } from '@hook/useAppDispatch'
import { useActions } from '@hook/useActions'
import React from 'react'

const Posts = () => {
    const { error, post } = useTypedSelector(state => state.post)
    const { resetPosts } = useActions()

    const dispatch = useAppDispatch()

    return (
        <div className="card">
            <h3 className="mt-3 text-center">Пример махинаций с асинхронными запросами</h3>

            <p className="text-center">Всё строго типизировано и в коде у Вас уже будут подсказки</p>

            {Object.keys(post).length ? (
                <div className="mb-4">
                    <div className="list-group w-50 m-1 m-auto">
                        <div className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{post.title}</h5>
                            </div>
                            <p className="mb-1">{post.body}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <h3 className="m-auto mb-4">Список постов пуст</h3>
            )}

            <div className="btn-group w-50 m-auto mb-4">
                <button
                    onClick={async () => await dispatch(await fetchPosts())}
                    disabled={!!Object.keys(post).length}
                    className="btn btn-outline-success"
                >
                    Получить пост
                </button>

                <button onClick={resetPosts} disabled={!Object.keys(post).length} className="btn btn-outline-danger">
                    Удалить пост
                </button>
            </div>

            {error.length !== 0 && (
                <div className="w-100">
                    <hr />
                    <h3 className="text-center text-danger mb-4">{error}</h3>
                </div>
            )}
        </div>
    )
}

export default Posts
