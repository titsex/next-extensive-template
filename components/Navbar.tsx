import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { routes } from '@routes/index'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const { data: session } = useSession()
    const router = useRouter()

    return (
        <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="ms-2 collapse navbar-collapse">
                    <ul className="navbar-nav mb-2 m-auto mb-lg-0">
                        {routes.map(({ title, path }, index) => (
                            <li key={index} className="nav-item">
                                <Link href={path}>
                                    <a className={router.pathname === path ? 'nav-link text-white' : 'nav-link'}>
                                        {title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {session && (
                        <button className="btn btn-outline-danger" onClick={() => signOut()}>
                            Выход
                        </button>
                    )}

                    {!session && (
                        <button className="btn btn-outline-success" onClick={() => signIn()}>
                            Авторизация
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
