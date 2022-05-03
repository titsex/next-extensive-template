import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { routes } from '@routes/index'
import Link from 'next/link'
import React from 'react'
import { NextPage } from 'next'

const Navbar: NextPage = () => {
    const { data: session } = useSession()
    const router = useRouter()

    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                >
                    <i className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse mb-2" id="navbarContent">
                    <ul className="navbar-nav me-auto">
                        {routes.map(({ title, path }, index) => (
                            <li key={index} className="nav-item mx-auto">
                                <Link href={path}>
                                    <a className={router.pathname === path ? 'nav-link text-white' : 'nav-link'}>
                                        <span>{title}</span>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="d-flex justify-content-center">
                        {session && (
                            <button className="nav-item btn btn-outline-danger" onClick={() => signOut()}>
                                Выход
                            </button>
                        )}

                        {!session && (
                            <button className="nav-item btn btn-outline-success" onClick={() => signIn()}>
                                Авторизация
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.getInitialProps = async ({ req }) => {
    let userAgent

    if (req) userAgent = req.headers['user-agent']
    else userAgent = navigator.userAgent

    const isMobile = Boolean(userAgent?.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i))
    return { isMobile }
}

export default Navbar
