import { IColors } from '@type/components/A.type'
import { IRoutes } from '@type/routes.type'
import Link from 'next/link'
import React from 'react'

const A = ({ route, color }: { route: IRoutes; color: IColors }) => {
    return (
        <Link href={route.path}>
            <a className={`${color} text-decoration-none`}>{route.title}</a>
        </Link>
    )
}

export default A
