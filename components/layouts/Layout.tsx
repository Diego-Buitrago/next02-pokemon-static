// React
import { FC } from "react"
// next
import Head from "next/head"

import { Navbar } from '../ui/Navbar';

interface Props {
    title?: string;
    children?: JSX.Element | JSX.Element[];
}

const origen = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC <Props> = ({ title, children }) => {

    return (
        <>
            <Head>
                <title>{ title || 'Pokémon App' }</title>
                <meta name='author' content="Diego Buitrago" />
                <meta name='description' content={`Información sobre el pokemon ${title}`} />
                <meta name='keywords' content={`${title}, pokemon, pokedex`} />
                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origen}/img/banner.png`} />
            </Head>
            {/* Navbar */}
            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                { children }
            </main>
        </>
    )
}
