import { NextThunkDispatch, wrapper } from '@store/index'
import { fetchPost } from '@store/actions-creators/post'
import Counter from '@component/Counter'
import Post from '@component/Post'
import { NextPage } from 'next'
import A from '@component/A'

const Home: NextPage = () => {
    return (
        <div className="position-absolute start-50 top-50 translate-middle w-75 h-75">
            <div className="card w-100 p-3">
                <h5 className="text-center mt-1">Шапка сделана в целях демонстрации динамической навигации</h5>
                <p className="text-center">
                    <span>
                        <i className="bi bi-exclamation-circle-fill text-warning fw-bold" /> Если Вы перешли на страницу{' '}
                        <A color="text-primary" route={{ title: 'поста', path: '/post' }} /> и нажали «удалить пост», а
                        вернувшись назад, обнаружили что пост цел, то советуем Вам посмотреть на файл главной страницы{' '}
                        <span className="text-info">«pages/index»</span>
                    </span>
                </p>
            </div>

            <div className="m-3" />

            <Counter />

            <div className="m-3" />

            <Post />

            <div className="pt-4" />
        </div>
    )
}

Home.getInitialProps = wrapper.getInitialPageProps(store => async () => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(fetchPost())
})

export default Home
