import { useTypedSelector } from '@hook/useTypedSelector'
import { fetchPost } from '@store/actions-creators/post'
import { useTypedActions } from '@hook/useTypedActions'
import { useAppDispatch } from '@hook/useAppDispatch'
import React from 'react'

const Post = () => {
    const { error, post, isHave } = useTypedSelector(state => state.post)
    const { resetPosts } = useTypedActions(actions => actions.post)

    const dispatch = useAppDispatch()

    return (
        <div className="card">
            <div className="m-5">
                <h3 className="text-center">Пример махинаций с асинхронными запросами</h3>

                <p className="text-center">Всё строго типизировано и в коде у Вас уже будут подсказки</p>

                {isHave ? (
                    <div className="mb-4 w-100">
                        <div className="list-group">
                            <div className="list-group-item">
                                <h5 className="mb-1 text-center">{post.title}</h5>
                                <p className="mb-1 text-center">{post.body}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h3 className="text-center mb-4">Список постов пуст</h3>
                )}

                <div className="btn-group w-100">
                    <button
                        onClick={async () => await dispatch(fetchPost())}
                        disabled={isHave}
                        className="btn btn-outline-success"
                    >
                        Получить пост
                    </button>

                    <button onClick={() => resetPosts()} disabled={!isHave} className="btn btn-outline-danger">
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

export default Post
