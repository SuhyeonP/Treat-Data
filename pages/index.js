import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Mass Data</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="the-body">
                <ul>
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
                  <li>
                    will be Gikal
                  </li>
                  <li>
                    will be WebGame
                  </li>
                </ul>
            </div>
        </div>
    )
}
