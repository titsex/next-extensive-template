import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Layout from '@component/Layout'
import React, { FC } from 'react'
import Script from 'next/script'
import { wrapper } from 'store'
import Head from 'next/head'

const WrappedApp: FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }) => {
    return (
        <>
            <Head>
                <title>Next Extensive Template</title>

                <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

                <meta charSet="UTF-8" />

                <meta name="msapplication-TileColor" content="#333333" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta name="description" content="The most extensive template for NEXT.js" />
                <meta name="keywords" content="NEXT.js, template, next-redux, redux-toolkit" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/*
                    @ru Предварительная загрузка bootstrap bundle.
                    @en Bootstrap bundle preloading.
                */}

                <link
                    rel="preload"
                    as="script"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                    crossOrigin="anonymous"
                />
            </Head>

            <SessionProvider session={session}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SessionProvider>

            {/*
              @ru Задаем глобальные стили для всего проекта.
              @en Setting global styles for the entire project.
            */}

            <style jsx global>{`
                body {
                    background: #4b4c4c;
                }

                /*
                    @ru Стиль ниже, помогает избежать отображение невидимого текста.
                    @en The style below helps to avoid displaying invisible text.
                */

                @font-face {
                    font-display: swap;
                }
            `}</style>

            {/*
                @ru Скрипт ниже подключает bootstrap для всего проекта. Если удалите данный скрипт,
                    то функционал для тех же dropdown придеться писать самому.
                    P.S: Закомментируйте его, если не используете компоненты требующие popper.js!

                @en The script below connects bootstrap for the entire project. If you delete this script,
                    then you will have to write the functionality for the same dropdown yourself.
                    P.S: Comment it out if you don't use components that require popper.js!
            */}

            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                crossOrigin="anonymous"
            />
        </>
    )
}

export default wrapper.withRedux(WrappedApp)
