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
      <div className='grid grid-cols-3'>
        <div>
          {
            news.map((content,index) => (
              <div key={index} className='p-2'>
                <h3 className='text-2xl font-bold font-title hover:underline hover:cursor-pointer'>{content.title}</h3>
                <p className='text-gray-600 line-clamp-3'>{content.description}</p>
                <p className='text-sm text-gray-500'>9 MIN READ • By {content.author}</p>
                <hr/>
              </div>
            ))
          }
        </div>
        <div className='col-span-2'>
          <Image src={"/img.webp"} width={800} height={200} alt="sadsa"/>
          <p className='font-bold'>This image content domestic violence happening in our society right now.</p>
          <hr/>
          <div className='py-2'>
            <h3 className='text-2xl font-bold font-title'>The Chinese Dream, Denied: Harsh Measures Shake Beijing’s Social Contract</h3>
            <p className='text-gray-500 line-clamp-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, necessitatibus sint, nobis fuga voluptates placeat rerum exercitationem voluptate dignissimos magnam sapiente sequi! Itaque ipsam repellat, asperiores possimus provident pariatur alias!</p>
            <p className='text-sm text-gray-500'>9 MIN READ • By Simon Thapa</p>
          </div>
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
     <br />
     <div className='col-span-3 flex space-x-4 p-2 border-t-2 border-b-2 border-gray-400'>
      {
        [1,2,3].map((content,index) => (
          <div key={index} className='flex space-x-4'>
              <div>
                <h3 className='text-xl font-bold font-title text-red-600'>ATHENS UPDATED</h3>
                <p className='text-xl w-40'>CULTURAL SCENE PULSES ANEW</p>
                <button>READ NEWS</button>
              </div>
              <Image src={"/img.webp"} width={200} height={10} style={{objectFit:"cover"}} alt="sadsa"/>
          </div>
        ))
      }
     </div>
     <div className='py-4 col-span-3'>
          <div className='grid grid-cols-4 gap-4'>
            {
              [1,2,3,4].map((news,index)=> (
                <div key={index} className='col-span-2'>
                  <div className='flex space-x-3'>
                      <Image src={"/img.webp"} width={300} height={10} style={{objectFit:"cover"}} alt="sadsa"/>
                        <div className='py-2'>
                          <h3 className='text-2xl font-bold font-title'>The Chinese Dream, Denied: Harsh Measures Shake Beijing’s Social Contract</h3>
                          <p className='text-gray-500 line-clamp-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, necessitatibus sint, nobis fuga voluptates placeat rerum exercitationem voluptate dignissimos magnam sapiente sequi! Itaque ipsam repellat, asperiores possimus provident pariatur alias!</p>
                          <p className='text-sm text-gray-500'>9 MIN READ • By Simon Thapa</p>
                        </div>
                    </div>
                </div>
              ))
            }
          </div>
     </div>
     
     
    </div>

    </Layout>
  )
}
