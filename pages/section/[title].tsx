import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { LeaderboardAd, LeaderboardAd2, RectangleAd, WideSkyscrapersAd } from '../../components/Ads'
import Layout from '../../components/Layout'
import { MainNewsShimmer, ModernNewsCard, ModernNewsCardShimmer, NewsCard, NewsCardWithImageTop } from '../../components/News/Card'
import { MONTHS } from '../../libs/filterStuff'
// import news from "../../libs/news.json"
import regions from '../../libs/regions'
import { ConvertTime } from '../../libs/timeConvert'
import { GetByCategory, SearchAllNews } from '../../utils/newsapi'
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
  const {news:allNews,isLoading:allNewsLoading} = GetByCategory({cat:title,take:10,language:router.locale?.toUpperCase()})
  const {news:mainNews,isLoading:mainLoading} = GetByCategory({cat:title,take:1,language:router.locale?.toUpperCase()})
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
              {
                mainNews  && mainNews.length > 0 ?
                <NewsCardWithImageTop
                id={mainNews[0].id}
                title={mainNews[0].title}
                description={mainNews[0].content}
                image={mainNews[0].imageUrl}
                publishedAt={mainNews[0].pib}
                /> :  mainLoading ? 
                <MainNewsShimmer/>:<></>
              }
              <div className='grid grid-cols-4 gap-3'>
              {
              news && news.length > 0 ? news?.map((content:any,index:any)=> (
                <div key={index} className='col-span-4 md:col-span-2'>
                  <ModernNewsCard 
                    id={content.id}
                    title={content.title}
                    description={content.content}
                    author={content.author}
                    image={content.imageUrl}
                    publishedAt={content.publishedAt}
                    />
                </div>
              )): !allNewsLoading ? <>No News</>:
              [...Array(4)].map((card,index) => (
                <div key={index} className='col-span-4 md:col-span-2'>
                  <ModernNewsCardShimmer withContent withImage/>
                </div>
              ))
              
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
                    id={content.id} 
                    title={content.title}
                    description={content.content}
                    image={content.imageUrl}
                    publishedAt={content.publishedAt}
                    />
                </div>
              )):
              [...Array(4)].map((card,index) => (
                <div key={index} className='col-span-4 md:col-span-2'>
                  <ModernNewsCardShimmer withContent withImage/>
                </div>
              ))
            }
            <div className="mb-52">
            <RectangleAd/>
            </div>
            </div>
          </div>
        </div>
        <hr />
        {/* Latest News */}
        
      </div>
    </Layout>
  )
}

export default Section