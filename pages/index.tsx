import Head from 'next/head'
import Layout from '../components/Layout'
import Image from "next/image"
import news from "../libs/news.json"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>The Froglet Times</title>
        <meta name="description" content="This is online news portal app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <br />
    <div className='grid grid-cols-3 p-4'>
     <div className='border-r-2 border-r-gray-500 px-2 col-span-2'>
      <h3 className='text-2xl font-bold'>BREAKING NEWS</h3>
      <div className='grid grid-cols-3 px-1'>
        <div>
          <h3 className='text-2xl font-bold'>The Chinese Dream, Denied: Harsh Measures Shake Beijing’s Social Contract</h3>
          <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nesciunt voluptatibus eos quam sunt facere...</p>
          <p>9 MIN READ</p>
          <hr/>
          <h3 className='text-2xl font-bold'>The Chinese Dream, Denied: Harsh Measures Shake Beijing’s Social Contract</h3>
          <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nesciunt voluptatibus eos quam sunt facere...</p>
          <p>9 MIN READ</p>
          <hr/>
          <h3 className='text-2xl font-bold'>The Chinese Dream, Denied: Harsh Measures Shake Beijing’s Social Contract</h3>
          <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nesciunt voluptatibus eos quam sunt facere...</p>
          <p>9 MIN READ</p>
        </div>
        <div className='col-span-2'>
          <Image src={"/img.webp"} width={800} height={200} alt="sadsa"/>
          <p className='font-bold'>This image content domestic violence happening in our society right now.</p>
          <hr/>
          <h3 className='text-2xl font-bold'>The Chinese Dream, Denied: Harsh Measures Shake Beijing’s Social Contract</h3>
          <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nesciunt voluptatibus eos quam sunt facere...</p>
          <p>9 MIN READ</p>
        </div>
      </div>
        <hr />
     </div>
     <div className='p-2'>
      <h3 className='text-2xl font-bold'>{"TODAY'S HEADLINES"}</h3>
        <div>
          {
            news.map((news,index) => (
              <div key={index}>
                <div className='flex text-left mb-2 space-x-2'>
                  <Image src={news.image} width={150} height={10} style={{objectFit:"cover"}} alt="sadsa"/>
                  <div>
                    <h3 className='text-xl font-bold'>{news.title}</h3>
                    <p>9 MIN READ</p>
                  </div>
                </div>
                <hr />
              </div>
            ))
          }
          <br />
        </div>
     </div>
     <div className='bg-green-200 col-span-3'>
      asdsaasdasd
     </div>
     <div className='bg-orange-200 col-span-1'>
      asdsaasdasd
     </div>
     <div className='bg-blue-200 col-span-1'>
      asdsaasdasd
     </div>
     <div className='bg-pink-200 col-span-1'>
      asdsaasdasd
     </div>
     
     
    </div>

    </Layout>
  )
}
