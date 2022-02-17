import { fetchPosts } from '@store/actions-creators/post'
import { NextThunkDispatch, wrapper } from '@store/index'
import Counter from '@component/Counter'
import Posts from '@component/Posts'
import { NextPage } from 'next'

const Home: NextPage = () => {
    return (
        <div className="position-absolute start-50 top-50 translate-middle w-75">
            <Counter />

            <div className="m-3" />

            <Posts />
        </div>
    )
}

Home.getInitialProps = wrapper.getInitialPageProps(store => async () => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchPosts())
})

export default Home
