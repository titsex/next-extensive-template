import { NextThunkDispatch, wrapper } from '@store/index'
import { fetchPost } from '@store/actions-creators/post'
import Warning from '@component/Warning'
import Counter from '@component/Counter'
import Post from '@component/Post'
import { NextPage } from 'next'

const Home: NextPage = () => {
    return (
        <div className="position-absolute start-50 top-50 translate-middle w-75 h-75">
            <Warning />
            <Counter />
            <Post />

            <div className="pt-4" />
        </div>
    )
}

/*
    @ru Функция ниже подгружает пост при каждом переходе на главную страницу.
    @en The function below loads the post every time you go to the main page.
 */

Home.getInitialProps = wrapper.getInitialPageProps(store => async () => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(fetchPost())
})

export default Home
