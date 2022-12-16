import React, { useState } from 'react'
import { LeaderboardAd, RectangleAd } from '../components/Ads'
import Dropdown, { DropdownTwo } from '../components/Dropdown'
import Layout from '../components/Layout'
import { ModernNewsCard, ModernNewsCardShimmer, NewsCard, NewsCardWithImageTop, NewsShimmer } from '../components/News/Card'
import news from "../libs/news.json"
import Link from 'next/link'
import { CheckIcon, InfoIcon } from '../components/Icons'
import { title } from 'process'
import { MainPageNews, SpecificNews } from '../utils/newsapi'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import parse from 'html-react-parser';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
	ssr: false,
	loading: () => <p>Loading ...</p>,
	})
type Props = {}

function News({}: Props) {
  const fontSizes = ['xs','sm','md','lg','xl','2xl','3xl','4xl']
  const [bgColor,setBgColor] = useState('bg-white')
  const time = (d:string) => new Date(d).toDateString();
  const router = useRouter()
  const {news:breakingNews} = MainPageNews({tag:"breaking",take:4,language:router.locale?.toUpperCase()})
  const colors = [
    {
      title:'Plain White',
      color:'bg-white',
      children:<div className={`w-4 h-4 bg-white border-2`}></div>,
      handle:() => setBgColor('bg-white')
    },
    {
      title:'Light Warm',
      color:'bg-yellow-50',
      children:<div className={`w-4 h-4 bg-yellow-50 border-2`}></div>,
      handle:() => setBgColor('bg-yellow-50')
    },
    {
      title:'Warm',
      color:'bg-yellow-100',
      children:<div className={`w-4 h-4 bg-yellow-100 border-2`}></div>,
      handle:() => setBgColor('bg-yellow-100')
    },
  ]
  const [fontSize,setFontSize] = useState(3)
  const fonts:any = [{title:'Sans',handle:() => setFont('font-sans')},{title:'Serif',handle:() => setFont('font-serif')},{title:'Mono',handle:() => setFont('font-mono')}]
  const [font,setFont] = useState('Serif')
  const {news:newsData,isError:newsDataError} = SpecificNews(String(router.query.id))
  return (
    <Layout bg={bgColor}>
      <div className='grid grid-cols-3 p-2'>
        <div className='col-span-3 md:col-span-2 md:border-r-2 border-black dark:border-white'>
          <LeaderboardAd/>
          <div className='flex justify-end p-2'>
            <DropdownTwo title={`Color`} items={colors} value={'Plain White'}/>
            <DropdownTwo title={`Font`} items={fonts} value={font}/>

            <div className='flex items-center'>
              Size:
              <button className='text-sm hover:bg-gray-400 px-3 py-1 rounded-l-2xl' onClick={() => fontSize > 1 && setFontSize(fontSize-1)}>A</button>
              <button className='text-xl hover:bg-gray-400 px-3 rounded-r-xl' onClick={() => fontSize < 7 && setFontSize(fontSize+1)}>A</button>
            </div>
          </div>
          {
            newsData ? 
            <div className='p-5'>
            <p className='py-4 text-xl text-green-600 font-bold'>{newsData.lang == "en" ?newsData.category.title:newsData.category.ne}</p>
            <h1 className='text-5xl font-title font-bold py-4'>{newsData.title}</h1>
            <p className='hover:underline'>By {newsData.author.fullname}</p>
            <p className='mt-2 text-gray-500'>Updated At: {time(newsData.updatedAt)}</p>
            <div className='bg-blue-50 mt-2 p-2 flex items-center space-x-4 border-2 text-blue-800 border-blue-500 dark:border-blue-50 rounded-md dark:text-blue-50 dark:bg-sky-900'>
              <InfoIcon/>
              <div>
              <h3 className='font-bold'>Fact Checking</h3>
              <p>This article has been covered by these other reputed sources.</p>
              <ul>
                <li className='text-orange-400 hover:underline'><Link href={""}>Kathmandu Post</Link></li>
              </ul>
              </div>
            </div>
            {/* <QuillNoSSRWrapper defaultValue={newsData.content} readOnly className={`py-5 text-${fontSizes[fontSize]} ${font}`} /> */}
            <p className={`py-5 text-${fontSizes[fontSize]} ${font}`}>{parse(newsData.content)}</p>
            <LeaderboardAd/>
          </div> : newsData === null ? <div className='text-3xl p-4'>News Doesn't Exist</div>:<NewsShimmer/>
          }
        </div>
        {/* ----------------------- ARKO SECTION ------------------------- */}
        <div className='p-2 col-span-3 md:col-span-1'>
          <RectangleAd/>
          <h3 className='text-2xl font-bold mt-56'>Related News</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-1'>
            {
              breakingNews ? breakingNews.map((content:any,index:number) => (
                <div key={index} className=''>
                  <ModernNewsCard
                    id={content.id}
                    image={content.imageUrl}
                    title={content.title}
                    description={content.content}
                    publishedAt={content.publishedAt}
                    author={content.author}
                  />
                  {
                    index != 2 && <hr />
                  }
                </div>
              )):
              [...Array(4)].map((card,index) => (
                <div key={index} className='col-span-4 md:col-span-2'>
                  <ModernNewsCardShimmer withContent withImage/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default News