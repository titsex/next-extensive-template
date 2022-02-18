import Counter from '@component/Counter'
import { NextPage } from 'next'
import React from 'react'

const CounterPage: NextPage = () => {
    return (
        <div className="position-absolute start-50 top-50 translate-middle">
            <Counter />
        </div>
    )
}

export default CounterPage
