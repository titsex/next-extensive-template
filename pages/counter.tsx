import Counter from '@component/Counter'
import { NextPage } from 'next'

const CounterPage: NextPage = () => {
    return (
        <div className="position-absolute start-50 top-50 translate-middle">
            <Counter />
        </div>
    )
}

export default CounterPage
