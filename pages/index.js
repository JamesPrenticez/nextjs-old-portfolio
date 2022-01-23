import Head from 'next/head'
import List from '../components/List'

// import Footer from '../components/Footer'
// import Main from '../components/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>James' Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Main />
      <Footer/> */}
      <List />

    </>
  )
}