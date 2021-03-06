import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> 스테이폴리오 </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="http://localhost:3000">AWESOME FOOD STORE WITH MENU</a>
        </h1>
        <p className={styles.description}>
          Find good restaurants on AWESOME FOOD STORE
        </p>
        <div className={styles.grid}>
          <a href="http://localhost:3000/component/Store" className={styles.card}>
            <h2>STORE &rarr;</h2>
            <p> If you choose one good restaurant, you can get information pop-up </p>
          </a>
          <a href="http://localhost:3000/component/About" className={styles.card}>
            <h2>ABOUT &rarr;</h2><br/>
            <p> AWESOME FOOD STORE ABOUT HYO814 </p>
          </a>
        </div>
      </main>
    </div>
  )
}


