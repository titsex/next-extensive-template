import { useTypedSelector } from '@hook/useTypedSelector'
import { fetchPost } from '@store/actions-creators/post'
import { useAppDispatch } from '@hook/useAppDispatch'
import { useActions } from '@hook/useActions'
import React from 'react'

const Posts = () => {
    const { error, post } = useTypedSelector(state => state.post)
    const { resetPosts } = useActions()

    const dispatch = useAppDispatch()

    return (
        <div className="card">
            <div className="m-5">
                <h3 className="text-center">Пример махинаций с асинхронными запросами</h3>

                <p className="text-center">Всё строго типизировано и в коде у Вас уже будут подсказки</p>

                {Object.keys(post).length ? (
                    <div className="mb-4 w-100 m-auto">
                        <div className="list-group m-1 m-auto">
                            <div className="list-group-item">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{post.title}</h5>
                                </div>
                                <p className="mb-1">{post.body}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h3 className="text-center mb-4">Список постов пуст</h3>
                )}

                <div className="btn-group w-100">
                    <button
                        onClick={async () => await dispatch(await fetchPost())}
                        disabled={!!Object.keys(post).length}
                        className="btn btn-outline-success"
                    >
                        Получить пост
                    </button>

                    <button
                        onClick={resetPosts}
                        disabled={!Object.keys(post).length}
                        className="btn btn-outline-danger"
                    >
                        Удалить пост
                    </button>
                </div>

                {error.length !== 0 && (
                    <div className="w-100">
                        <hr />
                        <h3 className="text-center text-danger">{error}</h3>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Posts
