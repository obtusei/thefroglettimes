import Head from 'next/head'
import Layout from '../components/Layout'
import Image from "next/image"
import ennews from "../libs/news.json"
import nenews from "../libs/nenews.json"
import { LeaderboardAd, ProductAd, RectangleAd, WideSkyscrapersAd } from '../components/Ads'
import { MainNewsShimmer, ModernNewsCard, ModernNewsCardShimmer, NewsCard, NewsCardShimmer, NewsCardWithImageTop, NewsCardWithImageTopShimmer } from '../components/News/Card'
import Link from 'next/link'
import horoscope from "../libs/zodiac.json"
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { MainPageNews } from '../utils/newsapi'
import { useEffect } from 'react'
export default function Home() {
  const router = useRouter();
  const news = router.locale == "en" ? ennews:nenews
  const {t} = useTranslation("common")
  const {news:breakingNews} = MainPageNews({tag:"breaking",take:4,language:router.locale?.toUpperCase(),region:String(router.query.region).toUpperCase()})
  const {news:headlines} = MainPageNews({tag:"headlines",take:4,language:router.locale?.toUpperCase(),region:String(router.query.region).toUpperCase()})
  const {news:mainNews} = MainPageNews({tag:"breaking",take:1,language:router.locale?.toUpperCase(),region:String(router.query.region).toUpperCase()})
  const {news:international} = MainPageNews({tag:"international",take:6,language:router.locale?.toUpperCase(),region:"INTERNATIONAL"})
  const {news:classified} = MainPageNews({tag:"classified",take:3,language:router.locale?.toUpperCase(),region:String(router.query.region).toUpperCase()})
  const {news:general} = MainPageNews({tag:"breaking",take:6,language:router.locale?.toUpperCase()})
  const shimmer = (number:number,c:boolean,i:boolean) => [...Array(number)].map((card,index) => (
              <NewsCardShimmer key={index} withContent={c} withImage={i}/>
            ))
  
  return (
    <Layout>
      <Head>
        <title>The Froglet Times</title>
        <meta name="description" content="This is online news portal app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <LeaderboardAd/>
    <div className='grid grid-cols-3 mt-4 p-4'>
     <div className='md:border-r-2 border-r-gray-300 px-2 col-span-3 md:col-span-2'>
      <h3 className={`text-2xl font-bold ${router.locale == "en" ? "":"font-devhead"}`}>{t("breakingNews")}</h3>
      <div className='grid grid-cols-3'>
        <div className='col-span-3 md:col-span-1 md:border-b-2 md:border-r-2 md:border-gray-300 md:mr-2 h-full'>
          {
            breakingNews ? breakingNews.map((content:any,index:any) => (
              <div key={index} className='p-2'>
                <NewsCard 
                    id={content.id}
                    title={content.title}
                    description={content.content}
                    author={""}
                    readTime={`${content.reading_time} mins`}
                    publishedAt={new Date(content.publishedAt).toDateString()}
                    />
                {
                  breakingNews.length != index+1 && <hr/>
                }
              </div>
            )):
            shimmer(3,true,false)
          }
        </div>
        
        {
          mainNews ? 
          <div className='col-span-3 md:col-span-2'>
          <Image src={mainNews[0].imageUrl} width={800} height={200} alt="sadsa"/>
          {/* <p className='font-bold'>{main.title}</p> */}
          <hr/>
          <div className='py-2'>
            <h3 className='text-2xl font-bold font-title'>{mainNews[0].title}</h3>
            <p className='text-gray-500 line-clamp-6'>{mainNews[0].content}</p>
            <p className='text-sm text-gray-500'>{mainNews[0].readingTime} mins</p>
          </div>
        </div>:
        <MainNewsShimmer/>
        }
        <div className='col-span-3 py-2'>
          <LeaderboardAd m/>
        </div>
      </div>
     </div>
     <div className='p-2 col-span-3 md:col-span-1'>
      <h3 className={`text-2xl font-bold ${router.locale == "en" ? "":"font-devhead"}`}>{t("todayHeadline")}</h3>
        <div className='grid grid-cols-3 md:grid-cols-1'>
          {
            headlines ? headlines.map((content:any,index:number) => (
              <div key={index} className="col-span-3 sm:col-span-2 md:col-span-1 p-1">
                <NewsCard 
                    id={content.id}
                    title={content.title}
                    image={content.imageUrl}
                    author={content.author}
                    readTime={'9 mins'}
                    imageSize={150}
                    size={"md:text-xl"}
                    publishedAt={content.published_at}
                    />
                <hr />
              </div>
            )):shimmer(4,false,true)
          }
          <div className='col-span-3 md:col-span-1'>
            <div className='hidden md:block'><WideSkyscrapersAd/></div>
            <div className='block md:hidden'><RectangleAd/></div>
          </div>
          <br />
        </div>
     </div>
  {/* ------------------------------- UpdatedNews ------------------------------ */}
     {
      router.locale == "en" &&
      <div className='col-span-3 border-t-2 border-b-2 border-gray-300 h-full'>
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
     }
     {/* ------------------------------- Third ------------------------------ */}
     <div className='col-span-3 md:col-span-1 md:border-r-2 border-gray-300 pr-2'>
      {/* <WideSkyscrapersAd/> */}
      <div className='p-4 overflow-hidden'>
        <h3 className={`text-2xl text-purple-700 dark:text-purple-400 pb-2 font-bold ${router.locale == "ne" && "font-devhead"}`}>{t("horoscope")}</h3>
        <div className='flex overflow-scroll flex-row md:flex-col md:space-y-4'>
          {
          router.locale == "en" ? horoscope.en.map((zodiac) => (
            <div key={zodiac.name} className="block">
              <div className="flex space-x-2  w-80">
                <Image src={zodiac.svg_symbol} width={14} height={24} className="w-10 h-10 p-2 bg-purple-300 rounded-full " alt={zodiac.name}/>
              <div>
                <h4 className='text-xl font-bold'>{zodiac.name} <span className='text-sm'>({zodiac.date})</span></h4>
                <p className='pr-4 text-gray-600 dark:text-gray-300'>{zodiac.today}</p>
              </div>
            </div>
            </div>
          )):
          horoscope.ne.map((zodiac) => (
            <div key={zodiac.name} className="block">
              <div className="flex space-x-2  w-80">
                <Image src={zodiac.svg_symbol} width={14} height={24} className="w-10 h-10 p-2 bg-red-50 rounded-full " alt={zodiac.name}/>
              <div>
                <h4 className='text-xl font-bold'>{zodiac.name} <span className='text-sm'>({zodiac.date})</span></h4>
                <p className='pr-4 text-gray-600 dark:text-gray-300'>{zodiac.today}</p>
              </div>
            </div>
            </div>
          ))
        }
        </div>
      </div>
     </div>
     <div className='col-span-3 md:col-span-2 mt-2 md:mt-0 md:p-2'>
      
      <div className='p-2'>
      <h3 className={`text-2xl hover:underline ${router.locale == "ne" && "font-devhead"}`}><Link href={"/international"}>{t("international")}</Link></h3>
        <div className='grid grid-cols-3 gap-4 px-2 pb-2'>
            {
              international ? international.map((content:any,index:number)=> (
                <div key={index} className='col-span-3 md:col-span-1'>
                  <NewsCardWithImageTop 
                    id={content.id}
                    title={content.title}
                    description={content.content}
                    author={content.author}
                    image={content.imageUrl}
                    publishedAt={content.published_at}
                    imageSize={250}
                    />
                </div>
              )):
              [1,2,3,4,5,6].map((ard,index) => (
                <NewsCardWithImageTopShimmer key={index} withContent withImage/>
              ))
            }
          </div>
      </div>

     {/* ------------------------------- CLASSIFIED NEWS ------------------------------ */}
      <div className='p-2 border-2 border-red-500 dark:border-red-400'>
        <h3 className={`text-2xl text-red-600 dark:text-red-400 hover:underline ${router.locale == "ne" && "font-devhead"}`}><Link href={"/section/classified"}>{t("classified")}</Link></h3>

        <div className='grid grid-cols-3 gap-4 px-2'>
            {
              classified ? classified.map((content:any,index:number)=> (
                <div key={index} className='col-span-3 md:col-span-1'>
                  <NewsCardWithImageTop
                    id={content.id}
                    title={content.title}
                    description={content.content}
                    author={content.author}
                    image={content.imageUrl}
                    publishedAt={content.published_at}
                    imageSize={250}
                    />
                </div>
              )):
              [1,2,3].map((ard,index) => (
                <NewsCardWithImageTopShimmer key={index} withContent withImage/>
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
              general ? general.map((content:any,index:any)=> (
                <div key={index} className='col-span-4 md:col-span-2'>
                  <ModernNewsCard 
                    id={content.id}
                    title={content.title}
                    description={content.content}
                    image={content.imageUrl}
                    author={content.author}
                    publishedAt={content.published_at}
                    category={content.category}
                    />
                </div>
              )):
              
                  [1,2,3,4,5,6,7,8,9].map((card,index) => (
                    <div key={index} className='col-span-4 md:col-span-2'>
                    <ModernNewsCardShimmer withContent withImage/>
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
