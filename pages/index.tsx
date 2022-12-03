import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>The Froglet Times</title>
        <meta name="description" content="This is online news portal app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <br />
    <div className='grid grid-cols-3 h-screen'>
     <div className='bg-red-400 col-span-2'>
      BREAKING NEWS
     </div>
     <div className='bg-yellow-200'>
      Highlights
     </div>
     <div className='bg-green-200 col-span-3'>
      asdsaasdasd
     </div>
     
     
    </div>

    </Layout>
  )
}
