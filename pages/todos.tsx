import React from 'react'
import Todos from '@component/Todos'

const UsersPage = () => {
    return (
        <div className="position-absolute start-50 top-50 translate-middle h-75">
            <Todos />

            <div className="pt-4" />
        </div>
    )
}

export default UsersPage
