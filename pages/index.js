import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <title>Mass Data</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="the-body">
                <div>
                    <h3>PC전용 페이지입니다!</h3>
                    <ul className="main-list">
                        <li>
                            <Link href="/paging">
                                <a>Paging</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/scrolling">
                                <a>Scrolling</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
