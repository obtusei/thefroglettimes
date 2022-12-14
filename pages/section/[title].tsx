import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { LeaderboardAd, LeaderboardAd2, RectangleAd, WideSkyscrapersAd } from '../../components/Ads'
import Layout from '../../components/Layout'
import { ModernNewsCard, NewsCard, NewsCardWithImageTop } from '../../components/News/Card'
import { MONTHS } from '../../libs/filterStuff'
// import news from "../../libs/news.json"
import regions from '../../libs/regions'
import { GetByCategory } from '../../utils/newsapi'
type Props = {}

function capitalizeFirstLetter(str:string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function Section({}: Props) {
  const router = useRouter()
  const title = capitalizeFirstLetter(String(router.query.title))
  const date = new Date()
  const [year,setYear] = useState(String(date.getFullYear()))
  const [month,setMonth] = useState(MONTHS[date.getMonth()])
  const [day,setDay] = useState(date.getDate())
  const [region,setRegion] = useState("General")
  const {t} = useTranslation("common")
  const {news} = GetByCategory({cat:title,take:4,language:router.locale?.toUpperCase()})
  const {news:allNews} = GetByCategory({cat:title,take:10,language:router.locale?.toUpperCase()})
  const time = (date:string) => {return new Date(date).toLocaleString()}
  return (
    <Layout>
      <LeaderboardAd2/>
      <div className='p-5'>
        <h2 className='text-4xl'>{title}</h2>
        <hr />
        <div className='grid grid-cols-3 py-2'>
          <div className='col-span-3 md:col-span-2 md:border-r-2 border-black'>
            <div className='grid grid-cols-1 gap-2 px-2'>
              <NewsCardWithImageTop
                id='"addas'
                title='Something goes here pani at the bottom of the image'
                description='Lorem Ipsum'
                image='/img.webp'
                publishedAt='time'
                />
              <div className='grid grid-cols-4 gap-3'>
              {
              news ? news?.map((content:any,index:any)=> (
                <div key={index} className='col-span-4 md:col-span-2'>
                  <ModernNewsCard 
                    id={content.title}
                    title={content.title}
                    description={content.content}
                    author={content.author}
                    image={content.imageUrl}
                    publishedAt={content.published_at}
                    />
                </div>
              )):<></>
            }
              </div>
            </div>
          </div>
          <div className='col-span-3 md:col-span-1 p-2'>
            <div className='grid grid-cols-1 gap-2'>
              {
              news ? news.map((content:any,index:any)=> (
                <div key={index} className='col-span-3 md:col-span-1'>
                  <ModernNewsCard
                    id={content.title} 
                    title={content.title}
                    description={content.description}
                    author={content.author}
                    image={content.imageUrl}
                    publishedAt={content.published_at}
                    />
                </div>
              )):<></>
            }
            <RectangleAd/>
            </div>
          </div>
        </div>
        <hr />
        {/* Latest News */}
        <div>
            <h2 className='text-3xl py-2 font-bold'>{t("latestNews")}</h2>
            <div className="flex flex-col-reverse md:flex-row space-y-3 md:space-y-0 justify-between py-4">
              <div className='p-2 space-x-3'>
                <select value={region} onChange={(e) => setRegion(e.target.value)}>
                  {
                    regions.map((item) => (
                      <option value={item.title} key={item.title}>{item.title}</option>
                    ))
                  }
                </select>

                <select title='' value={year} onChange={(e) => setYear(e.target.value)}>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                </select>
                <select value={month} onChange={(e) => setMonth(e.target.value)}>
                  {
                    MONTHS.map((month) => (
                      <option value={month} key={month}>{month}</option>
                    ))
                  }
                </select>
                <select value={day} onChange={(e) => setDay(Number(e.target.value))}>
                  {
                    [1,2,3,4,5,6,7,8,,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map((item) => (
                      <option value={item} key={item}>{item}</option>
                    ))
                  }
                </select>
                
                
              </div>
              <div>
                <input type="search" name="" className='search' id="" placeholder='Search...' /><button className='btn'>Search</button>
              </div>
            </div>

          <div className='grid grid-cols-4'>
            <div className='col-span-4 md:col-span-3'>
              {
                allNews ? allNews.map((content:any,index:number) => (
                  <div key={index} className='flex flex-row justify-between p-2 items-center space-x-5'>
                    <div className='w-40'>{time(content.published_at)}</div>
                    <NewsCard 
                          id={content.id}
                          title={content.title}
                          description={content.content}
                          image={content.imageUrl}
                          publishedAt={"content.published_at"}
                      
                          />
                    </div>
                )):<></>
              }
            </div>
            <div className='hidden md:block'>
              <RectangleAd/>
            </div>
          </div>
            <div className='block md:hidden'>
              <LeaderboardAd/>
            </div>

        </div>
      </div>
    </Layout>
  )
}

export default Section