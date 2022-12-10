import Head from 'next/head'
import Layout from '../components/Layout'
import Image from "next/image"
import ennews from "../libs/news.json"
import nenews from "../libs/nenews.json"
import { LeaderboardAd, ProductAd, RectangleAd, WideSkyscrapersAd } from '../components/Ads'
import { NewsCard, NewsCardWithImageTop } from '../components/News/Card'
import Link from 'next/link'
import horoscope from "../libs/zodiac.json"
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter();
  const news = router.locale == "en" ? ennews:nenews
  return (
    <Layout>
      <Head>
        <title>The Froglet Times</title>
        <meta name="description" content="This is online news portal app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <LeaderboardAd/>
    <div className='grid grid-cols-3 p-4'>
     <div className='md:border-r-2 border-r-gray-300 px-2 col-span-3 md:col-span-2'>
      <h3 className='text-2xl font-bold'>BREAKING NEWS</h3>
      <div className='grid grid-cols-3'>
        <div className='col-span-3 md:col-span-1'>
          {
            news.map((content,index) => (
              <div key={index} className='p-2'>
                <NewsCard 
                    title={content.title}
                    description={content.description}
                    author={content.author}
                    readTime={'9 mins'}
                    publishedAt={content.published_at}
                    />
                <hr/>
              </div>
            ))
          }
        </div>
        <div className='col-span-3 md:col-span-2'>
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
     <div className='p-2 col-span-3 md:col-span-1'>
      <h3 className='text-2xl font-bold'>{"TODAY'S HEADLINES"}</h3>
        <div className='grid grid-cols-3 md:grid-cols-1'>
          {
            news.map((content,index) => (
              <div key={index} className="col-span-3 sm:col-span-2 md:col-span-1 p-1">
                <NewsCard 
                    title={content.title}
                    image={content.image}
                    author={content.author}
                    readTime={'9 mins'}
                    imageSize={150}
                    size={"md:text-xl"}
                    publishedAt={content.published_at}
                    />
                <hr />
              </div>
            ))
          }
          <div className='col-span-3 md:col-span-1'>
            <div className='hidden md:block'><WideSkyscrapersAd/></div>
            <div className='block md:hidden'><RectangleAd/></div>
          </div>
          <br />
        </div>
     </div>
     <br />
  {/* ------------------------------- UpdatedNews ------------------------------ */}
     <div className='col-span-3 border-t-2 border-b-2 border-gray-300'>
      <div className='grid grid-cols-4 md:grid-cols-3 py-2 gap-2'>
        {
        [1,2,3].map((content,index) => (
          <div key={index} className='col-span-4 sm:col-span-2 md:col-span-1'>
              <div className='flex space-x-2 items-center'>
                <Image src={"/img.webp"} width={150} height={10} style={{objectFit:"cover"}} alt="sadsa"/>
              <div>
                <h3 className='text-lg md:text-xl font-bold font-title text-red-600 dark:text-red-400'>ATHENS UPDATED</h3>
                <p className='text-lg lg:text-xl w-40 hover:underline'><Link href={"/"}>CULTURAL SCENE PULSES ANEW</Link></p>
              </div>
              </div>
          </div>
        ))
      }
      </div>
     </div>
     {/* ------------------------------- Third ------------------------------ */}
     <div className='col-span-3 md:col-span-1 md:border-r-2 border-gray-300 pr-2'>
      {/* <WideSkyscrapersAd/> */}
      <div className='p-4'>
        <h3 className='text-2xl text-purple-700 dark:text-purple-400 pb-2 font-bold'>HOROSCOPE</h3>
        <div className='space-y-4'>
          {
          horoscope.en.map((zodiac) => (
            <div key={zodiac.name} className="flex space-x-2">
                <Image src={zodiac.svg_symbol} width={14} height={24} className="w-10 h-10 p-2 bg-purple-300 rounded-full " alt={zodiac.name}/>
              <div>
                <h4 className='text-xl font-bold'>{zodiac.name} <span className='text-sm'>({zodiac.date})</span></h4>
                <p className='pr-4 text-gray-600 dark:text-gray-300'>{zodiac.today}</p>
              </div>
            </div>
          ))
        }
        </div>
      </div>
     </div>
     <div className='col-span-3 md:col-span-2 mt-2 md:mt-0 md:p-2'>
      
      <div className='p-2'>
      <h3 className='text-2xl hover:underline'><Link href={"/international"}>INTERNATIONAL</Link></h3>
        <div className='grid grid-cols-3 gap-4 px-2 pb-2'>
            {
              news.map((content,index)=> (
                <div key={index} className='col-span-3 md:col-span-1'>
                  <NewsCardWithImageTop 
                    title={content.title}
                    description={content.description}
                    author={content.author}
                    image={content.image}
                    publishedAt={content.published_at}
                    imageSize={250}
                    />
                </div>
              ))
            }
          </div>
      </div>

     {/* ------------------------------- CLASSIFIED NEWS ------------------------------ */}
      <div className='p-2 border-2 border-red-500 dark:border-red-400'>
        <h3 className='text-2xl text-red-600 dark:text-red-400 hover:underline'><Link href={"/section/classified"}>CLASSIFIED</Link></h3>

        <div className='grid grid-cols-3 gap-4 px-2'>
            {
              news.map((content,index)=> (
                <div key={index} className='col-span-3 md:col-span-1'>
                  <NewsCardWithImageTop
                    title={content.title}
                    description={content.description}
                    author={content.author}
                    image={content.image}
                    publishedAt={content.published_at}
                    imageSize={250}
                    />
                </div>
              ))
            }
          </div>
      </div>
     </div>
      <div className='col-span-3'>
        <LeaderboardAd/>
      </div>
     {/* ------------------------------- All News ------------------------------ */}
     <div className='py-4 col-span-3'>
          <hr className='pt-0.5 border-gray-300' />
          <hr className='border-gray-300' />
          <div className='grid grid-cols-4 gap-4 pt-2'>
            
            {
              news.map((content,index)=> (
                <div key={index} className='col-span-4 md:col-span-2'>
                  <NewsCard 
                    title={content.title}
                    description={content.description}
                    image={content.image}
                    author={content.author}
                    publishedAt={content.published_at}
                    category={content.category}
                    />
                </div>
              ))
            }
            <div className='col-span-2'>
              
            <ProductAd/>
            </div>
          </div>
     </div>
     
     
    </div>

    </Layout>
  )
}
