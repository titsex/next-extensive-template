import Navbar from '@component/Navbar'
import React from 'react'

const Layout = ({ children }: { children: JSX.Element }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout
