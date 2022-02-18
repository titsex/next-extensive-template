import Navbar from '@component/Navbar'
import React from 'react'

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout
