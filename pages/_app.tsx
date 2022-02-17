import 'bootstrap-icons/font/bootstrap-icons.css'
import 'highlight.js/styles/atom-one-dark.css'
import 'bootstrap/dist/css/bootstrap.css'

import type { AppProps } from 'next/app'
import Script from 'next/script'
import { wrapper } from 'store'
import Head from 'next/head'
import { FC } from 'react'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Best Next Template</title>
            </Head>

            <Component {...pageProps} />

            {/*
              @ru Задаем глобальные стили для всего проекта.
              @en Setting global styles for the entire project.
            */}

            <style jsx global>{`
                body {
                    background: #4b4c4c;
                }
            `}</style>

            {/*
                @ru Скрипт ниже подключает bootstrap для всего проекта. Если удалите данный скрипт,
                    то функционал для тех же dropdown придеться писать самому.

                @en The script below connects bootstrap for the entire project. If you delete this script,
                    then you will have to write the functionality for the same dropdown yourself.
            */}

            <Script
                defer
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                crossOrigin="anonymous"
            />
        </>
    )
}

export default wrapper.withRedux(WrappedApp)
